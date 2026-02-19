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
import { motion } from "framer-motion";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    for (const link of navLinks) {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        data-testid="nav-bar"
        sx={{
          bgcolor: scrolled ? "rgba(245,248,245,0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid" : "none",
          borderColor: "divider",
          transition: "all 0.5s ease",
        }}
      >
        <Toolbar sx={{ maxWidth: 1152, mx: "auto", width: "100%", px: { xs: 2, sm: 3, lg: 4 } }}>
          <Button
            onClick={() => scrollTo("#hero")}
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
                    onClick={() => scrollTo(link.href)}
                    data-testid={`link-${link.label.toLowerCase()}`}
                    sx={{
                      color: isActive ? "primary.main" : "text.secondary",
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
                        background: "hsl(152, 55%, 33%)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            sx={{ display: { md: "none" }, color: scrolled ? "text.primary" : "white" }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
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
              onClick={() => scrollTo(link.href)}
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
