import MatrixRain from './background/MatrixRain';
import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeContext';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Projects from './sections/Projects';
export default function App() {
  return (
    <ThemeProvider>
      {' '}
      <Navbar />
      <div className="relative bg-black">
        <MatrixRain />
      </div>
      <div className="relative z-10">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
