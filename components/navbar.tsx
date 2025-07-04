"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ]

  function toggleTheme() {
    if (theme === "dark" || (theme === "system" && resolvedTheme === "dark")) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-14 h-14 overflow-hidden rounded-full border border-black/10 dark:border-white/10 transition-transform group-hover:scale-110">
            <Image
              src="/bella_avatar.png"
              alt="Bellapd Logo"
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-10 relative">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm transition-colors uppercase tracking-widest py-1 px-2",
                pathname === item.path
                  ? "text-black dark:text-white"
                  : "text-muted-foreground hover:text-black dark:hover:text-white",
              )}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              {/* {pathname === item.path && (
                <div className="h-px w-full bg-black dark:bg-white absolute bottom-0 left-0"></div>
              )} */}
            </Link>
          ))}
          {/* {hoveredItem && hoveredItem !== pathname && (
            <div
              className="h-px bg-black/50 dark:bg-white/50 absolute bottom-0 left-0 transition-all duration-300"
              style={{
                width: "100%",
                transform: `translateX(${navItems.findIndex((item) => item.path === hoveredItem) * 100}%)`,
                opacity: 0.5,
              }}
            ></div>
          )} */}
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent transition-colors relative overflow-hidden"
            aria-label="Toggle theme"
          >
            {mounted ? (
              <>
                <Sun
                  className={cn(
                    "h-5 w-5 transition-all duration-500",
                    theme === "dark" ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0",
                  )}
                />
                <Moon
                  className={cn(
                    "h-5 w-5 absolute top-2 left-2 transition-all duration-500",
                    theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90",
                  )}
                />
              </>
            ) : (
              <span className="h-5 w-5 block bg-muted animate-pulse rounded-full"></span>
            )}
          </button>
          <button className="md:hidden ml-2 p-2 rounded-md hover:bg-accent">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
