"use client";

import PillNavbar from "@/components/header";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Mail, Send } from "lucide-react";
import "@/app/globals.css";
import { jetbrainsMono } from "@/lib/fonts";
import Footer from "@/components/Footer";

// Simple Twitter/X Icon SVG to be used in the card
const TwitterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white h-6 w-6"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );


export default function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Have a question, a proposal, or just want to say hello? I'd love
            to hear from you.
          </motion.p>

          {/* LOCAL IMAGE BELOW PARAGRAPH */}
            <motion.img
                src="/images/contact-img.jpeg"
                alt="Contact illustration"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mt-8 w-full max-w-md rounded-lg shadow-lg"
            />
        </section>

        {/* CONTACT CARDS SECTION */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <CardContainer className="inter-var">
              <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white flex items-center gap-3"
                >
                  <Mail size={24} />
                  Email
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-sm mt-2"
                >
                  The best way to reach me for any inquiries.
                </CardItem>
                <CardItem translateZ="80" className="w-full mt-4">
                  <p className="text-lg font-mono p-4 bg-neutral-950 rounded-lg border border-neutral-800">
                    aarav10shukla@gmail.com
                  </p>
                </CardItem>
                <div className="flex justify-end items-center mt-8">
                <CardItem
                    translateZ={20}
                    as="a"
                    href="https://mail.google.com/mail/?view=cm&to=aarav10shukla@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                    Send an Email
                </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* Twitter Card */}
            <CardContainer className="inter-var">
              <CardBody className="bg-neutral-900/50 relative group/card w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white flex items-center gap-3"
                >
                  <TwitterIcon />
                  Twitter / X
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-sm mt-2"
                >
                  For quick messages and DMs.
                </CardItem>
                <CardItem translateZ="80" className="w-full mt-4">
                     <p className="text-lg font-mono p-4 bg-neutral-950 rounded-lg border border-neutral-800">
                    @aaravshukla_10
                  </p>
                </CardItem>
                <div className="flex justify-end items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://x.com/aaravshukla_10"
                    target="__blank"
                    className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold flex items-center gap-2"
                  >
                   <Send size={14}/> Message Me
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>
        {/* THANK YOU MESSAGE */}
        <section className="text-center max-w-4xl mx-auto py-12 px-4">
        <p className={`${jetbrainsMono.className} text-neutral-400 text-lg md:text-xl`}>
            I am glad you visited my website. Hope I improve it better with time and give you best features. Thank you.
        </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}