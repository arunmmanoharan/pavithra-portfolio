import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import { useState, useEffect, useRef } from "react";
import londonPhoto from "@assets/1531513694529_1771530074454.jpeg";
import posterPhoto from "@assets/1664215874096_1771530074454.jpeg";
import teamPhoto from "@assets/1700712310327_1771530074454.jpeg";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion) return;
    let startTime: number;
    let frame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration, reducedMotion]);

  return <span ref={ref}>{reducedMotion ? target : count}{suffix}</span>;
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  return (
    <motion.div
      onMouseMove={(e) => {
        if (reducedMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY, transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  const { ref, inView } = useInView();

  const stats = [
    { icon: AutoStoriesOutlinedIcon, label: "Publications", value: 9, suffix: "+", color: "primary.main" },
    { icon: EmojiEventsOutlinedIcon, label: "Grant Funding", displayValue: profileData.totalGrantFunding, color: "warning.main" },
    { icon: PublicOutlinedIcon, label: "Countries", value: 3, suffix: "", color: "secondary.main" },
  ];

  const photos = [
    { src: londonPhoto, alt: "Pavithra at the Palace of Westminster, London", caption: "London, UK" },
    { src: posterPhoto, alt: "Research poster presentation at conference", caption: "Research Presentation" },
    { src: teamPhoto, alt: "With research colleagues at Oklahoma State University", caption: "Research Team" },
  ];

  return (
    <Box component="section" id="about" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ParkOutlinedIcon sx={{ color: "primary.main" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-about-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              About Me
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "3fr 2fr" }, gap: 5, alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <Typography variant="body1" data-testid="text-about-summary" sx={{ fontSize: "1.1rem", mb: 2.5 }}>
              {profileData.summary}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>
              Currently at Columbia Climate School, I work at the intersection of environmental
              justice, artificial intelligence, and community-driven coastal adaptation. My
              interdisciplinary background spanning Information Technology, Environmental Science,
              and Humanities Research uniquely positions me to bridge the gap between technology,
              policy, and communities most affected by climate change.
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              With a perfect 4.0 GPA from my PhD at Oklahoma State University and experience across
              three countries (India, the UK, and the USA), I bring a global perspective to solving
              complex environmental challenges through stakeholder engagement, qualitative research,
              and data-driven approaches.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {stats.map((stat, i) => (
                <TiltCard key={stat.label}>
                  <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none" }}>
                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, py: 2.5, "&:last-child": { pb: 2.5 } }}>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}>
                        <Box sx={{ width: 48, height: 48, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <stat.icon sx={{ color: stat.color }} />
                        </Box>
                      </motion.div>
                      <Box>
                        <Typography variant="h5" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`} sx={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                          {stat.displayValue ? stat.displayValue : <AnimatedCounter target={stat.value!} suffix={stat.suffix} />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>{stat.label}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </TiltCard>
              ))}
            </Box>
          </motion.div>
        </Box>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.6 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, mt: 7 }}>
            {photos.map((photo, i) => (
              <motion.div key={photo.alt} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}>
                <Card className="glass-card glass-card-glow" sx={{ overflow: "hidden", boxShadow: "none", "&:hover img": { transform: "scale(1.05)" }, "&:hover .photo-overlay": { opacity: 1 } }}>
                  <Box sx={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    <Box
                      component="img"
                      src={photo.src}
                      alt={photo.alt}
                      data-testid={`img-about-${i}`}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box className="photo-overlay" sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", opacity: 0, transition: "opacity 0.3s ease" }} />
                    <Typography className="photo-overlay" sx={{ position: "absolute", bottom: 0, left: 0, right: 0, px: 1.5, py: 1, fontSize: "0.75rem", color: "white", fontWeight: 500, opacity: 0, transition: "opacity 0.3s ease" }}>
                      {photo.caption}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
