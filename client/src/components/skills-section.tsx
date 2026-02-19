import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, FlaskConical, Wrench, BookMarked, Languages } from "lucide-react";

const skillGroups = [
  {
    key: "research" as const,
    label: "Research Methods",
    icon: FlaskConical,
  },
  {
    key: "technical" as const,
    label: "Technical Skills",
    icon: Code,
  },
  {
    key: "tools" as const,
    label: "Software & Tools",
    icon: Wrench,
  },
  {
    key: "frameworks" as const,
    label: "Domains & Frameworks",
    icon: BookMarked,
  },
  {
    key: "languages" as const,
    label: "Languages",
    icon: Languages,
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="w-7 h-7 text-primary" />
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-skills-title"
            >
              Skills & Expertise
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="p-5 h-full bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <group.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
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
