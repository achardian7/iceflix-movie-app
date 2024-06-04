import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SidebarMobile from "@/components/sidebar-mobile";
import QueryProvider from "@/components/providers/query-provider";
import { cn } from "@/utils/cn";

const font = Open_Sans({ subsets: ["latin"] });

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
      <body className={cn(font.className, "bg-gray-50 dark:bg-[#111]")}>
        <QueryProvider>
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
        </QueryProvider>
      </body>
    </html>
  );
}
