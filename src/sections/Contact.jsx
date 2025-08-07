import { Canvas } from "@react-three/fiber";
import { Typewriter } from "react-simple-typewriter";
import Character from "../components/Character";
import { useEffect } from "react";
import gsap from "gsap";
export default function Contact() {
  useEffect(() => {
    gsap.fromTo("#term", { x: "-1000px", duration: 1, delay: 2 }, { x: 0 });
  }, []);
  return (
    <section
      id="contact"
      className="h-screen flex justify-center md:z-10 z-0 w-full"
    >
      <div className="contact-wrapper ml-10 md:w-full w-full">
        <div
          id="term"
          className="contact-terminal flex flex-col items-start justify-start"
        >
          <p>System Log:</p>
          <p>
            Loading Socials...{" "}
            <Typewriter
              words={["... ███████"]}
              typeSpeed={40}
              deleteSpeed={30}
              delaySpeed={1000}
              loop={false}
              cursor
              cursorColor="_"
            />{" "}
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:irinabojkovska45@gmail.com"
              className="text-pink-100"
            >
              irinabojkovska45@gmail.com
            </a>
          </p>
          <p>
            Linkedin:
            <a
              className="text-pink-100"
              href="https://www.linkedin.com/in/irina-bojkovska-iri17/"
            >
              linkedin.com/in/iri17
            </a>
          </p>
          <p>
            Github:
            <a className="text-pink-100" href="https://github.com/Irina11122">
              github.com/irinaDev
            </a>
          </p>
          <p>
            Instagram:
            <a
              className="text-pink-100"
              href="https://instagram.com/irina.bojkovska.ib/"
            >
              Irina.Bojkovska
            </a>
          </p>{" "}
          <p>
            Twitter:
            <a className="text-pink-100" href="https://x.com/BojkovskaI87728">
              Iri17
            </a>
          </p>
        </div>
      </div>
      <Canvas
        className="md:w-1/2 md:mr-10 w-full character"
        camera={{ position: [0, 1.5, 3], fov: 30 }}
      >
        <ambientLight intensity={0.3} />{" "}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />{" "}
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          color="#00ff00"
        />
        <Character />
      </Canvas>
    </section>
  );
}
