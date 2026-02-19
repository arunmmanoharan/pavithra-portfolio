import type { Express } from "express";
import { type Server } from "http";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { ContactEmail } from "./emails/contact-email";
import { insertContactMessageSchema } from "@shared/schema";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "pavithra.s@columbia.edu";

if (!RESEND_API_KEY) {
  console.warn("Warning: RESEND_API_KEY is not set. Contact form emails will not be sent.");
}

const resend = new Resend(RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    if (!RESEND_API_KEY) {
      return res.status(503).json({ error: "Email service is not configured." });
    }

    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const { name, email, message } = parsed.data;

      const emailHtml = await render(ContactEmail({ name, email, message }));

      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        replyTo: email,
        subject: `Portfolio Contact from ${name}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email." });
      }

      return res.json({ success: true });
    } catch (err) {
      console.error("Contact route error:", err);
      return res.status(500).json({ error: "Failed to send email." });
    }
  });

  return httpServer;
}
