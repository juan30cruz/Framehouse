import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10 text-white/50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo className="text-white w-8 h-8 opacity-80" />
          <p className="text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Framehouse. Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm tracking-widest uppercase">
          <a href="https://www.instagram.com/framehouse.re?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Vimeo</a>
        </div>
      </div>
    </footer>
  );
}
