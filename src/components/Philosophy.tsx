import { motion } from 'motion/react';

export function Philosophy() {
  return (
    <section className="py-40 px-6 md:px-12 bg-white flex items-center justify-center min-h-[80vh]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl text-brand-text leading-[1.1] mb-8"
        >
          Ya no alcanza con<br className="hidden md:block" />
          <span className="italic text-brand-text/80">mostrar propiedades.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-brand-text/60 font-sans font-light tracking-wide"
        >
          Hacerlas inolvidables cambia todo.
        </motion.p>
      </div>
    </section>
  );
}
