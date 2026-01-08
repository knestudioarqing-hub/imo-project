import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="container mx-auto px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          
          <div className="flex flex-col gap-8">
            <span className="font-serif text-3xl text-stone-200 tracking-wider">LUMIÈRE</span>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest">
              <a href="#" className="hover:text-stone-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-stone-300 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Artstation</a>
            </div>
          </div>

          <div className="w-full md:w-auto text-right">
             <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-[10px] uppercase tracking-widest font-mono">
               <div>
                 <span className="block text-stone-700 mb-2">New York</span>
                 <span>10:42 AM</span>
               </div>
               <div>
                 <span className="block text-stone-700 mb-2">London</span>
                 <span>03:42 PM</span>
               </div>
               <div>
                 <span className="block text-stone-700 mb-2">Tokyo</span>
                 <span>11:42 PM</span>
               </div>
             </div>
             <p className="mt-12 text-[10px] text-stone-700">&copy; 2024 Lumière Estates. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
