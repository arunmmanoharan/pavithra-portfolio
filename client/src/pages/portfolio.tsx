import { ParticleBackground } from "@/components/particle-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { PublicationsSection } from "@/components/publications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import { MotionConfig } from "framer-motion";

export default function Portfolio() {
  useEffect(() => {
    document.title = `${profileData.shortName} | Portfolio`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        `Portfolio of ${profileData.name} — ${profileData.tagline}. Research in environmental science, climate justice, and AI.`
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = `Portfolio of ${profileData.name} — ${profileData.tagline}. Research in environmental science, climate justice, and AI.`;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <Box className="portfolio-motion" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary", position: "relative", overflowX: "clip" }}>
      <ParticleBackground />

      <Box className="blob animate-float-slow animate-morph" sx={{ width: 500, height: 500, bgcolor: "primary.main", opacity: 0.12, top: "20%", left: -200 }} />
      <Box className="blob animate-float-slow animate-morph" sx={{ width: 400, height: 400, bgcolor: "secondary.main", opacity: 0.1, top: "50%", right: -150, animationDelay: "-5s" }} />
      <Box className="blob animate-float-slow animate-morph" sx={{ width: 350, height: 350, bgcolor: "warning.main", opacity: 0.08, top: "75%", left: "10%", animationDelay: "-10s" }} />
      <Box className="blob animate-float-slow animate-morph" sx={{ width: 300, height: 300, bgcolor: "primary.main", opacity: 0.08, top: "30%", right: "20%", animationDelay: "-15s" }} />

      <Navigation />
      <Box component="main" sx={{ position: "relative", zIndex: 10 }}>
        <HeroSection />
        <Box className="section-divider"><AboutSection /></Box>
        <Box className="section-divider"><ExperienceSection /></Box>
        <Box className="section-divider"><SkillsSection /></Box>
        <Box className="section-divider"><EducationSection /></Box>
        <Box className="section-divider"><PublicationsSection /></Box>
        <ContactSection />
      </Box>
      <Footer />
    </Box>
    </MotionConfig>
  );
}
