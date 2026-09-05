import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SiGooglescholar, SiLinkedin } from "react-icons/si";

export function ContactSection() {
  const { ref, inView } = useInView();

  const contactInfo = [
    { icon: PlaceOutlinedIcon, label: "Location", value: profileData.location },
    { icon: SiLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profileData.linkedin },
    { icon: SiGooglescholar, label: "Google Scholar", value: "View Google Scholar", href: profileData.googleScholar },
  ];

  return (
    <Box component="section" id="contact" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsl(var(--primary) / 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChatBubbleOutlineIcon sx={{ color: "primary.main" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-contact-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Get in Touch
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(var(--primary)), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
        </motion.div>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 5 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}>
              Interested in collaboration, research opportunities, or just want to say hello?
              I'd love to hear from you. Let's work together to build a more sustainable future.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <Card
                    className="glass-card glass-card-glow"
                    sx={{
                      boxShadow: "none",
                      transition: "all 0.3s ease",
                      "&:hover .arrow-icon": { opacity: 1 },
                      "&:hover .icon-box": { bgcolor: "hsl(var(--primary) / 0.12)" },
                    }}
                  >
                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, py: 2, "&:last-child": { pb: 2 } }}>
                      <Box
                        className="icon-box"
                        sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsl(var(--primary) / 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background-color 0.3s ease" }}
                      >
                        <item.icon style={{ fontSize: 18, color: "hsl(var(--primary))" }} />
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="overline" sx={{ color: "text.secondary", fontSize: "0.65rem", lineHeight: 1.5 }}>
                          {item.label}
                        </Typography>
                        {item.href ? (
                          <Typography
                            component="a"
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            data-testid={`link-contact-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            sx={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "text.primary", textDecoration: "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                          >
                            {item.value}
                          </Typography>
                        ) : (
                          <Typography sx={{ fontSize: "0.875rem", fontWeight: 500 }}>{item.value}</Typography>
                        )}
                      </Box>
                      {item.href && (
                        <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 16, color: "text.secondary", opacity: 0, transition: "opacity 0.3s ease", flexShrink: 0 }} />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none", height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 }, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, height: "100%", justifyContent: "center" }}>
                <Box sx={{ width: 48, height: 48, borderRadius: 1, bgcolor: "hsl(var(--primary) / 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MailOutlineIcon sx={{ color: "primary.main" }} />
                </Box>
                <Typography variant="h3" sx={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
                  Email me directly
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  For collaborations, research opportunities, speaking, or anything else,
                  email is the best way to reach me.
                </Typography>
                <Typography
                  component="a"
                  href={`mailto:${profileData.email}`}
                  data-testid="link-contact-email"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem" },
                    fontWeight: 600,
                    color: "primary.main",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {profileData.email}
                </Typography>
                <Button
                  variant="contained"
                  href={`mailto:${profileData.email}`}
                  startIcon={<MailOutlineIcon />}
                  data-testid="button-contact-email"
                  sx={{ mt: 1, px: 3 }}
                >
                  Email Me
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
