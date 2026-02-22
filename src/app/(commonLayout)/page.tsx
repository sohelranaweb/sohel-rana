import AnimatedSection from "@/components/AnimatedSection";
import About from "@/components/modules/AboutMe.tsx/About";
import Contact from "@/components/modules/Contact/Contact";
import Hero from "@/components/modules/Hero/Hero";
import Projects from "@/components/modules/Projects/Projects";
import Skills from "@/components/modules/Skills/Skills4";
import Skills2 from "@/components/modules/Skills/Skills2";
import Skills3 from "@/components/modules/Skills/Skills3";
import Skills4 from "@/components/modules/Skills/Skills";
import Skills5 from "@/components/modules/Skills/Skills5";
import Skills6 from "@/components/modules/Skills/Skills6";
import Head from "next/head";
import Blogs from "@/components/modules/Blogs/Blogs";

export default async function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* <AnimatedSection>
          <Hero />
        </AnimatedSection> */}
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Skills4 />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Blogs />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </>
  );
}
