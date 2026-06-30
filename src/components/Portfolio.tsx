import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Villa Lumina",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
    description: "Una obra maestra de la arquitectura contemporánea que combina luz natural y diseño minimalista para crear una experiencia visual única."
  },
  {
    id: 2,
    title: "Penthouse Horizonte",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    aspectRatio: "aspect-[16/9]",
    description: "Vistas panorámicas inigualables de la ciudad desde un espacio diseñado con los más altos estándares de lujo y sofisticación."
  },
  {
    id: 3,
    title: "Casa Madera",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    description: "La perfecta armonía entre materiales naturales y diseño moderno, integrada sutilmente en su entorno forestal."
  },
  {
    id: 4,
    title: "Residencia Costera",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]",
    description: "Un santuario de tranquilidad donde el diseño arquitectónico se encuentra con la majestuosidad del océano."
  },
  {
    id: 5,
    title: "Santuario Urbano",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    description: "Un escape sereno en medio de la ciudad, destacando proporciones perfectas y acabados de primera calidad."
  },
  {
    id: 6,
    title: "Oasis Moderno",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop",
    aspectRatio: "aspect-square",
    description: "Arquitectura que desafía el paisaje árido con líneas limpias y amplios espacios de vida al aire libre."
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-brand-text"
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-text/60 font-light max-w-sm"
          >
            Una selección de nuestras producciones recientes para propiedades que definen el lujo.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
              className="relative group overflow-hidden break-inside-avoid bg-brand-bg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={cn("w-full relative overflow-hidden", project.aspectRatio)}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-2xl font-serif mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <button className="px-6 py-2 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Ver proyecto
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 md:bg-transparent text-white md:text-brand-text hover:opacity-70 transition-opacity rounded-full md:rounded-none"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-3/5 h-[40vh] md:h-[70vh] relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif text-brand-text mb-6">
                  {selectedProject.title}
                </h3>
                <div className="w-12 h-px bg-brand-text/30 mb-6" />
                <p className="text-brand-text/70 font-light leading-relaxed mb-10">
                  {selectedProject.description}
                </p>
                
                <a 
                  href={`https://wa.me/5491127724146?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20un%20proyecto%20como%20el%20de%20${encodeURIComponent(selectedProject.title)}`} 
                  target="_blank"
                  rel="noreferrer"
                  className="self-start px-8 py-3 bg-[#111111] text-white text-sm uppercase tracking-widest hover:bg-brand-text/80 transition-colors duration-300"
                >
                  Consultar proyecto
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
