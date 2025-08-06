import { useEffect, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function MatrixText({ char, revealDelay }) {
  const [displayChar, setDisplayChar] = useState('');
  useEffect(() => {
    let interval;
    let timeout;

    interval = setInterval(() => {
      setDisplayChar(letters[Math.floor(Math.random() * letters.length)]);
    }, 50);

    timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplayChar(char);
    }, revealDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [char, revealDelay]);
  return <span>{displayChar}</span>;
}
export default function TranslateText({ text, speed = 80 }) {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    setRevealedCount(0);
    if (!text) return;

    const interval = setInterval(() => {
      setRevealedCount((count) => {
        if (count >= text.length) {
          clearInterval(interval);
          return count;
        }
        return count + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <div>
      <span>
        {text.split('').map((char, i) => (
          <MatrixText key={i} char={char} revealDelay={speed * (i + 1)} />
        ))}
      </span>
    </div>
  );
}
