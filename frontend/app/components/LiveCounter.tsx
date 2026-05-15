"use client";

import { useState, useEffect, useRef } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchCount = async () => {
    try {
      const res = await fetch("/api/leads/count");
      const data = await res.json();
      setCount(data.count);
    } catch {
      // Keep existing count on error
    }
  };

  useEffect(() => {
    fetchCount();

    const interval = setInterval(fetchCount, 8000);
    window.addEventListener("lead-submitted", fetchCount);

    return () => {
      clearInterval(interval);
      window.removeEventListener("lead-submitted", fetchCount);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (count === null) return;

    if (displayCount === null) {
      setDisplayCount(count);
      return;
    }

    if (count !== displayCount && !isAnimating) {
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setDisplayCount(count);
        setIsAnimating(false);
      }, 200);
    }
  }, [count, displayCount, isAnimating]);

  if (displayCount === null) {
    return <span className="text-sm text-cream/60">— on the list</span>;
  }

  return (
    <span className="text-sm text-cream/60">
      <span
        className="text-cream font-medium inline-block"
        style={{
          transform: isAnimating ? "translateY(-4px)" : "translateY(0)",
          opacity: isAnimating ? 0 : 1,
          transition: "transform 200ms ease-out, opacity 200ms ease-out",
        }}
      >
        {displayCount}
      </span>{" "}
      on the list
    </span>
  );
}
