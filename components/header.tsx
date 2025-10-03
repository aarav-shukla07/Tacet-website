import Link from 'next/link';
import { jetbrainsMono, poppins } from '@/lib/fonts';
import { Poppins } from 'next/font/google';
import { Weight } from 'lucide-react';

// A simple SVG icon component for the logo
const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" fill="currentColor"/>
    <circle cx="16" cy="8" r="2" fill="currentColor"/>
    <circle cx="8" cy="16" r="2" fill="currentColor"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
  </svg>
);

const PillNavbar = () => {
  return (
    <nav className={` fixed top-10 left-1/2 -translate-x-1/2 z-50`}>
      <div className="flex items-center gap-x-2 px-1 py-1 rounded-2xl bg-neutral-800/50 backdrop-blur-xl ring-1 ring-white/10">
        
        {/* Logo */}
        <Link href="/" className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
          <LogoIcon />
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-x-2 text-sm text-neutral-300">
          <Link href="/home" className="hover:text-white transition-colors px-3 py-2">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors px-3 py-2">About</Link>
          <Link href="/discover" className="hover:text-white transition-colors px-3 py-2">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-2 text-sm ml-4">
        {/* LOGIN BUTTON */}
        <Link
            href="/login"
            className="relative overflow-hidden text-neutral-300 hover:text-white transition-colors px-5 py-2 rounded-xl ring-1 ring-neutral-700 hover:bg-neutral-700/50 font-semibold group"
        >
            <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
            Log In
            </span>
            <span className="block absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
            Log In
            </span>
        </Link>

        {/* SIGNUP BUTTON */}
        <Link
  href="/signup"
  className="relative overflow-hidden bg-white text-black font-medium px-5 py-2 rounded-xl hover:bg-neutral-200 transition-all duration-300 font-semibold group [--glow-shadow:0_0_20px_rgba(255,255,255,0.5)] hover:[--glow-shadow:0_0_40px_rgba(255,255,255,0.9)] shadow-[var(--glow-shadow)]"
>
  <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
    Sign Up
  </span>
  <span className="block absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
    Sign Up
  </span>
</Link>
        </div>


      </div>
    </nav>
  );
};

export default PillNavbar;