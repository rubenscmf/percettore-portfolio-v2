import { ReactNode, useRef, MouseEvent } from "react";
import { useSpring, animated } from "@react-spring/web";

export const SpringCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [props, api] = useSpring(() => ({
    xys: [0, 0, 1],
    shadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    config: { mass: 1, tension: 300, friction: 22 },
  }));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D tilt angles (-4 to +4 deg max)
    const rotX = -(y / (rect.height / 2)) * 4;
    const rotY = (x / (rect.width / 2)) * 4;

    api.start({
      xys: [rotX, rotY, 1.015],
      shadow: "0px 20px 40px rgba(0, 0, 0, 0.12)",
    });
  };

  const handleMouseLeave = () => {
    api.start({
      xys: [0, 0, 1],
      shadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    });
  };

  return (
    <animated.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: props.xys.to(
          (x, y, s) =>
            `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
        boxShadow: props.shadow,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative rounded-sm transition-shadow duration-300 ${className}`}
    >
      {children}
    </animated.div>
  );
};
