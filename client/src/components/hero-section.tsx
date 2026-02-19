import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { SiLinkedin } from "react-icons/si";
import { profileData } from "@/lib/portfolio-data";
import { useState, useEffect } from "react";
import profilePhoto from "@assets/pavithra_selvakumar_(1)_1771530074450.jpg";

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started || displayed.length >= text.length) return;
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 40);
    return () => clearTimeout(t);
  }, [displayed, started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-typing-cursor" style={{ color: "hsl(152, 55%, 42%)" }}>|</span>
      )}
    </span>
  );
}

export function HeroSection() {
  const scrollToAbout = () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.60), hsl(150,15%,97%))",
        }}
      />

      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <Box className="animate-float" sx={{ position: "absolute", top: 80, left: 40, width: 8, height: 8, borderRadius: "50%", bgcolor: "primary.main", opacity: 0.3 }} />
        <Box className="animate-float" sx={{ position: "absolute", top: 160, right: 80, width: 6, height: 6, borderRadius: "50%", bgcolor: "secondary.main", opacity: 0.4, animationDelay: "-2s" }} />
        <Box className="animate-float" sx={{ position: "absolute", bottom: 160, left: "25%", width: 4, height: 4, borderRadius: "50%", bgcolor: "warning.main", opacity: 0.3, animationDelay: "-4s" }} />
      </Box>

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 960, mx: "auto", px: { xs: 2, sm: 3, lg: 4 }, textAlign: "center", py: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 32 }}
        >
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar
              src={profilePhoto}
              alt="Pavithra Priyadarshini Selvakumar"
              sx={{ width: { xs: 128, sm: 160 }, height: { xs: 128, sm: 160 }, mx: "auto", border: "2px solid rgba(255,255,255,0.2)" }}
            />
            <Box className="animate-pulse-glow" sx={{ position: "absolute", inset: -12, borderRadius: "50%", border: "1px solid", borderColor: "primary.main", opacity: 0.3 }} />
            <Box className="animate-pulse-glow" sx={{ position: "absolute", inset: -24, borderRadius: "50%", border: "1px solid", borderColor: "primary.main", opacity: 0.15, animationDelay: "-1.5s" }} />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
        >
          <Chip
            icon={<SpaOutlinedIcon sx={{ fontSize: 14, color: "rgba(255,255,255,0.8) !important" }} />}
            label="Environmental Scientist & Researcher"
            sx={{
              bgcolor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              px: 1,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography
            variant="h1"
            className="gradient-text-hero"
            data-testid="text-hero-name"
            sx={{ fontSize: { xs: "2.5rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, lineHeight: 1.05, mb: 3 }}
          >
            {profileData.name}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Typography
            data-testid="text-hero-headline"
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" }, color: "rgba(255,255,255,0.7)", fontWeight: 300, maxWidth: 640, mx: "auto", lineHeight: 1.6, mb: 2, minHeight: { xs: 32, sm: 36 } }}
          >
            <TypeWriter text={profileData.tagline} delay={1200} />
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 48 }}
        >
          <PlaceOutlinedIcon sx={{ fontSize: 16, color: "rgba(255,255,255,0.4)" }} />
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)" }}>{profileData.location}</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}
        >
          <Button
            variant="contained"
            startIcon={<MailOutlineIcon />}
            onClick={scrollToContact}
            data-testid="button-hero-contact"
            sx={{ px: 3 }}
          >
            Get in Touch
          </Button>
          <Button
            variant="outlined"
            startIcon={<SiLinkedin />}
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-hero-linkedin"
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(12px)",
              bgcolor: "rgba(255,255,255,0.05)",
              px: 3,
              "&:hover": { borderColor: "rgba(255,255,255,0.4)", bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            LinkedIn
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)" }}
        >
          <Box
            component="button"
            onClick={scrollToAbout}
            data-testid="button-scroll-down"
            sx={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", p: 0 }}
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
