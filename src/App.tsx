import Header from './components/Header';
import Hero from './components/Hero';
import Organization from './components/Organization';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Organization />
      <Stats />
      <Services />
      <Projects />
      <Clients />
      <Certification />
      <Contact />
      <Footer />
      <SocialIcons />
    </div>
  );
}

export default App;
