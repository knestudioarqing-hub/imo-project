import React from 'react';

const STEPS = [
  { title: 'The Encounter', desc: 'A private briefing to understand your architectural soul.' },
  { title: 'The Selection', desc: 'Curating off-market assets that align with your legacy.' },
  { title: 'The Protocol', desc: 'Discreet negotiation and legal structuralization.' },
  { title: 'The Handover', desc: 'Seamless transition into your new sanctuary.' },
];

export const AcquisitionPath: React.FC = () => {
  return (
    <section className="py-40 bg-stone-950">
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl text-stone-200 leading-none sticky top-32">
              The Path <br/> to <span className="italic">Legacy</span>
            </h2>
          </div>
          <div className="space-y-24">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-12 border-l border-stone-800 pb-4">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-stone-600 rounded-full"></div>
                <span className="text-[10px] font-mono text-stone-600 mb-4 block">0{idx + 1} &mdash; Step</span>
                <h3 className="font-serif text-3xl text-stone-200 mb-4">{step.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};