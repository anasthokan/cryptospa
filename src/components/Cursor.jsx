import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          zIndex: 99999,
        }}
      />

      {/* GLOW */}
      <div
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-gold/20 blur-3xl pointer-events-none"
        style={{
          transform: `translate(${pos.x - 48}px, ${pos.y - 48}px)`,
          zIndex: 99998,
        }}
      />
    </>
  );
}
