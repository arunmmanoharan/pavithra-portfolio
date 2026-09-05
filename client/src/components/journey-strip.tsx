import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { profileData } from "@/lib/portfolio-data";

// Compact, static journey markers for viewports where the sticky journey map
// is hidden. Plain text, no animation: contextual, not spectacular.
export function JourneyStrip() {
  return (
    <Box
      data-testid="journey-strip"
      sx={{
        display: { xs: "flex", lg: "none" },
        flexWrap: "wrap",
        alignItems: "baseline",
        columnGap: 1,
        rowGap: 0.5,
        mb: 4,
      }}
    >
      {profileData.journey.map((stop, i) => (
        <Box key={stop.place} sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
          {i > 0 && (
            <Typography component="span" aria-hidden="true" sx={{ color: "text.secondary", opacity: 0.5, fontSize: "0.75rem" }}>
              &rarr;
            </Typography>
          )}
          <Typography component="span" sx={{ fontSize: "0.75rem", fontWeight: 600, color: "primary.main", whiteSpace: "nowrap" }}>
            {stop.place}
          </Typography>
          <Typography component="span" sx={{ fontSize: "0.7rem", color: "text.secondary", whiteSpace: "nowrap" }}>
            {stop.years}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
