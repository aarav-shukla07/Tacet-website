"use client";

import PillNavbar from '@/components/header';
import AnimatedImageGroups from '@/components/AnimatedImageGroups';
import './globals.css';
import { LayoutTextFlip } from '@/components/LayoutTextFlip';

const roles = ["technical interviews", "live coding challenges", "on-screen assessments", "pair programming"];

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <AnimatedImageGroups />
      </div>

      <PillNavbar />

      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">TACET</h1>

        <LayoutTextFlip
          text="Your silent advantage in"
          words={roles}
          duration={2200}
          containerClassName="mt-4"
          // --- THIS IS THE KEY CHANGE ---
          // The flipping text inside the box is now explicitly set to white.
          wordClassName="text-white"
        />
      </div>
    </div>
  );
}

