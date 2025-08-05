"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Palette, Brush } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "INICIO" },
    { href: "/colaboraciones", label: "COLABORACIONES" },
    { href: "/galeria", label: "GALERÍA" },
    { href: "/sobre-mi", label: "SOBRE MÍ" },
    { href: "/servicios", label: "SERVICIOS" },
    { href: "/vision", label: "MISIÓN Y VISIÓN" },
    { href: "/contacto", label: "CONTACTO" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-electric-blue/30 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-electric-blue hover:text-electric-blue-light transition-colors font-typewriter"
          >
            <div className="relative">
              <Palette className="w-8 h-8 text-electric-blue" />
              <Brush className="w-4 h-4 absolute -bottom-1 -right-1 text-electric-red" />
            </div>
            <span>BERMÚDEZ.ART</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-electric-blue-light transition-colors px-3 py-2 rounded-md font-typewriter text-sm tracking-wider ${
                  pathname === item.href ? "text-electric-blue bg-electric-blue/10" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:text-electric-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-electric-blue/30">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-electric-blue-light transition-colors px-3 py-2 rounded-md font-typewriter text-sm tracking-wider ${
                    pathname === item.href ? "text-electric-blue bg-electric-blue/10" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
