import { motion } from "framer-motion";
import { MapPin, Mail, ArrowDown } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { profileData } from "@/lib/portfolio-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Avatar className="w-32 h-32 mx-auto border-4 border-white/20">
            <AvatarFallback className="text-3xl font-serif font-bold bg-primary/80 text-primary-foreground">
              PP
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          data-testid="text-hero-name"
        >
          {profileData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/80 mb-2 font-medium"
          data-testid="text-hero-headline"
        >
          {profileData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8"
        >
          <MapPin className="w-4 h-4" />
          <span>{profileData.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onClick={scrollToContact}
            className="bg-primary border-primary-border text-primary-foreground"
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
              className="backdrop-blur-md bg-white/10 border-white/20 text-white"
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
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
