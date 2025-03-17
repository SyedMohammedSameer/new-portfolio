import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Mohammed Sameer Syed - Machine Learning Engineer, Software Engineer, and AI Enthusiast",
  description:
    "Portfolio of Mohammed Sameer Syed, a Machine Learning Engineer, Software Engineer, and AI Enthusiast specializing in Machine Learning .",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
