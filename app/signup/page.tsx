"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ add this import
import PillNavbar from "../../components/header";
import TransitionLink from "../../components/TransitionLink";
import "../globals.css";
import { jetbrainsMono } from "../../lib/fonts";
import Footer from "../../components/Footer";

// Firebase imports
import { auth, googleProvider } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// Google SVG Icon
const GoogleIcon = () => (
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
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8A10.04 10.04 0 0 0 22 12z" />
  </svg>
);

export default function SignupPage() {
  const router = useRouter(); // ✅ initialize router
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // 🔹 Handle email/password signup
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      router.push("/download"); // ✅ redirect after signup
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        alert(err.message);
      } else {
        console.error("Unknown error:", err);
        alert("An unknown error occurred");
      }
    }
  };

  // 🔹 Handle Google signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
      router.push("/download"); // ✅ redirect after Google signup
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        alert(err.message);
      } else {
        console.error("Unknown error:", err);
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <PillNavbar />
      <main className="pt-32 pb-20 px-4 md:px-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 max-w-md w-full"
        >
          <h1
            className={`${jetbrainsMono.className} text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400`}
          >
            Create Your Account
          </h1>
          <p className="text-center text-neutral-400 mb-8">
            Join TACET and gain your discreet advantage.
          </p>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-neutral-300">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-800/50 border border-white/10 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-sky-400 outline-none transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-800/50 border border-white/10 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-sky-400 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-neutral-300">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-800/50 border border-white/10 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-sky-400 outline-none transition"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-10 text-neutral-400 hover:text-white"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              Sign Up
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-neutral-700"></div>
              <span className="mx-4 text-neutral-400">OR</span>
              <div className="flex-grow border-t border-neutral-700"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-3 bg-neutral-800/50 border border-white/10 py-3 rounded-lg hover:bg-neutral-700/50 transition-colors"
            >
              <GoogleIcon />
              Sign Up with Google
            </button>

            <p className="text-center text-neutral-400 text-sm mt-6">
              Already have an account?{" "}
              <TransitionLink
                href="/login"
                className="text-sky-400 hover:underline"
              >
                Log In
              </TransitionLink>
            </p>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
