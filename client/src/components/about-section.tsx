import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Globe, Award, BookOpen, TreePine } from "lucide-react";

export function AboutSection() {
  const { ref, inView } = useInView();

  const stats = [
    { icon: BookOpen, label: "Publications", value: "7+", color: "text-primary" },
    { icon: Award, label: "Grants Received", value: profileData.totalGrantFunding, color: "text-accent" },
    { icon: Globe, label: "Countries Lived", value: "3", color: "text-chart-2" },
  ];

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <TreePine className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-about-title"
            >
              About Me
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full ml-[52px]" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <p
              className="text-lg leading-relaxed text-foreground"
              data-testid="text-about-summary"
            >
              {profileData.summary}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Currently at Columbia Climate School, I work at the intersection of environmental
              justice, artificial intelligence, and community-driven coastal adaptation. My
              interdisciplinary background spanning Information Technology, Environmental Science,
              and Humanities Research uniquely positions me to bridge the gap between technology,
              policy, and communities most affected by climate change.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              With a perfect 4.0 GPA from my PhD at Oklahoma State University and experience across
              three countries (India, the UK, and the USA), I bring a global perspective to solving
              complex environmental challenges through stakeholder engagement, qualitative research,
              and data-driven approaches.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {stats.map((stat, i) => (
              <Card
                key={stat.label}
                className="p-5 bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/8 flex items-center justify-center">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-foreground tracking-tight"
                      data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
