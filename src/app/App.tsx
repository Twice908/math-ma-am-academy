import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Classes } from './components/Classes';
import { SpecialBatches } from './components/SpecialBatches';
import { Languages } from './components/Languages';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Classes />
        <SpecialBatches />
        <Languages />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
