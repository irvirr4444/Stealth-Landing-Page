"use client";

import { useState, useEffect } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState<number | null>(null);

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

    // Refresh count every 8 seconds
    const interval = setInterval(fetchCount, 8000);

    return () => clearInterval(interval);
  }, []);

  if (count === null) {
    return <span className="text-sm text-cream/60">— on the list</span>;
  }

  return (
    <span className="text-sm text-cream/60">
      <span className="text-cream font-medium">{count}</span> on the list
    </span>
  );
}
