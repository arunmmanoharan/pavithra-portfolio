import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";

function PublicationCard({ pub, index, inView }: { pub: typeof profileData.publications[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 * index, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none", overflow: "visible", transition: "all 0.3s ease" }}>
        <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2.5 }}>
          <motion.div
            animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "primary.main", opacity: 0.08, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
              <DescriptionOutlinedIcon sx={{ color: "primary.main", position: "absolute" }} />
            </Box>
          </motion.div>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              data-testid={`text-pub-title-${index}`}
              sx={{
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                mb: 0.75,
                transition: "color 0.3s ease",
                color: hovered ? "primary.main" : "text.primary",
              }}
            >
              {pub.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.25 }}>
              {pub.authors}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
              <Chip label={pub.journal} size="small" variant="outlined" sx={{ fontSize: "0.75rem" }} />
              <Chip label={pub.year} size="small" variant="outlined" sx={{ fontSize: "0.75rem" }} />
              <motion.div
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
                transition={{ duration: 0.2 }}
              >
                <OpenInNewIcon sx={{ fontSize: 14, color: "text.secondary" }} />
              </motion.div>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function PublicationsSection() {
  const { ref, inView } = useInView();

  return (
    <Box component="section" id="publications" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "primary.main", opacity: 0.1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <AutoStoriesOutlinedIcon sx={{ color: "primary.main", position: "absolute" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-publications-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Publications
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {profileData.publications.map((pub, i) => (
            <PublicationCard key={i} pub={pub} index={i} inView={inView} />
          ))}
        </Box>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 4, textAlign: "center" }}>
            Plus 4 additional papers submitted or in progress
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
