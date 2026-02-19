import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const skillGroups = [
  { key: "research" as const, label: "Research Methods", icon: ScienceOutlinedIcon, color: "primary.main", level: 95 },
  { key: "technical" as const, label: "Technical Skills", icon: CodeOutlinedIcon, color: "secondary.main", level: 82 },
  { key: "tools" as const, label: "Software & Tools", icon: BuildOutlinedIcon, color: "warning.main", level: 88 },
  { key: "frameworks" as const, label: "Domains & Frameworks", icon: MenuBookOutlinedIcon, color: "primary.dark", level: 90 },
  { key: "languages" as const, label: "Languages", icon: TranslateOutlinedIcon, color: "secondary.dark", level: 75 },
];

export function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <Box component="section" id="skills" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "primary.main", opacity: 0.1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <AutoAwesomeOutlinedIcon sx={{ color: "primary.main", position: "absolute" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-skills-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Skills & Expertise
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }, gap: 2.5 }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="glass-card glass-card-glow" sx={{ height: "100%", boxShadow: "none" }}>
                <CardContent sx={{ p: 2.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box sx={{ width: 36, height: 36, borderRadius: 1, bgcolor: "primary.main", opacity: 0.08, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <group.icon sx={{ fontSize: 18, color: group.color, position: "absolute" }} />
                    </Box>
                    <Typography variant="subtitle2" sx={{ flex: 1, letterSpacing: "-0.01em" }}>
                      {group.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: "monospace" }}>
                      {group.level}%
                    </Typography>
                  </Box>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0 }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={group.level}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: "divider",
                        mb: 2,
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 3,
                          bgcolor: group.color,
                          opacity: 0.7,
                        },
                      }}
                    />
                  </motion.div>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {profileData.skills[group.key].map((skill, j) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 + j * 0.03 }}
                      >
                        <Chip
                          label={skill}
                          size="small"
                          variant="outlined"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s()]/g, "-")}`}
                          sx={{ fontSize: "0.75rem" }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
