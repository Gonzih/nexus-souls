import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  to: number;
  duration?: number;
  delay?: number;
  triggerOnView?: boolean;
}

export const Counter = ({ to, duration = 1.5, delay = 0, triggerOnView = false }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (triggerOnView && !inView) return;
    let raf: number;
    const startTimeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = (now - start) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * to));
        if (progress < 1) raf = requestAnimationFrame(tick);
        else setValue(to);
      };
      raf = requestAnimationFrame(tick);
    }, delay * 1000);
    return () => {
      clearTimeout(startTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration, delay, triggerOnView, inView]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
};
