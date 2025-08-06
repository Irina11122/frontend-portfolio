import { useTranslation } from 'react-i18next';
import AnimatedTranslation from './AnimatedTranslation';
import { Link as ScrollLink } from 'react-scroll';
import { TbLanguageHiragana } from 'react-icons/tb';
import { IoIosSunny } from 'react-icons/io';
import { useState } from 'react';
import { FaBars, FaSun, FaTimes } from 'react-icons/fa';
import '../css/Fonts.css';
import { t } from 'i18next';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const changeLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'mk' : 'en';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('i18nextLng', nextLang);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex md:justify-center justify-start">
      <div className="bg-black text-white flex justify-between items-center px-10 py-3 z-30 fixed my-nav">
        <h1 className="font-bold libre-barcode-128-text-regular">
          <AnimatedTranslation tkey="navbar-name" />
        </h1>

        <nav className="hidden md:flex gap-10 text-lg items-center share-tech-mono-regular cursor-pointer">
          <ScrollLink to="home" smooth duration={500} offset={-50}>
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className=""
              data-text={t('home-link')}
            >
              <AnimatedTranslation tkey="home-link" />
            </motion.span>
          </ScrollLink>
          <ScrollLink to="projects" smooth duration={500} offset={-50}>
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className=""
              data-text={t('projects-link')}
            >
              <AnimatedTranslation tkey="projects-link" />
            </motion.span>
          </ScrollLink>
          <ScrollLink to="about" smooth duration={500} offset={-50}>
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className=""
              data-text={t('about-link')}
            >
              <AnimatedTranslation tkey="about-link" />
            </motion.span>
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} offset={-50}>
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className=""
              data-text={t('contact-link')}
            >
              <AnimatedTranslation tkey="contact-link" />
            </motion.span>
          </ScrollLink>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            className="text-2xl hover:scale-110 transition-transform"
            onClick={toggleTheme}
          >
            <IoIosSunny size={30} />
          </button>
          <button
            onClick={changeLanguage}
            className="text-2xl hover:scale-110 transition-transform"
          >
            <TbLanguageHiragana size={30} />
          </button>
        </div>

        <button className="md:hidden z-30 text-2xl " onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`absolute top-full left-0 w-full bg-black/90 h-screen flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
            menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          } md:hidden`}
        >
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-50}
            onClick={closeMenu}
          >
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className="cursor-pointer"
              data-text={t('home-link')}
            >
              <AnimatedTranslation tkey="home-link" />
            </motion.span>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-50}
            onClick={closeMenu}
          >
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className="cursor-pointer"
              data-text={t('projects-link')}
            >
              <AnimatedTranslation tkey="projects-link" />
            </motion.span>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-50}
            onClick={closeMenu}
          >
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className="cursor-pointer"
              data-text={t('about-link')}
            >
              <AnimatedTranslation tkey="about-link" />
            </motion.span>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-50}
            onClick={closeMenu}
          >
            <motion.span
              whileHover={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0px 0px 0px #0f0',
                  '1px 0px 1px #0f0',
                  '-1px -1px 1px #0ff',
                  '1px 1px 2px #f0f',
                  '0px 0px 0px #0f0',
                ],
                color: ['#0f0', '#0ff', '#f0f', '#0f0'],
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className="cursor-pointer"
              data-text={t('contact-link')}
            >
              <AnimatedTranslation tkey="contact-link" />
            </motion.span>
          </ScrollLink>
          <button onClick={toggleTheme}>
            <IoIosSunny size={40} />
          </button>
          <button onClick={changeLanguage} className="text-white font-bold">
            <TbLanguageHiragana size={40} className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
