"use client";

import { motion } from "framer-motion";

const ScrollIndicator = () => {
  // This function will scroll the user down by one viewport height
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScroll}
      // --- CHANGE 1: Updated styling for shape and size ---
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-2xl border border-neutral-700 bg-neutral-800/70 backdrop-blur-sm group"
    >

      {/* The bouncing arrow, which will now be centered in the new square shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-neutral-400 transition-all duration-300 group-hover:stroke-white"
        >
          <motion.path
            d="M12 4V20M12 20L18 14M12 20L6 14"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            // Bouncing animation
            animate={{ y: [-2, 2, -2] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.svg>
      </div>
    </button>
  );
};

export default ScrollIndicator;

