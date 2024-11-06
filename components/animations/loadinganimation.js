import { useEffect, useRef, useState } from 'react';

const LoadingAnimation = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const [lineAnimation, setLineAnimation] = useState(false); // State to control line animation

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fontSize = 16;
    let letters = '010110'.split('');
    let columns = canvas.width / fontSize;

    // Set random initial positions for drops
    let drops = Array.from({ length: columns }).map(() =>
      Math.floor(Math.random() * canvas.height / fontSize)
    );

    // Resize canvas to fullscreen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = canvas.width / fontSize;
      drops = Array.from({ length: columns }).map(() =>
        Math.floor(Math.random() * canvas.height / fontSize)
      );
    };
    resizeCanvas();

    // Matrix-style animation function with random drop pattern
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#fff';
      ctx.font = fontSize + 'px Gotham';

      drops.forEach((y, x) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);

        // Randomly reset the drop position to create the "rain" effect
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }
        drops[x]++;
      });
    };

    const animate = () => {
      drawMatrix();
      requestAnimationFrame(animate);
    };

    // Start the matrix animation
    let animationFrameId = requestAnimationFrame(animate);

    // Start the line animation a bit sooner than matrix fade-out
    const lineAnimationTimeout = setTimeout(() => {
      setLineAnimation(true); // Start line animation
    }, 1200); // Start slightly before matrix fade-out

    // Fade out matrix and trigger page load after line animation
    const animationTimeout = setTimeout(() => {
      canvas.style.opacity = '0'; // Fade out canvas
      setTimeout(onFinish, 1000); // Complete after fade
    }, 1500);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearTimeout(lineAnimationTimeout);
      clearTimeout(animationTimeout);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [onFinish]);

  return (
    <>
      {/* Canvas for matrix animation */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          zIndex: 10,
          transition: 'opacity 1s ease',
        }}
      />

      {/* Horizontal line animation with glow effect */}
      {lineAnimation && (
        <div
          className="horizontal-line"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '0',
            height: '2px',
            backgroundColor: '#fff',
            zIndex: 20,
            transform: 'translate(-50%, -50%)',
            animation: 'expandLine 1s forwards ease, glow 1s infinite alternate',
          }}
        />
      )}
    </>
  );
};

export default LoadingAnimation;
