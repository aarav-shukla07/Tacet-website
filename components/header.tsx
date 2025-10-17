"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import TransitionLink from "./TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// ---------------- Logo Icon ----------------
const LogoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="2" fill="currentColor" />
    <circle cx="16" cy="8" r="2" fill="currentColor" />
    <circle cx="8" cy="16" r="2" fill="currentColor" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
  </svg>
);

// ---------------- Animated Link ----------------
const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <TransitionLink
    href={href}
    className="relative overflow-hidden text-neutral-300 hover:text-white transition-colors px-3 py-2 group text-sm"
  >
    <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
      {children}
    </span>
    <span className="block absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
      {children}
    </span>
  </TransitionLink>
);

// ---------------- Main Navbar ----------------
const PillNavbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Track Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
      router.push("/"); // Redirect to home page
    } catch (err) {
      console.error("Logout error:", err);
      alert("Error logging out. Please try again.");
    }
  };

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-x-2 px-1 py-1 rounded-2xl bg-neutral-800/50 backdrop-blur-xl ring-1 ring-white/10">
        <div className="absolute inset-0 bg-noise rounded-3xl"></div>

        {/* Logo */}
        <TransitionLink
          href="/"
          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <LogoIcon />
        </TransitionLink>

        {/* Navigation */}
        <div className="flex items-center gap-x-2">
          <AnimatedLink href="/home">Home</AnimatedLink>
          <AnimatedLink href="/about">About</AnimatedLink>
          <AnimatedLink href="/contact">Contact</AnimatedLink>
        </div>

        {/* Right Side - Auth Section */}
        <div className="flex items-center gap-x-2 text-sm ml-4 relative">
          {!user ? (
            <>
              {/* LOGIN BUTTON */}
              <TransitionLink
                href="/login"
                className="relative overflow-hidden text-neutral-300 hover:text-white transition-colors px-5 py-2 rounded-xl ring-1 ring-neutral-700 hover:bg-neutral-700/50 font-semibold group"
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
                  Log In
                </span>
                <span className="block absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                  Log In
                </span>
              </TransitionLink>

              {/* SIGNUP BUTTON */}
              <TransitionLink
                href="/signup"
                className="relative overflow-hidden bg-white text-black font-medium px-5 py-2 rounded-xl hover:bg-neutral-200 transition-all duration-300 font-semibold group [--glow-shadow:0_0_20px_rgba(255,255,255,0.5)] hover:[--glow-shadow:0_0_40px_rgba(255,255,255,0.9)] shadow-[var(--glow-shadow)]"
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
                  Sign Up
                </span>
                <span className="block absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                  Sign Up
                </span>
              </TransitionLink>
            </>
          ) : (
            <div className="relative">
              {/* PROFILE AVATAR */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer overflow-hidden"
              >
                <img
                  src="/images/avatar.jpg" // <-- fixed avatar image in /public folder
                  alt="user avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.button>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-xl bg-neutral-800/90 backdrop-blur-xl ring-1 ring-white/10 shadow-lg text-white"
                  >
                    <div className="flex flex-col text-sm">
                      <button
                        className="px-4 py-2 text-left hover:bg-white/10"
                        onClick={() => alert("Profile Page Coming Soon")}
                      >
                        Profile
                      </button>
                      <button
                        className="px-4 py-2 text-left hover:bg-white/10"
                        onClick={() => alert("Settings Coming Soon")}
                      >
                        Settings
                      </button>
                      <hr className="border-neutral-700" />
                      <button
                        className="px-4 py-2 text-left hover:bg-red-500/70 text-red-300 hover:text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PillNavbar;
