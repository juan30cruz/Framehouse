import { motion } from 'motion/react';
import { Camera, Film, Navigation } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Fotografía",
    description: "Enfocada en mostrar la arquitectura y la luz con precisión editorial. Cada encuadre es intencional, capturando la esencia y la escala de los espacios."
  },
  {
    icon: Film,
    title: "Video Cinematográfico",
    description: "Historias visuales que transmiten emociones y venden experiencias. Secuencias fluidas, corrección de color de grado cinematográfico y diseño sonoro."
  },
  {
    icon: Navigation,
    title: "Drone",
    description: "Perspectivas aéreas para destacar ubicación, escala y contexto. Capturas en alta resolución que ubican la propiedad en su entorno ideal."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-32 px-6 md:px-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-brand-text mb-6"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-12 h-px bg-brand-text/30 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-brand-text/10 flex items-center justify-center mb-8 group-hover:border-brand-text/30 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-brand-text/60 group-hover:text-brand-text transition-colors duration-500 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p className="text-brand-text/60 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
