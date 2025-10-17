"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import TransitionLink from "./TransitionLink";
import { poppins } from "@/lib/fonts";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white border-t border-white/10 text-black py-12 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      {/* <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-full h-full bg-gradient-to-r from-neutral-900 via-sky-900/20 to-neutral-900 bg-[size:200%_100%]"
        ></motion.div>
      </div> */}

      <div className={`${poppins.className} max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10`}>
        {/* Column 1: Brand and Copyright */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-2">TACET</h3>
          <p className="text-sm">Your silent advantage in a digital world.</p>
          <p className="text-xs mt-8">
            © {new Date().getFullYear()} TACET. Made by Aarav Shukla.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-grey mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <TransitionLink href="/home" className="hover:text-sky-400 transition-colors">Home</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/about" className="hover:text-sky-400 transition-colors">About</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/download" className="hover:text-sky-400 transition-colors">Download</TransitionLink>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h4 className="font-semibold text-grey mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <motion.a href="https://github.com/aarav-shukla07" whileHover={{ scale: 1.2, rotate: 10 }} className="hover:text-blue transition-colors">
              <Github />
            </motion.a>
            <motion.a href="https://x.com/aaravshukla_10" whileHover={{ scale: 1.2, rotate: 10 }} className="hover:text-blue transition-colors">
              <Twitter />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/aarav-shukla10/" whileHover={{ scale: 1.2, rotate: 10 }} className="hover:text-blue transition-colors">
              <Linkedin />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="absolute bottom-8 right-8 z-10">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
