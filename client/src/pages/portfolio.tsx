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
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleBackground />

      <div className="blob w-[500px] h-[500px] bg-primary/30 top-[20%] -left-[200px] animate-float-slow animate-morph" />
      <div className="blob w-[400px] h-[400px] bg-chart-2/25 top-[50%] -right-[150px] animate-float-slow animate-morph" style={{ animationDelay: "-5s" }} />
      <div className="blob w-[350px] h-[350px] bg-accent/20 top-[75%] left-[10%] animate-float-slow animate-morph" style={{ animationDelay: "-10s" }} />
      <div className="blob w-[300px] h-[300px] bg-primary/20 top-[30%] right-[20%] animate-float-slow animate-morph" style={{ animationDelay: "-15s" }} />

      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider">
          <AboutSection />
        </div>
        <div className="section-divider">
          <ExperienceSection />
        </div>
        <div className="section-divider">
          <SkillsSection />
        </div>
        <div className="section-divider">
          <EducationSection />
        </div>
        <div className="section-divider">
          <PublicationsSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
