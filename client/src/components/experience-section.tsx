import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-experience-title"
            >
              Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full ml-[52px]" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-6">
            {profileData.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                className="relative pl-14 md:pl-20"
              >
                <div className="absolute left-3.5 md:left-6.5 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm shadow-primary/30" />

                <Card className="p-6 bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50 hover-elevate overflow-visible">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                        data-testid={`text-exp-role-${exp.id}`}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      <Badge variant="secondary" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-primary/50" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
