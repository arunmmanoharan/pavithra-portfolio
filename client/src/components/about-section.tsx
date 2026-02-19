import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Globe, Award, BookOpen, TreePine } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

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

export function AboutSection() {
  const { ref, inView } = useInView();

  const stats = [
    { icon: BookOpen, label: "Publications", value: 7, suffix: "+", color: "text-primary" },
    { icon: Award, label: "Grant Funding", displayValue: profileData.totalGrantFunding, color: "text-accent" },
    { icon: Globe, label: "Countries", value: 3, suffix: "", color: "text-chart-2" },
  ];

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <TreePine className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold gradient-text"
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
              <TiltCard key={stat.label}>
                <Card
                  className="p-5 glass-card glass-card-glow"
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
                        {stat.displayValue ? stat.displayValue : (
                          <AnimatedCounter target={stat.value!} suffix={stat.suffix} />
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </motion.div>
                </Card>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
