"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  duration?: number;
  containerClassName?: string;
  wordClassName?: string;
}

export const LayoutTextFlip = ({
  text = "",
  words,
  duration = 3000,
  containerClassName = "",
  wordClassName = "",
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={`flex items-center justify-center gap-4 text-xl md:text-2xl ${containerClassName}`}>
      {text && <span className="font-bold text-neutral-400">{text}</span>}

      {/* --- THIS IS THE FIX --- */}
      {/* The 'layout' prop is now on the box itself. */}
      {/* This tells the box to animate its size whenever the word inside changes. */}
      <motion.div
        layout
        className="relative rounded-lg bg-neutral-800/50 px-4 py-2 border border-white/10 shadow-lg"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -30, filter: "blur(8px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            exit={{ y: 30, filter: "blur(8px)", opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 15 }}
            // The word is now a simple block element, which correctly dictates the box's width.
            className={`block whitespace-nowrap font-bold ${wordClassName}`}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

