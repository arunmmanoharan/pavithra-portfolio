import { motion, useReducedMotion } from "framer-motion";
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

type Publication = (typeof profileData.publications)[number];

function PublicationCard({
  pub,
  index,
}: {
  pub: Publication;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none", overflow: "visible", transition: "all 0.3s ease" }}>
        <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2.5 }}>
          <motion.div
            animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <DescriptionOutlinedIcon sx={{ color: "primary.main" }} />
            </Box>
          </motion.div>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {pub.url ? (
              <Typography
                component="a"
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtitle1"
                data-testid={`text-pub-title-${index}`}
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
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
            ) : (
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
            )}
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.25 }}>
              {pub.authors}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
              <Chip label={pub.journal} size="small" variant="outlined" sx={{ fontSize: "0.75rem" }} />
              <Chip label={pub.year} size="small" variant="outlined" sx={{ fontSize: "0.75rem" }} />
              {pub.url ? (
                <motion.div
                  initial={false}
                  animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <OpenInNewIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                </motion.div>
              ) : null}
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
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AutoStoriesOutlinedIcon sx={{ color: "primary.main" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-publications-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Publications
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {profileData.publications.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </Box>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 4, textAlign: "center" }}>
            Plus a book chapter and 8 additional manuscripts under review or in preparation
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
