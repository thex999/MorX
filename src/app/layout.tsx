import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MorX",
  description: "We help you figure out where to find your leads, how to engage with them, and how to approach each negotiation individually.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
