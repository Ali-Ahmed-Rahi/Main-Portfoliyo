"use client";

import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({ children, className = "", delay = 0, amount = 0.2 }) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export default Reveal;
