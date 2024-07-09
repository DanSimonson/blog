import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mariposaweb blog",
  description: "JavaScript Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          <main className="max-w-2xl mx-auto px-2 py-5">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
