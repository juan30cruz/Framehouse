import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Logo } from './Logo';
import { cn } from '../lib/utils';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <Logo className={cn("transition-colors duration-300", isScrolled ? "text-brand-text" : "text-white group-hover:text-white/80")} />
          <span className={cn(
            "font-serif text-2xl font-medium tracking-wide transition-colors duration-300 hidden sm:block",
            isScrolled ? "text-brand-text" : "text-white"
          )}>
            Framehouse
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.slice(1, -1).map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={cn(
                    "text-sm tracking-widest uppercase transition-colors duration-300",
                    isScrolled 
                      ? "text-brand-text/70 hover:text-brand-text" 
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/5491127724146?text=Hola%21" 
            target="_blank" 
            rel="noreferrer"
            className={cn(
              "px-6 py-2.5 text-sm uppercase tracking-widest border transition-all duration-300",
              isScrolled
                ? "border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg"
                : "border-white text-white hover:bg-white hover:text-brand-text"
            )}
          >
            Contactar
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={cn("md:hidden p-2", isScrolled ? "text-brand-text" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-current transition-all"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-text/10 py-6 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-brand-text/80 text-lg uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
