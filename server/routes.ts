import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "All fields are required" });
      }
      await storage.createContactMessage(parsed.data);
      return res.json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Failed to send message" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
