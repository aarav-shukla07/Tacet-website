"use client";

import React from "react";
import { motion } from "framer-motion";

type TimelineItem = {
  number: string;
  title: string;
  description: string;
};

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* The vertical line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-neutral-800" />
      <div className="relative flex flex-col gap-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
            {/* The dot on the timeline */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-black z-10">
                <div className="w-8 h-8 rounded-full bg-grey-400/20 border-2 border-grey-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-grey-400"/>
                </div>
            </div>
            
            {/* The content */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
