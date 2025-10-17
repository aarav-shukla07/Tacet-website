"use client";
import React from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

export interface CommandProps {
  command: string;
  comment: string;
}

const Command = ({ command, comment }: CommandProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    // This is a simplified copy function for browser environments
    if (typeof document !== 'undefined') {
        const tempInput = document.createElement('input');
        tempInput.value = command;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(tempInput);
    }
  };

  return (
    <div className="flex justify-between items-center mb-2 p-2 rounded-md hover:bg-neutral-800/50 transition-colors">
      <p className="font-mono text-sm break-all">
        <span className="text-sky-400">$</span>{" "}
        <span className="text-neutral-300">{command}</span>
        <span className="text-neutral-500"> # {comment}</span>
      </p>
      <button onClick={copyToClipboard} className="text-neutral-500 hover:text-white transition-colors ml-4 flex-shrink-0">
        {copied ? "Copied!" : <Copy size={16} />}
      </button>
    </div>
  );
};


export const Terminal = ({ commands }: { commands: CommandProps[] }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl w-full max-w-4xl mx-auto"
    >
      <div className="bg-neutral-800/50 px-4 py-2 flex items-center gap-2 rounded-t-lg">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="p-4 md:p-6">
        {commands.map((item, index) => (
          <Command key={index} command={item.command} comment={item.comment} />
        ))}
      </div>
    </motion.div>
  );
};
