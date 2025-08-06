import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function MatrixRain() {
  const canvasRef = useRef();
  const { theme } = useTheme();
  const colorPerColumn = useRef([]);

  const fontSize = 15;
  const columns = Math.floor(window.innerWidth / fontSize);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const letters =
      'QWERTYUIOPASDFGHJKLZXCVBNM1234567890abcdefghijklmnopqrstuvwxyzアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const drops = Array(columns).fill(1);

    function getRandomColor(theme) {
      if (theme === 'dark') {
        const greens = ['#00ff99', '#00ff00', '#00cc00', '#00aa55', '#00ee88'];
        return greens[Math.floor(Math.random() * greens.length)];
      } else {
        const lights = [
          '#cc0ff0',
          '#ff00ff',
          '#00ccff',
          '#00ffaa',
          '#ff6600',
          '#ff0033',
        ];
        return lights[Math.floor(Math.random() * lights.length)];
      }
    }

    colorPerColumn.current = Array(columns)
      .fill()
      .map(() => getRandomColor(theme));

    ctx.font = `${fontSize}px monospace`;

    function draw() {
      const bgColor =
        theme === 'dark' ? 'rgba(0,0,0,0.05)' : 'rgba(255, 255, 255, 0.08)';

      const trailColor =
        theme === 'dark' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(37, 3, 44, 0.442)';

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const color = colorPerColumn.current[i];

        ctx.fillStyle = trailColor;
        ctx.fillText(text, x, y + 1);

        ctx.shadowColor = color;
        ctx.shadowBlur = theme === 'dark' ? 2 : 12;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.shadowBlur = 0;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme, columns]);

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen fixed top-0 left-0 z-[-1] pointer-events-none"
      style={{ zIndex: 0 }}
    >
      MatrixRain
    </canvas>
  );
}
