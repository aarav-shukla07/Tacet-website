"use client";

import { useEffect, useRef, useState } from 'react';

export default function InteractiveCursor() {
  const [lerpedPos, setLerpedPos] = useState({ x: 0, y: 0 });
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      mousePosRef.current = pos;

      // --- FIX 1: Expanded Hover Detection ---
      // This now correctly checks for links, buttons, and all common text elements.
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isInteractive = !!el.closest('a, button, p, h1, h2, h3, h4, span');
        setHoveringInteractive(isInteractive);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const animate = () => {
      setLerpedPos((prev) => ({
        x: lerp(prev.x, mousePosRef.current.x, 0.2),
        y: lerp(prev.y, mousePosRef.current.y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        transform: `translate3d(${lerpedPos.x}px, ${lerpedPos.y}px, 0)`,
      }}
    >
      <div
        className="rounded-full transition-all duration-300 mix-blend-difference"
        style={{
          // --- FIX 2: Dynamic Styling for Transparent Ring Effect ---
          // When hovering, the cursor becomes a larger, transparent ring with a border.
          width: hoveringInteractive ? '30px' : '13px',
          height: hoveringInteractive ? '30px' : '13px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: hoveringInteractive ? 'transparent' : '#b0b0acff',
          border: hoveringInteractive ? '2px solid #939391ff' : 'none',
        }}
      />
    </div>
  );
}

