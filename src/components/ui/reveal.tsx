"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  replay?: boolean;
  amount?: number;
};

export function Reveal({ children, className, delay = 0, replay = false, amount = 0.2 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Never hide content on SSR/first paint.
  if (!isMounted || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !replay, amount }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
