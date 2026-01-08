import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'Locations', value: '14' },
    { label: 'Avg Value', value: '$4.2M' },
    { label: 'Years', value: '25' },
    { label: 'Awards', value: '12' },
  ];

  return (
    <section className="bg-stone-50 py-20 border-b border-stone-200/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center group">
              <span className="font-serif text-3xl md:text-4xl text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
