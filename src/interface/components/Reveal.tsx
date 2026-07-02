import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom" | "fade" | "menu";
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  direction = "fade",
  delay = 0,
  duration = 0.8,
  once = false,
}: RevealProps) {
  const initial = {
    opacity: 0,
    x:
      direction === "left"
        ? -80
        : direction === "right"
        ? 80
        : 0,
    y:
      direction === "top"
        ? -80
        : direction === "bottom"
        ? 80
        : direction === "menu"
        ? -30
        : 0,
    scale: direction === "menu" ? 0.95 : 1,
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{
        once,
        amount: 0.25,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}