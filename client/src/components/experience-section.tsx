import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <Box component="section" id="experience" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "primary.main", opacity: 0.1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <WorkOutlineIcon sx={{ color: "primary.main", position: "absolute" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-experience-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Experience
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ position: "relative" }}>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0, position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, hsl(152,55%,33%,0.5), hsl(152,55%,33%,0.2), transparent)" }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {profileData.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "relative", paddingLeft: 56 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 * i + 0.2, type: "spring" }}
                  style={{ position: "absolute", left: 12, top: 24 }}
                >
                  <Box sx={{ width: 16, height: 16, borderRadius: "50%", bgcolor: "primary.main", border: "2px solid", borderColor: "background.default", boxShadow: "0 0 10px hsl(152,55%,33%,0.3)" }} />
                </motion.div>

                <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none", overflow: "visible" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 1.5, mb: 2 }}>
                      <Box>
                        <Typography variant="h6" data-testid={`text-exp-role-${exp.id}`} sx={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
                          {exp.role}
                        </Typography>
                        <Typography sx={{ color: "primary.main", fontWeight: 600, fontSize: "0.875rem", mt: 0.25 }}>
                          {exp.company}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "flex-start", sm: "flex-end" }, gap: 0.75, flexShrink: 0 }}>
                        <Chip
                          icon={<CalendarTodayOutlinedIcon sx={{ fontSize: 12 }} />}
                          label={exp.period}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "0.75rem" }}
                        />
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary" }}>
                          <PlaceOutlinedIcon sx={{ fontSize: 12 }} />
                          <Typography variant="caption">{exp.location}</Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1.25 }}>
                      {exp.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.15 * i + 0.3 + j * 0.05 }}
                          style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                        >
                          <ChevronRightIcon sx={{ fontSize: 14, mt: 0.25, flexShrink: 0, color: "primary.main", opacity: 0.5 }} />
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>{h}</Typography>
                        </motion.li>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
