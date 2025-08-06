import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Touseef's Portfolio",
  description: "Touseef's portfolio site, that shows his skills, experience, and personal projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider  attribute="class" defaultTheme='system' enableSystem>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
