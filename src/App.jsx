import { useEffect, useState } from "react";
import MatrixRain from "./background/MatrixRain";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider>
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
