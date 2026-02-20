import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="container mx-auto px-4 pt-20 pb-10 flex items-center justify-center"
      id="hero"
    >
      <div className="text-center space-y-6">
        <p className="text-xl md:text-2xl">Hey There, This is Sohel Rana</p>
        <h1 className="text-3xl md:text-5xl font-bold">
          Full Stack Web Developer | TypeScript Enthusiast
        </h1>
        <p className="text-xl text-gray-300">
          My goal is to write maintainable, clean and understandable code to{" "}
          <br />
          process development was enjoyable.
        </p>
        <div className="space-x-2">
          <Button variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1byI-Th_rTwXzwnDN6iv52YeVNfuAvV-j/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://github.com/sohelranaweb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://linkedin.com/in/sohelrana55"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
