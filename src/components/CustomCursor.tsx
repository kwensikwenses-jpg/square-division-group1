"use client";

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 bg-[#6082a3] border-2 border-black pointer-events-none transition-transform duration-75 ease-out rounded-full mix-blend-difference"
      style={{ 
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        // This ensures it stays above every block, shadow, and button
        zIndex: 9999 
      }}
    />
  );
};

export default CustomCursor;