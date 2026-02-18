"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Demo", href: "/" },
  { label: "Research", href: "/research" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center gap-2",
          "px-4 py-3",
          "bg-white/[0.03]",
          "backdrop-blur-xl",
          "border border-white/[0.06]",
          "rounded-full",
          "shadow-2xl shadow-black/40"
        )}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                isActive
                  ? "text-white bg-[#ff6b00]/20 border border-[#ff6b00]/50 shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                  : "text-neutral-400 hover:text-white hover:bg-white/[0.05] hover:border-b hover:border-[#ff6b00]/50"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
