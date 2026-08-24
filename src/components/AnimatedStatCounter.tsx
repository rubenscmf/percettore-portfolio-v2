import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedStatCounterProps {
  value: string; // e.g. "540k", "128", "42", "99.8%"
  label: string;
  index: string;
}

export const AnimatedStatCounter = ({
  value,
  label,
  index,
}: AnimatedStatCounterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Extract raw numeric part and suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const targetNum = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? targetNum : 0,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => setInView(true),
    });

    return () => st.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-foreground p-8 md:p-10 border border-background/10 hover:border-primary/50 transition-colors duration-500 group"
    >
      <div className="font-sans text-primary text-xs font-bold uppercase tracking-wider mb-3 flex items-center justify-between">
        <span>[{index}]</span>
        <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
      </div>
      <div className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter flex items-baseline">
        <animated.span>
          {number.to((n) =>
            targetNum % 1 !== 0 ? n.toFixed(1) : Math.floor(n).toString()
          )}
        </animated.span>
        <span>{suffix}</span>
      </div>
      <div className="mt-4 font-sans text-xs font-medium uppercase tracking-wider text-concrete-300 group-hover:text-white transition-colors">
        {label}
      </div>
    </div>
  );
};
