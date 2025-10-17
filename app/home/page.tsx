"use client";

import PillNavbar from "@/components/header";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import "@/app/globals.css";
import { jetbrainsMono, poppins } from "@/lib/fonts";
import { LayoutTextFlip } from "@/components/LayoutTextFlip";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Timeline } from "@/components/ui/Timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/ui/VideoPlayer"; 
import { auth } from "@/lib/firebase";  // 🔹 import Firebase auth
import { useRouter } from "next/navigation";

const roles = ["Know-how", "Working"];

const steps = [
  {
    number: "01",
    title: "Download & Install",
    description:
      "Grab the latest version of TACET for your operating system. A quick and easy installation process will have you ready in seconds.",
  },
  {
    number: "02",
    title: "Run in the Background",
    description:
      "Launch TACET before your meeting or coding session. It runs silently in the background, consuming minimal resources until you need it.",
  },
  {
    number: "03",
    title: "Activate When Needed",
    description:
      "Use a simple, customizable hotkey to bring up TACET's assistance overlay. Get the information you need and dismiss it instantly to maintain your flow.",
  },
];

export default function Home() {
  const router = useRouter();

  // 🔹 Handle download button click
  const handleDownloadClick = () => {
    if (auth.currentUser) {
      router.push("/download"); // user is logged in
    } else {
      router.push("/login"); // user is NOT logged in
    }
  };

  // 🔹 FAQ Data
  const faqItems = [
    {
      question: "What is TACET and why should I use it?",
      answer: (
        <>
          <p className="text-neutral-400 mb-4 max-w-[640px] text-center mx-auto">
            TACET is your personal, discreet AI assistant designed to help you during high-pressure situations like technical interviews, online assessments, and complex problem-solving. It acts as a silent co-pilot, providing instant hints, code suggestions, and summaries of on-screen content with a single click or hotkey. Use it to overcome mental blocks, boost your confidence, and turn a moment of being stuck into a valuable learning opportunity, all without disrupting your flow.
          </p>
          
        </>
      ),
    },
    {
      question: "How does TACET remain undetected on screen shares (Zoom, Google Meet, etc.)?",
      answer: (
        <>
          <p className="text-neutral-400 mb-4 max-w-[600px] text-center mx-auto">
            TACET is engineered for absolute discretion. It operates as a lightweight, overlay on your screen, which is not a separate window or application that screen-sharing software can capture. To applications like Zoom or Google Meet, the overlay is invisible; they only capture the content underneath it. This ensures your use of TACET remains completely private and undetected.
          </p>
          
        </>
      ),
    },
    {
      question: "Is using TACET considered cheating?",
      answer: (
        <p className="text-neutral-400 mb-4 max-w-[580px] text-center mx-auto">
          We disagree with the idea that this is cheating. The interview format already rewards rote puzzle recall, and our tool helps experienced engineers show real problem-solving instead of memorized tricks.
        </p>
      ),
    },
    {
      question: "What kind of help can I get from TACET?",
      answer: (
        <p className="text-neutral-400 mb-4 max-w-[580px] text-center mx-auto">
          TACET is versatile. Its core features include:<br></br> <br/>
          -- One-Click Screen Summary: Instantly understand any content on your screen, from a complex LeetCode problem to a technical diagram.
<br /><br />
          -- Discreet Code Hints: Get suggestions for algorithms, data structures, and code snippets directly related to the problem you're facing.
<br /><br/>
          -- Online Quiz Assistance: If you're stuck on a question during an online assessment, TACET can help clarify the query or suggest a path to the solution.
        </p>
      ),
    },
    {
      question: "Do I need an internet connection to use TACET?",
      answer: (
        <p className="text-neutral-400 mb-4 max-w-[580px] text-center mx-auto">
          No. TACET is designed to be a privacy-first, offline-capable tool. It leverages the power of Ollama and Llama 3.1 running directly on your machine. This means your on-screen data is never sent to the cloud, and you can rely on TACET even with an unstable or non-existent internet connection.
        </p>
      ),
    },
    {
      question: "Is my data and on-screen activity kept private?",
      answer: (
        <p className="text-neutral-400 mb-4 max-w-[580px] text-center mx-auto">
          Absolutely. Because TACET and its AI model run 100% locally on your computer, no on-screen data ever leaves your machine. Your activity, the problems you're solving, and the hints you receive are completely private. We do not collect or store any user activity data.
        </p>
      ),
    },
    {
      question: "Who is TACET for?",
      answer: (
        <p className="text-neutral-400 mb-4 max-w-[580px] text-center mx-auto">
          TACET is for anyone who wants to enhance their problem-solving skills and build confidence. It's perfect for:
<br/><br/>
          -- Students preparing for technical interviews.
<br/><br/>
          -- Developers facing live coding challenges.
<br/><br/>
          -- Professionals taking online certification exams or quizzes.
<br/><br/>
          -- Anyone who believes in learning by doing and just needs an occasional hint to keep moving forward.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <PillNavbar />

      <main className="pt-32 pb-20 px-4 md:px-8">
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${jetbrainsMono.className} text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400`}
          >
            Solve Every <span className="text-blue-400">Interview</span> Question
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-4"
          >
            Get solutions without getting in eyes of others!!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleDownloadClick}
              className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]"
            >
              <Download size={20} />
              Download the App
            </button>
          </motion.div>
        </section>

        {/* KNOW HOW SECTION */}
        <section className="text-center max-w-6xl mx-auto">
          <motion.h1>
            <div className="mt-4">
              <LayoutTextFlip
                words={roles}
                duration={2200}
                containerClassName="mt-12"
                wordClassName={`${poppins.className} text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400`}
              />
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl text-white max-w-5xl mx-auto mb-2 font-semibold mt-2"
          >
            Watch TACET performing on real scenarios, not just promise.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto mb-4"
          >
            Witness how TACET operates seamlessly during live technical
            assessments and coding interviews, providing the edge you
            need—completely undetected.
          </motion.p>

          {/* VIDEOS SECTION */}
          <section className="max-w-7xl mx-auto mt-20 mb-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <VideoPlayer title="Live Leetcode Demo" src="/videos/leetcode.mp4" />
              <VideoPlayer title="Online Gmeet Sharing Demo" src="videos/gmeet.mp4" />
            </div>
          </section>
        </section>

        {/* APP PREVIEW CONTAINER SCROLL SECTION */}
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <h1 className="text-4xl font-semibold text-white">
                See TACET in Action. <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                  Undetected & Seamless.
                </span>
              </h1>
            }
          >
            <Image
              src={`/home/img3.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* HOW IT HELPS YOU SECTION */}
        <section className="max-w-7xl mx-auto mb-12 px-4">
          <div className="flex justify-center mb-16">
            <div className="relative inline-block">
              <img
                src="/hand-drawn-circle.svg"
                alt="Hand-drawn circle"
                className="absolute top-1/2 left-1/4 w-[125%] h-[200%] -translate-x-1/2 -translate-y-1/2"
              />
              <h2 className="relative text-4xl font-bold text-center text-white">
                How TACET Helps You Succeed
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <CardContainer containerClassName="py-0">
              <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-sky-500/[0.1] dark:bg-neutral-900/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem translateZ="50" className="text-xl font-bold text-white">
                  Real-Time, Discreet Assistance
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                  Operates as a subtle overlay, invisible to others on screen shares. Get the hints you need without anyone knowing.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src="/images/img28.jpeg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Discreet Assistance" />
                </CardItem>
              </CardBody>
            </CardContainer>
            
            <div className="lg:mt-24">
                <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-sky-500/[0.1] dark:bg-neutral-900/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-white/10">
                    <CardItem translateZ="50" className="text-xl font-bold text-white">
                    Instant Code & Algorithm Help
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                    Stuck on a problem? TACET provides smart code completions and concise explanations for algorithms.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <img src="/images/img26.jpeg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Code Help" />
                    </CardItem>
                </CardBody>
                </CardContainer>
            </div>

            <CardContainer containerClassName="py-0">
              <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-sky-500/[0.1] dark:bg-neutral-900/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-white/10">
                <CardItem translateZ="50" className="text-xl font-bold text-white">
                  Boost Your Confidence
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                  Face interviews with the confidence that you have an intelligent safety net to back you up.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src="/images/img17.jpeg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Confidence Boost" />
                </CardItem>
              </CardBody>
            </CardContainer>

            <div className="lg:mt-24">
                <CardContainer containerClassName="py-0">
                <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-sky-500/[0.1] dark:bg-neutral-900/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-white/10">
                    <CardItem translateZ="50" className="text-xl font-bold text-white">
                    Platform Agnostic
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                    Works seamlessly over any screen-sharing application like Zoom, Google Meet, or Microsoft Teams.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <img src="/images/img36.jpeg" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Platform Agnostic" />
                    </CardItem>
                </CardBody>
                </CardContainer>
            </div>
          </div>
        </section>

        {/* HOW TO USE IT SECTION */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex justify-center mb-16">
            <div className="relative">
              <img
                src="/hand-drawn-circle.svg"
                alt="Hand-drawn circle"
                className="absolute top-1/2 left-1/2 w-[150%] h-[250%] -translate-x-1/2 -translate-y-1/2"
              />
              <h2 className="relative text-4xl font-bold text-center text-white">
                Get Started in 3 Simple Steps
              </h2>
            </div>
          </div>
          <Timeline items={steps} />
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-7xl mx-auto my-24 px-4">
          <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="w-full max-w-[800px] mx-auto">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="mb-4 bg-neutral-900/50 rounded-xl p-4 cursor-pointer group"
              >
                <summary className="text-lg font-semibold text-white list-none group-open:text-blue-400">
                  {item.question}
                </summary>
                <div className="mt-2">{item.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}