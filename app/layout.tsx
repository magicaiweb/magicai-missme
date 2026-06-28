import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MissMe | AI Lost & Found",
  description:
    "Bilingual product preview for MissMe, an AI lost-and-found platform for Arabic-speaking MENA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
