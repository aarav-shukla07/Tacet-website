"use client";

import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionContext } from '@/context/TransitionContext';

const PageTransition = () => {
  const { isTransitioning } = useContext(TransitionContext);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div className="fixed top-0 left-0 w-full h-screen origin-center z-[100] pointer-events-none">
           <motion.div
            className="w-full h-full bg-black"
            style={{
                clipPath: 'circle(0% at 50% 50%)',
            }}
            animate={{
                clipPath: 'circle(150% at 50% 50%)',
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
           />
        </div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
