import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contacto" className="py-40 px-6 md:px-12 bg-[#111111] text-white text-center flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-serif leading-tight mb-16"
        >
          ¿Listo para que tus propiedades se vean como una producción cinematográfica?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="https://wa.me/5491127724146?text=Hola%21"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-12 py-5 bg-white text-black text-sm uppercase tracking-[0.2em] font-medium hover:bg-brand-bg transition-colors duration-300"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
