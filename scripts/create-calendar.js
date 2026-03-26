#!/usr/bin/env node

/**
 * Creates the "Citas Con Arte y Dimensiones" calendar in GHL.
 * Run AFTER adding a team member (Katerine) to the Arte y Dimensiones location.
 *
 * Usage: node scripts/create-calendar.js
 *
 * After running, update CALENDAR_ID in src/pages/Agenda.tsx with the output ID.
 */

const GHL_BASE = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';
const API_KEY = process.env.GHL_ARTEDIMENSIONES_KEY || 'pit-3be0b8fe-86fa-4142-bd73-e1871794c86b';
const LOCATION_ID = process.env.GHL_ARTEDIMENSIONES_LOCATION || 'CbeRKdqS8gHimMxfW8wV';

async function ghl(method, path, body = null) {
  const url = `${GHL_BASE}${path}`;
  const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Version': API_VERSION,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`GHL ${method} ${path} → ${res.status}: ${text}`);
  }
  return JSON.parse(text);
}

async function main() {
  console.log('Fetching team members for location...');

  // Get users assigned to this location
  const usersRes = await ghl('GET', `/users/search?companyId=cM984jwgxnGn785Ri24i&locationId=${LOCATION_ID}`);
  const users = usersRes.users || [];

  if (users.length === 0) {
    console.error('ERROR: No team members found in Arte y Dimensiones location.');
    console.error('Go to GHL Dashboard > Settings > Team Management and add Katerine first.');
    process.exit(1);
  }

  console.log(`Found ${users.length} team member(s):`);
  users.forEach(u => console.log(`  - ${u.name} (${u.id})`));

  // Use first user as primary team member
  const primaryUser = users[0];

  const calendarPayload = {
    locationId: LOCATION_ID,
    name: 'Citas Con Arte y Dimensiones',
    description: 'Agenda tu evaluación arquitectónica gratuita con Arte y Dimensiones. 30 minutos, sin compromiso.',
    slug: 'citas-artedim',
    widgetSlug: 'citas-artedim',
    calendarType: 'round_robin',
    widgetType: 'default',
    eventTitle: 'Evaluación Arquitectónica - Arte y Dimensiones',
    eventColor: '#E73D1D',
    slotDuration: 30,
    slotInterval: 30,
    slotBuffer: 15,
    appoinmentPerSlot: 1,
    appoinmentPerDay: 8,
    teamMembers: users.map(u => ({
      userId: u.id,
      priority: 0.5,
      meetingLocationType: 'custom',
      meetingLocation: 'Oficina Arte y Dimensiones - Calle Alberto Navarro, Mandalay Apartments',
    })),
    formSubmitType: 'ThankYouMessage',
    formSubmitThanksMessage: '¡Gracias! Tu cita ha sido agendada. Te contactaremos para confirmar.',
  };

  console.log('\nCreating calendar...');
  const result = await ghl('POST', '/calendars/', calendarPayload);

  const calendarId = result.calendar?.id;
  const widgetSlug = result.calendar?.widgetSlug;

  console.log('\n===================================================');
  console.log('CALENDAR CREATED SUCCESSFULLY');
  console.log(`Calendar ID: ${calendarId}`);
  console.log(`Widget Slug: ${widgetSlug}`);
  console.log(`\nBooking Widget URL:`);
  console.log(`https://api.leadconnectorhq.com/widget/booking/${calendarId}`);
  console.log('\nUpdate CALENDAR_ID in src/pages/Agenda.tsx with:');
  console.log(`const CALENDAR_ID = "${calendarId}";`);
  console.log('===================================================');
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
