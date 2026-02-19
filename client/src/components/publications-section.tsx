import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, ExternalLink } from "lucide-react";
import { useState } from "react";

function PublicationCard({ pub, index, inView }: { pub: typeof profileData.publications[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 * index, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className="p-5 glass-card glass-card-glow overflow-visible transition-all duration-300 group">
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center mt-0.5"
          >
            <FileText className="w-5 h-5 text-primary" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-base font-semibold text-foreground mb-1.5 leading-snug tracking-tight transition-colors duration-300 group-hover:text-primary"
              data-testid={`text-pub-title-${index}`}
            >
              {pub.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2.5">
              {pub.authors}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                {pub.journal}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {pub.year}
              </Badge>
              <motion.div
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function PublicationsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="publications" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold gradient-text"
              data-testid="text-publications-title"
            >
              Publications
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full ml-[52px]" />
        </motion.div>

        <div className="space-y-4">
          {profileData.publications.map((pub, i) => (
            <PublicationCard key={i} pub={pub} index={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground mt-8 text-center"
        >
          Plus 4 additional papers submitted or in progress
        </motion.p>
      </div>
    </section>
  );
}
