import { motion, useTransform, type MotionValue } from "framer-motion";
import Box from "@mui/material/Box";
import { profileData } from "@/lib/portfolio-data";

// A vertical route through the four research stations, living in the sticky
// Experience margin like a map in a book chapter. It fills with the same
// section progress that draws the career trail, so reading the chapter
// completes the journey.
const ROUTE = "M20 8 C 30 40, 10 66, 20 92 C 28 112, 12 150, 20 176 C 26 198, 14 228, 20 252";
const WAYPOINTS = [
  { y: 8, fraction: 0.02 },
  { y: 92, fraction: 0.34 },
  { y: 176, fraction: 0.66 },
  { y: 252, fraction: 0.97 },
];

export function JourneyMap({ progress, reducedMotion }: { progress: MotionValue<number>; reducedMotion: boolean }) {
  const glows = [
    useTransform(progress, [WAYPOINTS[0].fraction, WAYPOINTS[0].fraction + 0.04], [0.3, 1]),
    useTransform(progress, [WAYPOINTS[1].fraction - 0.04, WAYPOINTS[1].fraction], [0.3, 1]),
    useTransform(progress, [WAYPOINTS[2].fraction - 0.04, WAYPOINTS[2].fraction], [0.3, 1]),
    useTransform(progress, [WAYPOINTS[3].fraction - 0.04, WAYPOINTS[3].fraction], [0.3, 1]),
  ];

  return (
    <Box data-testid="journey-map" sx={{ display: { xs: "none", lg: "block" }, position: "relative", mt: 1, ml: "6px", height: 260 }}>
      <svg viewBox="0 0 40 260" width="40" height="260" style={{ display: "block", overflow: "visible" }} aria-hidden="true">
        <path d={ROUTE} fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 6" />
        <motion.path
          data-testid="journey-fill"
          d={ROUTE}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: reducedMotion ? 1 : progress }}
        />
        {WAYPOINTS.map((point, i) => (
          <motion.circle
            key={i}
            cx="20"
            cy={point.y}
            r="4"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            style={{ opacity: reducedMotion ? 1 : glows[i] }}
          />
        ))}
      </svg>
      {profileData.journey.map((stop, i) => (
        <motion.div
          key={stop.place}
          data-testid={`journey-label-${i}`}
          style={{
            position: "absolute",
            top: WAYPOINTS[i].y - 10,
            left: 44,
            lineHeight: 1.3,
            whiteSpace: "nowrap",
            opacity: reducedMotion ? 1 : glows[i],
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--primary))" }}>
            {stop.place}
          </span>
          <span style={{ display: "block", fontSize: "0.66rem", color: "hsl(var(--muted-foreground))" }}>
            {stop.years}
          </span>
        </motion.div>
      ))}
    </Box>
  );
}
