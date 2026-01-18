"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div
          className={cn(
            "max-w-7xl mx-auto px-6 py-4",
            "bg-white/[0.03]",
            "backdrop-blur-xl",
            "border border-white/[0.06]",
            "rounded-2xl",
            "shadow-2xl shadow-black/40"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <span className="text-black font-bold text-lg">AR</span>
                </div>
              </div>
              <span className="text-xl font-semibold text-white tracking-tight">
                NexusAR
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                type="button"
                className={cn(
                  "px-6 py-2.5 rounded-xl",
                  "bg-white",
                  "text-black font-medium text-sm",
                  "hover:bg-neutral-200",
                  "transition-all duration-300"
                )}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/[0.06]">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  className={cn(
                    "mt-2 px-6 py-3 rounded-xl",
                    "bg-white",
                    "text-black font-medium"
                  )}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
