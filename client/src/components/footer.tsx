import { profileData } from "@/lib/portfolio-data";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="w-4 h-4 text-primary/50" />
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {profileData.shortName}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-1">
          Building a sustainable future, one research project at a time.
        </p>
      </div>
    </footer>
  );
}
