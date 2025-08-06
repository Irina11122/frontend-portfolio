import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const [aboutLines, setAboutLines] = useState(() =>
    t('about.lines', { returnObjects: true }),
  );

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (!isInView) return;

    const newLines = t('about.lines', { returnObjects: true });
    setAboutLines(newLines);
    setDisplayedLines([]);
    setCurrentLine(0);
    setCurrentText('');
  }, [i18n.language, isInView, t]);

  useEffect(() => {
    if (!isInView || currentLine >= aboutLines.length) return;

    if (currentText.length < aboutLines[currentLine].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + aboutLines[currentLine][prev.length]);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentLine((prev) => prev + 1);
        setCurrentText('');
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentText, isInView, aboutLines]);

  return (
    <section
      ref={ref}
      id="about"
      className="flex justify-center items-center min-h-screen about-bg px-4"
    >
      <div className="cmd text-sm md:text-base">
        <p className="text-yellow-100">C:\Irina\Pro &gt; whoami</p>

        {displayedLines.map((line, i) => {
          return (
            <div
              key={i}
              className={
                line.startsWith('C:\\')
                  ? 'text-yellow-100'
                  : line.startsWith('[')
                  ? 'text-matrixGreen'
                  : 'text-green-600'
              }
            >
              {line}
            </div>
          );
        })}

        {currentLine < aboutLines.length && (
          <div className="prompt text-green-600">
            {currentText}
            <span className="blinking-cursor">_</span>
          </div>
        )}
      </div>
    </section>
  );
}
