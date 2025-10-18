'use client';

import React from 'react';
import '@/app/globals.css';

import Image from 'next/image';

export default function AutoScrollImage({ alt = 'Scrolling image', height = 300, speed = 20 }) {
  return (
    <div className="scroll-container" style={{ height: `${height}px` }}>
      <div className="scroll-content" style={{ animationDuration: `${speed}s` }}>
        <Image src="Profile1.jpg" alt={alt} className="scroll-image" />
        <Image src="Profile2.jpg" alt={alt} className="scroll-image" />
      </div>
    </div>
  );
}
