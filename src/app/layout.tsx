import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SidebarMobile from "@/components/sidebar-mobile";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iceflix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-950",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SidebarMobile />
          <section className="pt-12">{children}</section>
        </ThemeProvider>
      </body>
    </html>
  );
}
