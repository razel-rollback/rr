import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm razel-rollback";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Simple scroll function for HashRouter
  const scrollToSection = (hash: string) => {
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="text-center space-y-6 animate-fade-in">
        <p className="font-mono text-primary text-lg">{">"} Hello World_</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono">
          <span className="text-foreground">{displayText}</span>
          <span className="typing-cursor text-primary">|</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Full-stack developer passionate about building beautiful, functional web applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
            Contact Me
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => scrollToSection("projects")}>
            View Projects
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;