import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Star, Award, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function EducationSection() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold gradient-text"
              data-testid="text-education-title"
            >
              Education
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full ml-[52px]" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {profileData.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard>
                <Card className="p-6 h-full glass-card glass-card-glow overflow-visible transition-all duration-300">
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
                    className="text-base font-bold text-foreground mb-1 tracking-tight"
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
                    <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
                      {edu.details}
                    </p>
                  )}
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground tracking-tight">
              Awards & Grants
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {profileData.awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              >
                <Card className="p-4 glass-card glass-card-glow transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-award-${i}`}
                    >
                      {award}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
