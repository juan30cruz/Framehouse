import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-bg selection:bg-brand-text selection:text-brand-bg">
      <Navbar />
      <Hero />
      <Services />
      <Philosophy />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
