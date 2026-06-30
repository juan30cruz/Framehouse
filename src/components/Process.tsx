import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "De la idea" },
  { num: "02", title: "Dirección" },
  { num: "03", title: "Edición" },
  { num: "04", title: "Narrativa" },
  { num: "05", title: "Entrega" }
];

export function Process() {
  return (
    <section id="proceso" className="py-32 px-6 md:px-12 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-brand-text mb-24 text-center"
        >
          Proceso Creativo
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-0 md:right-0 md:top-[27px] md:bottom-auto w-px md:w-full md:h-px bg-brand-text/10" />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex md:flex-col items-center md:items-start group"
              >
                {/* Dot */}
                <div className="w-14 h-14 rounded-full bg-brand-bg border border-brand-text/20 flex items-center justify-center shrink-0 group-hover:border-brand-text/50 transition-colors duration-500 md:mb-8 z-10">
                  <span className="font-serif text-brand-text/60 text-lg group-hover:text-brand-text transition-colors duration-500">{step.num}</span>
                </div>
                
                {/* Content */}
                <div className="ml-8 md:ml-0 pt-2 md:pt-0">
                  <h3 className="text-xl font-medium text-brand-text">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
