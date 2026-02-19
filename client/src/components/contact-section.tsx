import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { profileData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const { ref, inView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const mutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({ title: "Message sent!", description: "Thank you for reaching out." });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via email directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: profileData.email, href: `mailto:${profileData.email}` },
    { icon: Phone, label: "Phone", value: profileData.phone, href: `tel:${profileData.phone}` },
    { icon: MapPin, label: "Location", value: profileData.location },
    { icon: SiLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profileData.linkedin },
  ];

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground"
              data-testid="text-contact-title"
            >
              Get in Touch
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full ml-[52px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Interested in collaboration, research opportunities, or just want to say hello?
              I'd love to hear from you. Let's work together to build a more sustainable future.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground"
                        data-testid={`link-contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 bg-card/60 dark:bg-card/60 backdrop-blur-sm border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    placeholder="Your name"
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    placeholder="your@email.com"
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                    placeholder="Your message..."
                    className="resize-none"
                    data-testid="input-contact-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                  data-testid="button-contact-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
