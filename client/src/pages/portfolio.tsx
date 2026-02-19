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
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
