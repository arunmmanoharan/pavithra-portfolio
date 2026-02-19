import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Star, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-education-title"
            >
              Education
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profileData.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <Card className="p-6 h-full bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50 hover-elevate overflow-visible">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  {edu.gpa && (
                    <Badge variant="secondary" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      GPA: {edu.gpa}
                    </Badge>
                  )}
                </div>
                <h3
                  className="text-base font-bold text-foreground mb-1"
                  data-testid={`text-edu-degree-${edu.id}`}
                >
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-primary mb-1">
                  {edu.field}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </div>
                {edu.details && (
                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                    {edu.details}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            Awards & Grants
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {profileData.awards.map((award, i) => (
              <Card
                key={i}
                className="p-4 bg-card/40 dark:bg-card/40 backdrop-blur-sm border border-border/30"
              >
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid={`text-award-${i}`}
                  >
                    {award}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
