import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export function PublicationsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="publications" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-7 h-7 text-primary" />
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-publications-title"
            >
              Publications
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="space-y-4">
          {profileData.publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="p-5 bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50 hover-elevate">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mt-1">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base font-semibold text-foreground mb-1 leading-snug"
                      data-testid={`text-pub-title-${i}`}
                    >
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.authors}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {pub.journal}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {pub.year}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground mt-6 text-center"
        >
          Plus 4 additional papers submitted or in progress
        </motion.p>
      </div>
    </section>
  );
}
