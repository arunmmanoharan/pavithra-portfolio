import { profileData } from "@/lib/portfolio-data";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 5, borderTop: "1px solid", borderColor: "divider" }}>
      <Box sx={{ maxWidth: 1152, mx: "auto", px: { xs: 2, sm: 3, lg: 4 }, textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          <SpaOutlinedIcon sx={{ fontSize: 18, color: "primary.main", opacity: 0.5 }} />
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {new Date().getFullYear()} {profileData.shortName}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary", opacity: 0.5, mt: 0.5, display: "block" }}>
          Building a sustainable future, one research project at a time.
        </Typography>
      </Box>
    </Box>
  );
}
