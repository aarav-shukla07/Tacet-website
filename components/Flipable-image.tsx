"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlippableImage = ({
  frontImage,
  backImage,
  alt,
  className,
}: {
  frontImage: string;
  backImage: string;
  alt: string;
  className?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <div
          className="absolute h-full w-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={frontImage}
            className={cn("h-full w-full object-cover", className)}
            alt={alt}
          />
        </div>

        {/* Back of the card */}
        <div
          className="absolute h-full w-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={backImage}
            className={cn("h-full w-full object-cover", className)}
            alt={`${alt} - back`}
          />
        </div>
      </motion.div>
    </div>
  );
};

