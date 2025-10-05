"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500); // Delay before bubble animation
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust for speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F5DC]">
      <motion.div
        className="absolute bg-black rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: isComplete ? 100 : 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onAnimationComplete={onLoadingComplete}
      />
      {!isComplete && (
        <>
          <h1 className="text-6xl font-bold text-gray-500">TACET</h1>
          <div className="absolute bottom-10 text-gray-500 text-2xl font-mono">
            {progress}%
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;