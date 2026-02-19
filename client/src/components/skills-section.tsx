import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, FlaskConical, Wrench, BookMarked, Languages, Sparkles } from "lucide-react";

const skillGroups = [
  { key: "research" as const, label: "Research Methods", icon: FlaskConical, color: "bg-primary", textColor: "text-primary", level: 95 },
  { key: "technical" as const, label: "Technical Skills", icon: Code, color: "bg-chart-2", textColor: "text-chart-2", level: 82 },
  { key: "tools" as const, label: "Software & Tools", icon: Wrench, color: "bg-accent", textColor: "text-accent", level: 88 },
  { key: "frameworks" as const, label: "Domains & Frameworks", icon: BookMarked, color: "bg-chart-4", textColor: "text-chart-4", level: 90 },
  { key: "languages" as const, label: "Languages", icon: Languages, color: "bg-chart-5", textColor: "text-chart-5", level: 75 },
];

function SkillBar({ level, color, inView, delay }: { level: number; color: string; inView: boolean; delay: number }) {
  return (
    <div className="w-full h-1.5 bg-muted/50 rounded-full overflow-hidden mt-3">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full ${color}`}
        style={{ opacity: 0.7 }}
      />
    </div>
  );
}

export function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold gradient-text"
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="p-5 h-full glass-card glass-card-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-primary/8 flex items-center justify-center">
                    <group.icon className={`w-4 h-4 ${group.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm tracking-tight">
                      {group.label}
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{group.level}%</span>
                </div>
                <SkillBar level={group.level} color={group.color} inView={inView} delay={0.3 + i * 0.1} />
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {profileData.skills[group.key].map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 + j * 0.03 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s()]/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
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
