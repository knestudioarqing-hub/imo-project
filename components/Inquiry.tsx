import React from 'react';

export const Inquiry: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-stone-200 text-stone-950">
      <div className="container mx-auto px-6 md:px-24">
        
        <div className="flex flex-col md:flex-row justify-between mb-24">
          <h2 className="font-serif text-6xl md:text-8xl leading-none tracking-tight">
            Start <br/> Dialog
          </h2>
          <div className="mt-8 md:mt-0 flex flex-col justify-end text-right">
             <a href="mailto:private@lumiere.com" className="text-lg border-b border-stone-950 pb-1 mb-2 hover:opacity-60 transition-opacity">private@lumiere.com</a>
             <p className="text-xs uppercase tracking-widest text-stone-500">By Appointment Only</p>
          </div>
        </div>

        <form className="max-w-4xl">
          <div className="space-y-0">
            <div className="group relative py-8 border-b border-stone-300 transition-colors focus-within:border-stone-950">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 absolute top-2 left-0">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent text-2xl font-serif text-stone-950 placeholder-stone-300 focus:outline-none pt-4"
                placeholder="Enter Full Name"
              />
            </div>
            
            <div className="group relative py-8 border-b border-stone-300 transition-colors focus-within:border-stone-950">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 absolute top-2 left-0">Contact</label>
              <input 
                type="email" 
                className="w-full bg-transparent text-2xl font-serif text-stone-950 placeholder-stone-300 focus:outline-none pt-4"
                placeholder="Email Address"
              />
            </div>

            <div className="group relative py-8 border-b border-stone-300 transition-colors focus-within:border-stone-950">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 absolute top-2 left-0">Inquiry</label>
               <textarea 
                rows={1}
                className="w-full bg-transparent text-2xl font-serif text-stone-950 placeholder-stone-300 focus:outline-none pt-4 resize-none"
                placeholder="Tell us about your requirements"
              ></textarea>
            </div>
          </div>

          <button className="mt-16 w-full py-6 bg-stone-950 text-white text-sm uppercase tracking-[0.3em] hover:bg-stone-800 transition-colors flex justify-between px-8 group">
            <span>Send Request</span>
            <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </button>
        </form>

      </div>
    </section>
  );
};
