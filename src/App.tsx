import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import LinkedIn from './components/sections/LinkedIn';
import Contact from './components/sections/Contact';
import './styles/globals.css';
import './styles/responsive.css';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <LinkedIn />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
