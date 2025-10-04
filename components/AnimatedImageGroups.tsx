"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Configuration ---
const NUM_GROUPS = 7;
const IMAGES_PER_GROUP = 5;
const TOTAL_IMAGES = NUM_GROUPS * IMAGES_PER_GROUP;

const allImagePaths = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/images/img${i + 1}.jpeg`);

const imageChunks = Array.from({ length: NUM_GROUPS }, (_, i) =>
  allImagePaths.slice(i * IMAGES_PER_GROUP, (i + 1) * IMAGES_PER_GROUP)
);

const AnimatedImageGroups = () => {
  // The state is now the array of decks, which is the correct way to manage this
  const [imageGroups, setImageGroups] = useState(imageChunks);

  useEffect(() => {
    // --- THIS CREATES THE OVERLAPPING, CONTINUOUS LOOP ---
    // A new image STARTS to fall every 1.8 seconds...
    const interval = setInterval(() => {
      setImageGroups((prevGroups) =>
        prevGroups.map((group) => {
          const [first, ...rest] = group;
          return [...rest, first]; // Cycle the top image to the back of the array
        })
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // --- MOUSE TRACKING (UNCHANGED) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-1000, 1000], [-15, 15]);
  const springY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-1000, 1000], [15, -15]);
  const springX = useSpring(rotateX, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - width / 2);
    mouseY.set(clientY - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", rotateX: springX, rotateY: springY }}
      >
        {imageGroups.map((group, groupIndex) => {
          const angle = (groupIndex / NUM_GROUPS) * 360;
          const radius = 350;
          const baseX = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
          const baseY = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
          const tangentAngle = angle + 90;

          return (
            <div key={groupIndex} className="absolute w-full h-full" style={{ left: 0, top: 0, transformStyle: "preserve-3d" }}>
              {/* AnimatePresence is the key to fixing the animation */}
              <AnimatePresence>
                {group.map((src, imageIndex) => {
                  // Only render the top few images for performance and effect
                  if (imageIndex > 3) return null;

                  const yOffset = imageIndex * 50;
                  const z = -imageIndex * 20;
                  const opacity = 0.9 - imageIndex * 0.2;

                  return (
                    <motion.div
                      key={`${groupIndex}-${src}`} // Key is now tied to the image source
                      className="absolute w-[100px] h-[130px] rounded-lg overflow-hidden"
                      style={{ left: '50%', top: '50%', transformOrigin: 'center' }}
                      initial={{ opacity: 0, y: baseY + 50 }} // Emerge from the deck
                      animate={{
                        x: baseX,
                        y: baseY + yOffset,
                        z: z,
                        rotateX: 10,
                        rotateZ: tangentAngle,
                        opacity: opacity,
                        scale: 1,
                      }}
                      // --- THIS IS THE "FALLING" ANIMATION ---
                      // ...but it plays for its FULL duration of 3 seconds, uninterrupted.
                      exit={{
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 1.7, ease: "easeIn" }
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${src}`}
                        fill
                        sizes="100px"
                        style={{ objectFit: "cover" }}
                        className="pointer-events-none"
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedImageGroups;