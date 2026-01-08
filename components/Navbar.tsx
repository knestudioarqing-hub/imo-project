import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'The Collection', href: '#collection' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Private Office', href: '#services' },
  { label: 'Inquire', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Perimeter Navigation - Fixed Elements */}
      <nav className="fixed inset-0 pointer-events-none z-40 p-6 md:p-12 flex flex-col justify-between">
        
        {/* Top Bar */}
        <div className="flex justify-between items-start pointer-events-auto">
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl tracking-widest text-stone-200">LUMIÈRE</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 group-hover:text-stone-300 transition-colors">Est. MMXXIV</span>
          </a>

          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 text-stone-300 mix-blend-difference"
          >
            <span className="hidden md:block text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Menu</span>
            <div className="w-12 h-12 rounded-full border border-stone-600 flex items-center justify-center group-hover:bg-stone-200 group-hover:text-black transition-all duration-300">
              <Menu size={16} />
            </div>
          </button>
        </div>

        {/* Side Text (Vertical) */}
        <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 -rotate-180 w-6 h-full items-center justify-center pointer-events-auto">
           <span className="text-[10px] uppercase tracking-[0.4em] text-stone-600 writing-vertical-rl rotate-90">
             Global Real Estate Portfolio
           </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pointer-events-auto">
          <div className="hidden md:block">
            <span className="text-[10px] uppercase tracking-widest text-stone-500">
              Paris &mdash; New York &mdash; Tokyo
            </span>
          </div>
          
          <button className="bg-stone-200 text-stone-950 px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-stone-400 transition-colors">
            Book Viewing
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-stone-950 text-stone-200 transition-transform duration-[800ms] cubic-bezier(0.77, 0, 0.175, 1) ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute top-0 right-0 p-6 md:p-12">
           <button 
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-200 hover:text-black transition-all duration-300"
          >
            <X size={16} />
          </button>
        </div>

        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center p-12">
           <div className="flex flex-col space-y-2 md:space-y-6 text-center md:text-left">
             {NAV_ITEMS.map((item, idx) => (
               <a 
                 key={idx}
                 href={item.href}
                 onClick={() => setIsOpen(false)}
                 className="group relative font-serif text-5xl md:text-8xl text-stone-500 hover:text-stone-100 transition-colors duration-500"
               >
                 <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                 {item.label}
                 <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <ArrowUpRight size={40} strokeWidth={1} />
                 </span>
               </a>
             ))}
           </div>
           
           <div className="hidden md:block absolute bottom-12 left-12">
             <p className="text-xs uppercase tracking-widest text-stone-600 max-w-xs leading-relaxed">
               Crafting environments that inspire <br/> the extraordinary human experience.
             </p>
           </div>
        </div>
      </div>
    </>
  );
};
