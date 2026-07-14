import React, { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

type QA = { q: string; a: string };

export default function ServiceFAQ({ items }: { items: QA[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-8 md:mb-10">
          {t.servicePage.faqHeading}
        </h2>
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q} className="bg-white rounded-2xl shadow-md">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 font-semibold text-[var(--neutral-900)]"
                >
                  {item.q}
                </button>
                {/*
                  Collapsed answers stay in the DOM (visually hidden) rather than being
                  unmounted. Our FAQPage schema asserts this text is on the page, and a
                  crawler that never clicks — which is every AI crawler — has to be able
                  to read it. Schema without matching on-page copy is a violation.
                */}
                <div className={isOpen ? "px-5 pb-5 pt-0 text-neutral-700" : "sr-only"}>{item.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
