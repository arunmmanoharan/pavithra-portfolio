import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Globe, Award, BookOpen } from "lucide-react";

export function AboutSection() {
  const { ref, inView } = useInView();

  const stats = [
    { icon: BookOpen, label: "Publications", value: "7+" },
    { icon: Award, label: "Grants Received", value: profileData.totalGrantFunding },
    { icon: Globe, label: "Countries", value: "3" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-7 h-7 text-primary" />
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-about-title"
            >
              About Me
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
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
              three countries, I bring a global perspective to solving complex environmental
              challenges through stakeholder engagement, qualitative research, and data-driven
              approaches.
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
                className="p-5 bg-card/50 dark:bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-foreground"
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
