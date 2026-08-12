import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#09090b";
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < 24; index += 1) {
        const radius = 24 + index * 9;
        const alpha = 0.04 + index * 0.007;
        context.beginPath();
        context.strokeStyle = `rgba(212, 163, 115, ${alpha})`;
        context.lineWidth = 1.5;
        context.ellipse(
          width / 2,
          height / 2,
          radius + Math.sin(time / 900 + index) * 10,
          radius * 0.45 + Math.cos(time / 1200 + index) * 6,
          time / 5000,
          0,
          Math.PI * 2
        );
        context.stroke();
      }

      context.beginPath();
      context.fillStyle = "rgba(137, 28, 41, 0.35)";
      context.arc(width / 2, height / 2, 84 + Math.sin(time / 600) * 12, 0, Math.PI * 2);
      context.fill();

      animationFrame = window.requestAnimationFrame(draw);
    };

    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full rounded-[2rem]" />;
}
