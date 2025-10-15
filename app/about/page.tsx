"use client";

import PillNavbar from "@/components/header";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BrainCircuit, Eye, Zap, GraduationCap } from "lucide-react";
import "@/app/globals.css";
import { jetbrainsMono } from "@/lib/fonts";
import Image from "next/image";

export default function About() {
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
            Why We Built TACET
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Born from the frustration of a single, unsolvable problem. Built
            for the moments you just need a little help.
          </motion.p>
        </section>

        {/* ORIGIN STORY SECTION */}
        <section className="max-w-4xl mx-auto mb-24 text-center">
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
                 className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10"
            >
                <h2 className="text-3xl font-bold text-white mb-4">It Started With a Single Problem.</h2>
                <p className="text-neutral-300 text-lg">
                I was staring at the screen, completely stuck. It wasn't about not knowing the concepts; it was one of those notoriously difficult problems, the kind designed to break you. All I needed was a small hint, a nudge in the right direction, without having to switch tabs and break my flow—and certainly without raising any red flags in a proctored environment. That moment of frustration was the spark for TACET.
                </p>
            </motion.div>
        </section>

        {/* WHY TACET? (FEATURES) SECTION */}
        <section className="max-w-7xl mx-auto mb-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Card 1: Screen Explainer */}
            <CardContainer containerClassName="py-0">
              <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem translateZ="50" className="text-xl font-bold text-white flex items-center gap-2">
                    Understand Your Screen, Instantly
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                  One click is all it takes. TACET analyzes your entire screen—be it a complex problem, a quiz, or a diagram—and gives you a concise, actionable summary.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image src="/images/img23.jpeg" height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Screen Analysis HUD" />
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Card 2: Discreet Interview Ace */}
            <div className="lg:mt-20">
                <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                    <CardItem translateZ="50" className="text-xl font-bold text-white flex items-center gap-2">
                        Your Silent Interview Partner
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                    Tackle LeetCode or HackerRank challenges during live interviews with confidence. TACET operates as an invisible overlay, completely undetectable on screen shares.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <Image src="/images/img36.jpeg" height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Digital Eye Scan" />
                    </CardItem>
                </CardBody>
                </CardContainer>
            </div>

            {/* Card 3: The Quiz Master */}
            <CardContainer containerClassName="py-0">
              <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem translateZ="50" className="text-xl font-bold text-white flex items-center gap-2">
                    Ace Your Online Assessments
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                  Navigating an online quiz? TACET can discreetly provide answers and explanations, helping you secure the score you deserve without ever leaving the test window.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image src="/images/img2.jpeg" height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Formulas on a screen" />
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Card 4: The Ultimate Learning Tool */}
            <div className="lg:mt-20">
                <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                    <CardItem translateZ="50" className="text-xl font-bold text-white flex items-center gap-2">
                        More Than Just Answers
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                     TACET isn't just about getting the solution; it's about understanding it. We provide hints designed to turn a moment of being stuck into a real learning opportunity.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <Image src="/images/img5.jpeg" height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Galaxy with formulas" />
                    </CardItem>
                </CardBody>
                </CardContainer>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
