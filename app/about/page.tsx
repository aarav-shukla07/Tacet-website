"use client";

import PillNavbar from "@/components/header";
import { motion } from "framer-motion";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import { BrainCircuit, Eye, Zap, GraduationCap } from "lucide-react";
import "@/app/globals.css";
import { jetbrainsMono } from "@/lib/fonts";
import Image from "next/image";
import { FlippableImage } from "@/components/Flipable-image";

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
            Why I Built TACET
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
        <section className="max-w-6xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className={`${jetbrainsMono.className} text-4xl font-bold text-white mb-4`}>
              It Started With a Single Problem.
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              I was staring at the screen, completely stuck. It wasn&apos;t about
              not knowing the concepts; it was one of those notoriously
              difficult problems, the kind designed to break you. All I needed
              was a small hint, a nudge in the right direction, without having
              to switch tabs and break my flow—and certainly without raising
              any red flags in a proctored environment. That moment of
              frustration was the spark for TACET.
            </p>
          </motion.div>

          {/* Right Column: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: ["0%", "-5%", "0%"],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-[400px] h-[400px]" // Container for positioning and animation
            >
              <FlippableImage
                frontImage="/images/img44.jpeg"
                backImage="/images/img1.jpeg"
                alt="Creator Avatar"
                className="rounded-2xl object-cover border-4 border-neutral-800 shadow-xl" // Applied new styles here
              />
            </motion.div>
          </motion.div>
        </section>

        {/* WHY TACET? (FEATURES) SECTION */}
        <section className="max-w-7xl mx-auto mb-12 px-4">
          <div className="relative flex justify-center items-center mb-16">
            <img
              src="/hand-drawn-circle.svg"
              alt="hand drawn circle"
              className="absolute w-full max-w-2xl -top-12 opacity-30"
            />
            <h2 className="text-4xl font-bold text-center text-white relative">
              How TACET Helps You Succeed
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 items-start">
            {/* Cards content remains the same */}
            <motion.div
              initial={{ rotate: -2, y: 0 }}
              whileInView={{ rotate: -2, y: 0 }}
              className="w-full"
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                    </motion.div>
                    Understand Your Screen, Instantly
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2"
                  >
                    One click is all it takes. TACET analyzes your entire
                    screen and gives you a concise, actionable summary.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4 h-60">
                    <FlippableImage
                      frontImage="/images/img23.jpeg"
                      backImage="/images/img14.jpeg"
                      alt="Screen Analysis HUD"
                      className="rounded-xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div
              initial={{ rotate: 3, y: 0 }}
              whileInView={{ rotate: 3, y: 80 }}
              className="w-full"
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1.5,
                      }}
                    >
                    </motion.div>
                    Your Silent Interview Partner
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2"
                  >
                    Tackle coding challenges with confidence. TACET operates as an
                    invisible overlay, completely undetectable on screen shares.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4 h-60">
                    <FlippableImage
                      frontImage="/images/img28.jpeg"
                      backImage="/images/img36.jpeg"
                      alt="Digital Eye Scan"
                      className="rounded-xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

             <motion.div
              initial={{ rotate: 1, y: 0 }}
              whileInView={{ rotate: 1, y: -40 }}
              className="w-full"
            >
            <CardContainer containerClassName="py-0">
              <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white flex items-center gap-2"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 1.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.2,
                    }}
                  >
                  </motion.div>
                  Ace Your Online Assessments
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-sm mt-2"
                >
                  Navigating an online quiz? TACET can discreetly provide
                  answers and explanations, helping you secure the score you
                  deserve.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 h-60">
                  <FlippableImage
                    frontImage="/images/img2.jpeg"
                    backImage="/images/img3.jpeg"
                    alt="Formulas on a screen"
                    className="rounded-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            </motion.div>

            <motion.div
              initial={{ rotate: -3, y: 0 }}
              whileInView={{ rotate: -3, y: 50 }}
              className="w-full"
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 2.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1.8,
                      }}
                    >
                    </motion.div>
                    More Than Just Answers
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2"
                  >
                    TACET isn&apos;t just about getting the solution; it&apos;s about
                    understanding it, turning stuck moments into learning
                    opportunities.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4 h-60">
                    <FlippableImage
                      frontImage="/images/img5.jpeg"
                      backImage="/images/img8.jpeg"
                      alt="Galaxy with formulas"
                      className="rounded-xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

