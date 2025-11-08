import React, { useState } from "react";

type QA = { q: string; a: string };
export default function ServiceFAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-8 md:mb-10">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-md">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 font-semibold text-[var(--neutral-900)]"
                >
                  {item.q}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-neutral-700">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}