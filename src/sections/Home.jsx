import { t } from "i18next";
import { useEffect } from "react";
import AnimatedTranslation from "../components/AnimatedTranslation";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import gsap from "gsap";
export default function Home() {
  useEffect(() => {
    gsap.fromTo("#my-text", { x: "1000px", duration: 2.9 }, { x: 0 });
  }, []);
  return (
    <section
      id="home"
      className="mb-20 relative flex md:flex-row flex-col h-screen items-center justify-center overflow-hidden"
    >
      <div className="">
        <img src="/por2.png" alt="portfolio-img" className="home-img" />
      </div>
      <div
        id="my-text"
        className="share-tech-mono-regular home-text-container flex flex-col"
      >
        <div className="home-text overflow-hidden">
          <h1 className="text-2xl mb-3">
            <AnimatedTranslation tkey="hello" />
          </h1>
          <p>
            <AnimatedTranslation tkey="sub-hello-text" />
          </p>

          <div className="flex md:flex md:gap-5 gap-3 justify-end md:mt-14 mt-5 md:mr-9 mr-0">
            <p className="hover:animate-pulse">
              <a href="https://github.com/Irina11122">
                <FaGithub size={40} color="lightgreen" />
              </a>
            </p>
            <p className="hover:animate-pulse">
              <a href="https://instagram.com/irina.bojkovska.ib/">
                <FaInstagram size={40} color="lightgreen" />
              </a>
            </p>
            <p className="hover:animate-pulse">
              <a href="https://www.linkedin.com/in/irina-bojkovska-iri17/">
                <FaLinkedin size={40} color="lightgreen" />
              </a>
            </p>
          </div>
        </div>
        <a href="#projects">
          <button className="decode-btn place-self-center text-3xl py-3 px-9 rounded hover:bg-green-400 transition-all">
            <AnimatedTranslation tkey="decode" />
          </button>
        </a>
      </div>
    </section>
  );
}
