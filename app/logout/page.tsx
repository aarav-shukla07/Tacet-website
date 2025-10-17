// /app/logout/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";

export default function LogoutPage() {
  const router = useRouter();
  const [message, setMessage] = useState("Logging out...");

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await signOut(auth);
        setMessage("You have logged out successfully!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } catch (err) {
        console.error("Logout error:", err);
        setMessage("Error logging out. Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    };

    logoutUser();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 max-w-md w-full text-center"
      >
        <h1 className="text-2xl font-bold mb-4">{message}</h1>
        <p className="text-neutral-400">
          You will be redirected to the home page shortly.
        </p>
      </motion.div>
    </div>
  );
}
