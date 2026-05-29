import { useRef, useEffect, useState } from "react";
import { stats } from "../../data/stats";

function useCountUp(end, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!startCounting) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, startCounting]);

  return count;
}

function StatItem({ label, value, suffix = "" }) {
  const [ref, isVisible] = useFadeIn(0.3); // reuse your existing useFadeIn hook
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center p-6 glass">
      <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-neutral-500 dark:text-neutral-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight text-neutral-900 dark:text-white">
        By the Numbers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}