"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  // ১. মেইন কন্টেইনার
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // প্রতিটি লাইনের মাঝের গ্যাপ
        delayChildren: 0.5,
      },
    },
  };

  // ২. বাম থেকে আসার অ্যানিমেশন (Left to Center)
  const leftItem: Variants = {
    hidden: { opacity: 0, x: -150 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // ৩. ডান থেকে আসার অ্যানিমেশন (Right to Center)
  const rightItem: Variants = {
    hidden: { opacity: 0, x: 150 }, // পজিটিভ ১৫০ মানে ডান দিক
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="container mx-auto px-4 pt-20 pb-10 flex items-center justify-center overflow-x-hidden"
      id="hero"
    >
      <motion.div
        className="text-center space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* লাইন ১: বাম থেকে */}
        <motion.p
          variants={leftItem}
          className="text-xl md:text-2xl text-gray-200"
        >
          Hey There, This is Sohel Rana
        </motion.p>

        {/* লাইন ২: ডান থেকে */}
        <motion.h1
          variants={rightItem}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Full Stack Web Developer | TypeScript Enthusiast
        </motion.h1>

        {/* লাইন ৩: বাম থেকে */}
        <motion.p
          variants={leftItem}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          My goal is to write maintainable, clean and understandable code to{" "}
          <br className="hidden md:block" />
          process development was enjoyable.
        </motion.p>

        {/* লাইন ৪: ডান থেকে (বাটন গ্রুপ) */}
        <motion.div
          variants={rightItem}
          className="flex items-center justify-center gap-3 pt-4"
        >
          <Button variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1byI-Th_rTwXzwnDN6iv52YeVNfuAvV-j/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>

          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/sohelranaweb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>

          <Button variant="outline" size="icon" asChild>
            <a
              href="https://linkedin.com/in/sohelrana55"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
