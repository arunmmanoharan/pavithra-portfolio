import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { useSnackbar } from "@/hooks/use-snackbar";

export function ContactSection() {
  const { ref, inView } = useInView();
  const { showSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:${profileData.email}?subject=${subject}&body=${body}`, "_self");
    showSnackbar({ title: "Opening your email client", description: "Your message is ready to send." });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: MailOutlineIcon, label: "Email", value: profileData.email, href: `mailto:${profileData.email}` },
    { icon: PhoneOutlinedIcon, label: "Phone", value: profileData.phone, href: `tel:${profileData.phone}` },
    { icon: PlaceOutlinedIcon, label: "Location", value: profileData.location },
    { icon: SiLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profileData.linkedin },
  ];

  return (
    <Box component="section" id="contact" ref={ref} sx={{ py: 14 }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChatBubbleOutlineIcon sx={{ color: "primary.main" }} />
            </Box>
            <Typography variant="h2" className="gradient-text" data-testid="text-contact-title" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Get in Touch
            </Typography>
          </Box>
          <Box sx={{ width: 80, height: 4, background: "linear-gradient(to right, hsl(152,55%,33%), transparent)", borderRadius: 2, ml: "52px", mb: 5 }} />
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
                      "&:hover .icon-box": { bgcolor: "rgba(46,125,50,0.12)" },
                    }}
                  >
                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, py: 2, "&:last-child": { pb: 2 } }}>
                      <Box
                        className="icon-box"
                        sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "hsla(152, 55%, 33%, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background-color 0.3s ease" }}
                      >
                        <item.icon style={{ fontSize: 18, color: "hsl(152, 55%, 33%)" }} />
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
                            data-testid={`link-contact-${item.label.toLowerCase()}`}
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
            <Card className="glass-card glass-card-glow" sx={{ boxShadow: "none" }}>
              <CardContent sx={{ p: 3 }}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    <TextField
                      label="Name"
                      name="name"
                      required
                      fullWidth
                      size="small"
                      value={formData.name}
                      onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                      inputProps={{ "data-testid": "input-contact-name" }}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      fullWidth
                      size="small"
                      value={formData.email}
                      onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                      inputProps={{ "data-testid": "input-contact-email" }}
                    />
                    <TextField
                      label="Message"
                      name="message"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                      inputProps={{ "data-testid": "input-contact-message" }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      startIcon={<SendIcon />}
                      data-testid="button-contact-submit"
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
