"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export type Card = {
  title: string;
  description: string;
  src: string;
  ctaText?: string;
  ctaLink?: string;
  content: () => React.ReactNode;
};

export function ExpandableCards({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<Card | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useOutsideClick(cardRef, () => setActive(null));

  return (
    <div ref={containerRef} className="grid md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          layoutId={card.title}
          onMouseEnter={() => setActive(card)}
          onMouseLeave={() => setActive(null)}
          className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 cursor-pointer group"
          transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
        >
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-56 object-cover opacity-70 group-hover:opacity-100 transition-all duration-300"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-neutral-400">{card.description}</p>
          </div>

          {/* EXPANDED OVERLAY ON HOVER */}
          <AnimatePresence>
            {active?.title === card.title && (
              <motion.div
                ref={cardRef}
                layoutId={card.title + "_expanded"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 z-50 bg-neutral-950 bg-opacity-95 p-8 flex flex-col justify-center items-center text-center rounded-2xl"
              >
                
                <h3 className="text-2xl font-bold mb-2 text-white">{card.title}</h3>
                <div className="text-neutral-300 text-base leading-relaxed max-w-md">
                  {card.content()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}