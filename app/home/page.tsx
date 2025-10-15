"use client";

import PillNavbar from "../../components/header";
import TransitionLink from "../../components/TransitionLink";
import { motion } from "framer-motion";
import { CheckCircle, Code, Download, Link, Zap } from "lucide-react";
import "../globals.css";
import { jetbrainsMono,poppins } from "@/lib/fonts";
import { LayoutTextFlip } from "@/components/LayoutTextFlip";

const roles = [
  "Know-how",
  "Working",
];

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-neutral-900/50 p-6 rounded-2xl border border-white/10 flex flex-col items-start gap-4"
  >
    <div className="bg-white/10 p-3 rounded-full text-sky-400">{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </motion.div>
);

// Step Component for "How to Use" section
const Step = ({
  number,
  title,
  description,
}: {
  number: string;
  title:string;
  description: string;
}) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-start gap-6"
    >
        <div className="flex items-center justify-center text-4xl font-bold text-sky-400 w-16 h-16 border-2 border-sky-400/30 rounded-full flex-shrink-0">
            {number}
        </div>
        <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-neutral-400">{description}</p>
        </div>
    </motion.div>
)

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PillNavbar />

      <main className="pt-32 pb-20 px-4 md:px-8">
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-15">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${jetbrainsMono.className} text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400`}
          >
            Solve Every <span className="text-blue-400">Interview</span> Question
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-4"
          >
            Get solutions without getting in eyes of others!!
          </motion.p>
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
          >
            <TransitionLink
              href="/download"
              className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]"
            >
              <Download size={20} />
              Download the App
            </TransitionLink>
          </motion.div>
        </section>

        {/* KNOW HOW SECTION */}
        <section className="text-center max-w-6xl mx-auto mb-24">
            <motion.h1>
                <div className="mt-4">
                              <LayoutTextFlip
                                words={roles}
                                duration={2200}
                                containerClassName="mt-12"
                                wordClassName={`${poppins.className} text-5xl md:text-6sxl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400`}
                              />
                            </div>
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl text-white max-w-5xl mx-auto mb-2 font-semibold mt-2"
          >
            Watch TACET performing on real scenarios, not just promise.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto mb-4"
          >
            Witness how TACET operates seamlessly during live technical assessments and coding interviews, providing the edge you need—completely undetected.
          </motion.p>
        </section>
        

        {/* HOW IT HELPS YOU SECTION */}
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            How TACET Helps You Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap size={24} />}
              title="Real-Time, Discreet Assistance"
              description="Operates as a subtle overlay, invisible to others on screen shares. Get the hints you need without anyone knowing."
            />
            <FeatureCard
              icon={<Code size={24} />}
              title="Instant Code & Algorithm Help"
              description="Stuck on a problem? TACET provides smart code completions and concise explanations for common data structures and algorithms."
            />
            <FeatureCard
              icon={<CheckCircle size={24} />}
              title="Boost Your Confidence"
              description="Face interviews and coding challenges with the confidence that you have an intelligent safety net to back you up."
            />
          </div>
        </section>

        {/* HOW TO USE IT SECTION */}
        <section className="max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Get Started in 3 Simple Steps</h2>
            <div className="flex flex-col gap-12">
                <Step 
                    number="01"
                    title="Download & Install"
                    description="Grab the latest version of TACET for your operating system. A quick and easy installation process will have you ready in seconds."
                />
                 <Step 
                    number="02"
                    title="Run in the Background"
                    description="Launch TACET before your meeting or coding session. It runs silently in the background, consuming minimal resources until you need it."
                />
                 <Step 
                    number="03"
                    title="Activate When Needed"
                    description="Use a simple, customizable hotkey to bring up TACET's assistance overlay. Get the information you need and dismiss it instantly to maintain your flow."
                />
            </div>
        </section>
      </main>
    </div>
  );
}

