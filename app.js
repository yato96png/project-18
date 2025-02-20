import { useEffect, useRef } from "react";

const MerlanBouncing = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 50, y = 50; // Начальная позиция
    let dx = 2, dy = 2; // Скорость движения
    const text = "Мерлан";
    const fontSize = 30;

    ctx.font = `${fontSize}px Arial`;
    const textWidth = ctx.measureText(text).width;
    const textHeight = fontSize;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "red";
      ctx.fillText(text, x, y);

      x += dx;
      y += dy;

      if (x + textWidth > canvas.width || x < 0) dx *= -1;
      if (y > canvas.height || y - textHeight < 0) dy *= -1;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ display: "block", background: "black" }}
    />
  );
};

export default MerlanBouncing;
