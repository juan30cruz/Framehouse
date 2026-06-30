import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="inicio" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/* Placeholder Video - using a high quality Unsplash image with a slow scale if video fails, but we'll try a stock video URL first */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-beautiful-modern-house-with-a-pool-2354/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6"
        >
          Luxury Real Estate, <br className="hidden md:block" />
          <span className="italic font-light">Directed Like Cinema.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mb-12"
        >
          Fotografía, video y narrativa visual para propiedades que merecen destacarse.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            Ver proyectos
          </a>
          <a 
            href="https://wa.me/5491127724146?text=Hola%21"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
