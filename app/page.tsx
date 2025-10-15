"use client";

import PillNavbar from "@/components/header";
import AnimatedImageGroups from "@/components/AnimatedImageGroups";
import "./globals.css";
import { LayoutTextFlip } from "@/components/LayoutTextFlip";
import ScrollIndicator from "@/components/ScrollIndicator";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import TransitionLink from "@/components/TransitionLink"; 

const roles = [
  "technical interviews",
  "live coding challenges",
  "on-screen assessments",
  "pair programming",
];

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 opacity-40">
        <AnimatedImageGroups />
      </div>
      <PillNavbar />

      {/* The MaskContainer wraps the entire screen to capture mouse events correctly */}
      <MaskContainer
        revealText={
          <div className="flex flex-col items-center justify-center h-full text-white pointer-events-none">
            <TransitionLink href="/about" className="pointer-events-auto">
                <h1 className="text-8xl md:text-9xl font-bold tracking-tighter cursor-pointer">
                  TACET
                </h1>
            </TransitionLink>
            <div className="mt-4">
              <LayoutTextFlip
                text="Your silent advantage in"
                words={roles}
                duration={2200}
                containerClassName="mt-12"
                wordClassName="text-white"
              />
            </div>
          </div>
        }
        className="h-screen"
      >
        {/* This is the content that gets REVEALED through the mask */}
        <div className="flex flex-col items-center justify-center h-full text-white pointer-events-none">
          <TransitionLink href="/about" className="pointer-events-auto">
              <h1 className="text-8xl md:text-9xl font-bold tracking-tighter cursor-pointer text-black">
                Click to enter!!
              </h1>
          </TransitionLink>
          <div className="mt-4">
            <LayoutTextFlip
              text="Your silent advantage in"
              words={roles}
              duration={2200}
              containerClassName="mt-12"
              wordClassName="text-white"
            />
          </div>
        </div>
      </MaskContainer>

      <ScrollIndicator />
    </div>
  );
}

