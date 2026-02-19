import { profileData } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {profileData.shortName}. Built with care.
        </p>
      </div>
    </footer>
  );
}
