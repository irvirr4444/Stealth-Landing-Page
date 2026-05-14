"use client";

import { useState, useEffect, useRef } from "react";
import Caret from "./Caret";

const words = ["deals", "capital", "book", "relationships"];

export default function CyclingHeadline() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [minWidth, setMinWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      const spans = measureRef.current.querySelectorAll("span");
      let maxWidth = 0;
      spans.forEach((span) => {
        maxWidth = Math.max(maxWidth, span.offsetWidth);
      });
      setMinWidth(maxWidth);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hidden measurement container */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none text-[1.7rem] sm:text-4xl font-serif italic"
        aria-hidden="true"
      >
        {words.map((word) => (
          <span key={word} className="block">
            {word}|
          </span>
        ))}
      </span>

      <h1 className="text-[1.7rem] sm:text-4xl font-serif leading-tight">
        <span className="block">Don&apos;t run your</span>
        <span
          className={`block italic text-gold transition-all duration-300 ${
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
          style={{ minWidth: minWidth > 0 ? `${minWidth}px` : undefined }}
        >
          {words[index]}
          <Caret />
        </span>
        <span className="block">alone anymore.</span>
      </h1>
    </>
  );
}
