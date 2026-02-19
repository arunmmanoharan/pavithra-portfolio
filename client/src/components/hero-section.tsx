import { motion } from "framer-motion";
import { MapPin, Mail, ArrowDown, Leaf } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { profileData } from "@/lib/portfolio-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import profilePhoto from "@assets/pavithra_selvakumar_(1)_1771530074450.jpg";

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 40);
    return () => clearTimeout(timer);
  }, [displayed, started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-typing-cursor text-primary">|</span>
      )}
    </span>
  );
}

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-background" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-chart-2/40 animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-60 right-10 w-1.5 h-1.5 rounded-full bg-chart-2/25 animate-float" style={{ animationDelay: "-1s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto border-2 border-white/20">
              <AvatarImage src={profilePhoto} alt="Pavithra Priyadarshini Selvakumar" className="object-cover" />
              <AvatarFallback className="text-3xl sm:text-4xl font-serif font-bold bg-primary/90 text-primary-foreground">
                PP
              </AvatarFallback>
            </Avatar>
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-pulse-glow" />
            <div className="absolute -inset-6 rounded-full border border-primary/10 animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="secondary" className="backdrop-blur-md bg-white/8 border-white/10 text-white/85 no-default-hover-elevate no-default-active-elevate px-4 py-1.5">
            <Leaf className="w-3.5 h-3.5 mr-2" />
            Environmental Scientist & Researcher
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight gradient-text-hero"
          data-testid="text-hero-name"
        >
          {profileData.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 mb-4 font-light max-w-2xl mx-auto leading-relaxed h-8 sm:h-9"
          data-testid="text-hero-headline"
        >
          <TypeWriter text={profileData.tagline} delay={1200} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-white/40 text-sm mb-12"
        >
          <MapPin className="w-4 h-4" />
          <span>{profileData.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={scrollToContact}
            className="bg-primary border-primary-border text-primary-foreground px-6"
            data-testid="button-hero-contact"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="backdrop-blur-md bg-white/5 border-white/15 text-white px-6"
              data-testid="button-hero-linkedin"
            >
              <SiLinkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
          data-testid="button-scroll-down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
