import type React from "react"
import { Work_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"
import { icons } from "lucide-react"

// Work Sans is a geometric sans-serif similar to TT Norms Pro
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

export const metadata = {
  title: "Bellapd",
  description:
    "Personal portfolio and blog for sharing research papers and projects",
  generator: "v0.dev",
  icons: {
    icon: "/bella_avatar.png",
    apple: "/bella_avatar.png",
    shortcut: "/bella_avatar.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background text-foreground font-work-sans", workSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
