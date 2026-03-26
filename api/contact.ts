import type { VercelRequest, VercelResponse } from '@vercel/node';

const GHL_BASE = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';

// Custom field IDs from setup-ghl-fields.js
const CUSTOM_FIELD_IDS = {
  tipo_de_proyecto: 'bqczyXoBrz4uz9Wf2VH2',
  detalles_del_proyecto: '0SYaOQp1Vz9WPVACHaAo',
  fuente_del_lead: 'nquamkpS72RQVMFRo3UB',
  servicio_interes: 'wpv4J7eXUWA2SEwEk2Cf',
  pagina_de_origen: 'knUCIr92qCWIbHU8yWzv',
};

// Map tipoProyecto values to display labels for GHL
const TIPO_PROYECTO_MAP: Record<string, string> = {
  'oficinas-corporativas': 'Oficinas Corporativas',
  'comercial': 'Desarrollo Comercial',
  'institucional': 'Proyecto Institucional',
  'residencial': 'Desarrollo Residencial',
  'mixto': 'Proyecto Mixto',
  'otro': 'Otro',
};

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://artedim.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_KEY = process.env.GHL_API_KEY;
  const LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!API_KEY || !LOCATION_ID) {
    console.error('Missing GHL_API_KEY or GHL_LOCATION_ID env vars');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const {
      nombre,
      email,
      telefono,
      empresa,
      tipoProyecto,
      mensaje,
      source,
      serviceSlug,
      pageUrl,
    } = req.body;

    // Validation
    if (!nombre || !email) {
      return res.status(400).json({ error: 'nombre and email are required' });
    }

    const { firstName, lastName } = splitName(nombre);

    // Build custom fields array
    const customFields: { id: string; field_value: string }[] = [];

    if (tipoProyecto) {
      customFields.push({
        id: CUSTOM_FIELD_IDS.tipo_de_proyecto,
        field_value: TIPO_PROYECTO_MAP[tipoProyecto] || tipoProyecto,
      });
    }

    if (mensaje) {
      customFields.push({
        id: CUSTOM_FIELD_IDS.detalles_del_proyecto,
        field_value: mensaje,
      });
    }

    if (source) {
      customFields.push({
        id: CUSTOM_FIELD_IDS.fuente_del_lead,
        field_value: source,
      });
    }

    if (serviceSlug) {
      customFields.push({
        id: CUSTOM_FIELD_IDS.servicio_interes,
        field_value: serviceSlug,
      });
    }

    if (pageUrl) {
      customFields.push({
        id: CUSTOM_FIELD_IDS.pagina_de_origen,
        field_value: pageUrl,
      });
    }

    // Build GHL contact payload
    const contactPayload: Record<string, unknown> = {
      firstName,
      lastName,
      email,
      locationId: LOCATION_ID,
      source: 'artedim.com',
      tags: ['website-lead', source || 'web-form'],
      customFields,
    };

    if (telefono) contactPayload.phone = telefono;
    if (empresa) contactPayload.companyName = empresa;

    // POST to GHL
    const ghlRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Version': API_VERSION,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    });

    const ghlData = await ghlRes.json();

    if (!ghlRes.ok) {
      console.error('GHL error:', ghlRes.status, JSON.stringify(ghlData));
      return res.status(502).json({ error: 'Failed to create contact', detail: ghlData.message || ghlData.error || 'Unknown GHL error' });
    }

    return res.status(200).json({
      success: true,
      contactId: ghlData.contact?.id,
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
