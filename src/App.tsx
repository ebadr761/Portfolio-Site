import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-background text-text min-h-screen">
      <ScrollProgress />
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;