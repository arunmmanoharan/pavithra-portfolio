import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={heading}>New Contact Form Message</Heading>
          </Section>
          <Hr style={hr} />
          <Section style={contentSection}>
            <Text style={label}>From</Text>
            <Text style={value}>{name}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Section style={footerSection}>
            <Text style={footer}>
              This message was sent via your portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  backgroundColor: "#f6f9f6",
  fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "40px auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid #e0e8e0",
};

const headerSection: React.CSSProperties = {
  padding: "32px 32px 16px",
};

const heading: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#1a3a2a",
  margin: "0",
};

const hr: React.CSSProperties = {
  borderColor: "#e0e8e0",
  margin: "0 32px",
};

const contentSection: React.CSSProperties = {
  padding: "24px 32px",
};

const label: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6b8a6b",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "2px",
  marginTop: "16px",
};

const value: React.CSSProperties = {
  fontSize: "15px",
  color: "#1a3a2a",
  marginTop: "0",
  marginBottom: "0",
};

const messageText: React.CSSProperties = {
  fontSize: "15px",
  color: "#1a3a2a",
  lineHeight: "1.6",
  marginTop: "0",
  whiteSpace: "pre-wrap" as const,
};

const footerSection: React.CSSProperties = {
  padding: "16px 32px 24px",
};

const footer: React.CSSProperties = {
  fontSize: "12px",
  color: "#9ab09a",
  margin: "0",
};
