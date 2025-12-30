"use client";

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    // Attach to all links and buttons for the "Expand" effect
    const interactables = document.querySelectorAll('a, button');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-200 ease-out border-2 border-white hidden md:block`}
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isHovering ? 3 : 1})`,
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
      }}
    />
  );
}