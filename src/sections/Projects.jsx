import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import AnimatedTranslation from "../components/AnimatedTranslation";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export default function Projects() {
  const { t } = useTranslation();
  const projectsInfo = [
    {
      name: "Product List with Cart",
      description:
        "A React app with state-managed shopping cart and product listing.",
      tech: ["React", "CSS"],
      github:
        "https://github.com/Irina11122/Product-list-with-cart-SOLUTION.git",
      live: "https://irina11122.github.io/Product-list-with-cart-SOLUTION/",
      image: "/recipe-screenshot.png",
    },
    {
      name: "Space Tourism",
      description:
        "A multi-page website showcasing space destinations, with React router.",
      tech: ["React", "CSS"],
      github:
        "https://github.com/Irina11122/Space-tourism-multi-page-website-MY-SOLUTION.git",
      live: "https://irina11122.github.io/Space-tourism-multi-page-website-MY-SOLUTION/#/destination",
      image: "/space-screenshot.png",
    },
    {
      name: "Sign Up Form",
      description:
        "Responsive sign-up form component with validation using React.",
      tech: ["HTML", "JavaScript", "CSS"],
      github:
        "https://github.com/Irina11122/Intro-component-with-sign-up-form.git",
      live: "https://irina11122.github.io/Intro-component-with-sign-up-form/",
      image: "/form-screenshot.png",
    },
    {
      name: "Social Links Profile",
      description: "A clean profile page with social media links and icons.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Irina11122/social-links-profile-main.git",
      live: "https://irina11122.github.io/social-links-profile-main/",
      image: "/social-links-screenshot.png",
    },
    {
      name: "TO-DO Dashboard",
      description:
        "A React to-do app with dashboard layout and state management.",
      tech: ["React", "CSS"],
      github: "https://github.com/Irina11122/Finalen-Proekt-React.git",
      live: "https://irina11122.github.io/Finalen-Proekt-React/#/dashboard",
      image: "/todo-screenshot.png",
    },
    {
      name: "Advice Generator",
      description:
        "Random advice generator using an external API and React hooks.",
      tech: ["React", "CSS"],
      github: "https://github.com/Irina11122/ADVICE-GENERATOR-API.git",
      live: "https://irina11122.github.io/ADVICE-GENERATOR-API/",
      image: "/advice-screenshot.png",
    },
    {
      name: "City Information",
      description: "Informative site about cities with React and styled UI.",
      tech: ["React", "CSS"],
      github:
        "https://github.com/Irina11122/City-Information-Final-Project-.git",
      live: "https://irina11122.github.io/City-Information-Final-Project-/",
      image: "/city-screenshot.png",
    },
    {
      name: "FAQ Accordion",
      description:
        "Interactive FAQ section with accordion expand/collapse using React.",
      tech: ["JavaScript", "CSS"],
      github: "https://github.com/Irina11122/FAQs-Accordion-Challenge.git",
      live: "https://irina11122.github.io/FAQs-Accordion-Challenge/",
      image: "/faq-screenshot.png",
    },
    {
      name: "Car Website",
      description: "Landing page for a car dealership with clean UI design.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Irina11122/Car-Website.git",
      live: "https://irina11122.github.io/Car-Website/",
      image: "/car-screenshot.png",
    },
    {
      name: "Base Apparel Coming Soon Page",
      description: "Responsive “Coming Soon” landing page with Flexbox layout.",
      tech: ["HTML", "CSS"],
      github:
        "https://github.com/Irina11122/Base-Apparel-Coming-Soon-Page-Solution-With-Flexbox.git",
      live: "https://irina11122.github.io/Base-Apparel-Coming-Soon-Page-Solution-With-Flexbox/",
      image: "/base-screenshot.png",
    },
    {
      name: "ZFK Borec",
      description:
        "Website for ZFK Borec football club, featuring team info and news.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Irina11122/ZFK-Borec-Project.git",
      live: "https://irina11122.github.io/ZFK-Borec-Project/",
      image: "/zfk-screenshot.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative projects-bg z-10 min-h-screen w-full bg-black/80 md:py-10 md:px-4 "
    >
      <h2 className="text-white text-center my-8 text-4xl">
        <AnimatedTranslation tkey="my-projects" />
      </h2>

      <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {projectsInfo.map((project, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: false,
            margin: "100px",
          });
          return (
            <motion.div
              key={i}
              ref={ref}
              initial={{ x: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className=" bg-black/30 border border-green-400 shadow shadow-green-100 rounded p-4 m-4 cursor-pointer hover:bg-black transition-all project-cards"
            >
              <div className="projects-img-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full border w-full rounded mb-3 border-green-400"
                />
              </div>
              <div className="projects-text">
                <h3 className="text-green-400 text-2xl mb-5">
                  {t(project.name)}{" "}
                </h3>
                <p>{t(project.description)} </p>
                <p> {t(project.tech)} </p>
                <div>
                  <a
                    className="hover:text-green-400 hover:scale-105"
                    href={project.live}
                  >
                    {" "}
                    {t("[ GitHub ]")}{" "}
                  </a>
                  <a className="hover:text-green-400" href={project.live}>
                    {" "}
                    {t("[ Live Demo ]")}{" "}
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
