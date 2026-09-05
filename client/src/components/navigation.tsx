import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useThemeMode } from "@/hooks/use-theme-mode";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const { mode, toggleMode } = useThemeMode();

  useEffect(() => {
    let frame = 0;
    const sections = navLinks.map((link) => document.querySelector(link.href));
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 50);
      // A reading line works even when a section is taller than the viewport.
      const readingLine = Math.min(window.innerHeight * 0.3, 200);
      let current = "";
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = "contact";
      setActiveSection(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        data-testid="nav-bar"
        sx={{
          bgcolor: scrolled ? "hsl(var(--background) / 0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid" : "none",
          borderColor: "divider",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Toolbar sx={{ maxWidth: 1152, mx: "auto", width: "100%", px: { xs: 2, sm: 3, lg: 4 } }}>
          <Button
            href="#hero"
            aria-label="Back to top"
            data-testid="link-home"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              minWidth: "auto",
              mr: "auto",
            }}
          >
            <span className="gradient-text">PS</span>
          </Button>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Box key={link.href} sx={{ position: "relative" }}>
                  <Button
                    size="small"
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    data-testid={`link-${link.label.toLowerCase()}`}
                    sx={{
                      color: scrolled ? (isActive ? "primary.main" : "text.secondary") : "white",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      px: 1.5,
                    }}
                  >
                    {link.label}
                  </Button>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 12,
                        right: 12,
                        height: 2,
                        borderRadius: 1,
                        background: "hsl(var(--primary))",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          <IconButton
            onClick={toggleMode}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
            sx={{ ml: { xs: 0, md: 1 }, color: scrolled ? "text.primary" : "white" }}
          >
            {mode === "dark" ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
          </IconButton>

          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            data-testid="button-mobile-menu"
            sx={{ display: { md: "none" }, color: scrolled ? "text.primary" : "white" }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        {!reducedMotion && (
          <motion.div
            aria-hidden="true"
            data-testid="reading-progress"
            style={{ height: 2, position: "absolute", bottom: -1, left: 0, right: 0, background: "hsl(var(--primary))", transformOrigin: "left", scaleX: scrollYProgress }}
          />
        )}
      </AppBar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            mt: "64px",
            bgcolor: "rgba(245,248,245,0.95)",
            backdropFilter: "blur(24px)",
          },
        }}
      >
        <List sx={{ py: 1 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
              sx={{
                color: activeSection === link.href.slice(1) ? "primary.main" : "text.secondary",
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontSize: "0.875rem", fontWeight: 500 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
