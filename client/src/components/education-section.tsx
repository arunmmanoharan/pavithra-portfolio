import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

export function EducationSection() {
  const { ref, inView } = useInView();

  return (
    <Box component="section" id="education" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SchoolOutlinedIcon sx={{ color: "primary.main" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-education-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Education
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2.5 }}>
          {profileData.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard>
                <Card className="glass-card glass-card-glow" sx={{ height: "100%", boxShadow: "none", overflow: "visible" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 2 }}>
                      <Box sx={{ width: 44, height: 44, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <SchoolOutlinedIcon sx={{ color: "primary.main" }} />
                      </Box>
                      {edu.gpa && (
                        <Chip
                          icon={<StarOutlinedIcon sx={{ fontSize: 12 }} />}
                          label={`GPA: ${edu.gpa}`}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "0.75rem" }}
                        />
                      )}
                    </Box>
                    <Typography variant="subtitle1" data-testid={`text-edu-degree-${edu.id}`} sx={{ fontWeight: 700, letterSpacing: "-0.01em", mb: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography sx={{ color: "primary.main", fontWeight: 600, fontSize: "0.875rem", mb: 0.5 }}>
                      {edu.field}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                      {edu.institution}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary", mb: 1.5 }}>
                      <CalendarTodayOutlinedIcon sx={{ fontSize: 12 }} />
                      <Typography variant="caption">{edu.period}</Typography>
                    </Box>
                    {edu.details && (
                      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", borderTop: "1px solid", borderColor: "divider", pt: 1.5, lineHeight: 1.6 }}>
                        {edu.details}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </Box>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <Box sx={{ mt: 7 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "hsla(38, 70%, 50%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <EmojiEventsOutlinedIcon sx={{ color: "warning.main", fontSize: 18 }} />
              </Box>
              <Typography variant="h3" sx={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
                Awards & Grants
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }, gap: 1.5 }}>
              {profileData.awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                >
                  <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none" }}>
                    <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, py: 2, "&:last-child": { pb: 2 } }}>
                      <MilitaryTechOutlinedIcon sx={{ fontSize: 16, color: "warning.main", mt: 0.25, flexShrink: 0 }} />
                      <Typography variant="body2" data-testid={`text-award-${i}`} sx={{ color: "text.secondary" }}>
                        {award}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
