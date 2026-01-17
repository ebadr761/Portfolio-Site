import NavBar from './NavBar';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

function HomePage() {
  return (
    <div className="min-h-screen">
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

export default HomePage;
