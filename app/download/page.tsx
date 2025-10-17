"use client";

import PillNavbar from "@/components/header";
import TransitionLink from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { Download, Cpu, MemoryStick, HardDrive } from "lucide-react";
import "@/app/globals.css";
import { jetbrainsMono, poppins } from "@/lib/fonts";
import Footer from "@/components/Footer";
import { Terminal, CommandProps } from "@/components/ui/Terminal"; // Ensure CommandProps is exported from Terminal.tsx
import { ExpandableCards, Card } from "@/components/ui/expandable-card";
import { JetBrains_Mono } from "next/font/google";

// Define the commands for the terminal, matching the CommandProps interface
const terminalCommands: CommandProps[] = [
  {
    command: "curl -fsSL https://ollama.com/install.sh | sh",
    comment: "Download and install Ollama",
  },
  {
    command: "ollama run llama3.1",
    comment: "Pull the Llama 3.1 model (approx. 5.5GB)",
  },
];


const systemRequirements: Card[] = [
  {
    description: "Modern multi-core processor recommended.",
    title: "Processor",
    src: "/home/img4.jpeg",
    content: () => (
      <p>
        TACET relies on local processing for its core features. While it can run
        on most modern CPUs, a processor with at least 4 cores (such as an Intel
        i5, AMD Ryzen 5, or Apple M1) is recommended to ensure smooth, real-time
        performance without impacting your system's other applications.
      </p>
    ),
  },
  {
    description: "More RAM allows for handling larger contexts.",
    title: "Memory (RAM)",
    src: "/home/img7.jpeg",
    content: () => (
      <p>
        A minimum of 8GB of RAM is required. For developers working with large
        codebases or complex problem sets, 16GB of RAM is highly recommended to
        provide a seamless experience and allow TACET to analyze larger amounts of
        information quickly.
      </p>
    ),
  },
  {
    description: "An SSD is highly recommended for faster loading.",
    title: "Storage",
    src: "/home/img6.jpeg",
    content: () => (
      <p>
        You will need at least 5GB of free disk space for the initial
        installation and the base models. Using a Solid State Drive (SSD) is
        strongly advised, as it will significantly decrease the initial load
        time of the application and its AI models.
      </p>
    ),
  },
];


export default function DownloadPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PillNavbar />

      <main className="pt-32 pb-20 px-4 md:px-8">
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${jetbrainsMono.className} text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400`}
          >
            Get Started with TACET
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Follow the steps below to set up your environment and gain your
            discreet advantage.
          </motion.p>
        </section>

        {/* TERMINAL SECTION */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Step 1: Install Prerequisites
          </h2>
          <Terminal commands={terminalCommands} />
        </section>

        {/* REQUIREMENTS SECTION */}
        <section className="max-w-7xl mx-auto mb-24 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Step 2: System Requirements
          </h2>
          <ExpandableCards cards={systemRequirements} />
        </section>

        {/* DOWNLOAD CTA SECTION */}
<section className="text-center max-w-4xl mx-auto mt-12">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-6 text-white"
  >
    Step 3: Download TACET
  </motion.h2>

  <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
    <TransitionLink
      href="https://github.com/aarav-shukla07/Tacet/releases/download/v0.1.0/tacet.Setup.0.1.0.exe" // <-- Windows download link
      className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]"
    >
      <Download size={20} />
      Download for Windows
    </TransitionLink>

    
  </div>

  <p className={`${poppins.className} text-neutral-400 text-sm md:text-base mt-10`}>
    If you have any suggestions or want to talk, please{" "}
    <TransitionLink href="/contact" className={`${jetbrainsMono.className} text-white underline `}>
      contact me
    </TransitionLink>
    .
  </p>
</section>

      </main>
      <Footer />
    </div>
  );
}

