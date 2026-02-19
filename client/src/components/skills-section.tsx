import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, FlaskConical, Wrench, BookMarked, Languages, Sparkles } from "lucide-react";

const skillGroups = [
  { key: "research" as const, label: "Research Methods", icon: FlaskConical, color: "text-primary" },
  { key: "technical" as const, label: "Technical Skills", icon: Code, color: "text-chart-2" },
  { key: "tools" as const, label: "Software & Tools", icon: Wrench, color: "text-accent" },
  { key: "frameworks" as const, label: "Domains & Frameworks", icon: BookMarked, color: "text-chart-4" },
  { key: "languages" as const, label: "Languages", icon: Languages, color: "text-chart-5" },
];

export function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-skills-title"
            >
              Skills & Expertise
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full ml-[52px]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <Card className="p-5 h-full bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-primary/8 flex items-center justify-center">
                    <group.icon className={`w-4 h-4 ${group.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm tracking-tight">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills[group.key].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s()]/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
