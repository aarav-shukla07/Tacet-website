"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlayer = ({ src, title }: { src: string; title: string }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-neutral-900/50 p-4 rounded-2xl border border-white/10 relative"
    >
      <h3 className="text-xl font-bold text-white mb-4 px-2">{title}</h3>
      <div className="aspect-video w-full overflow-hidden rounded-xl relative">
        <video
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
