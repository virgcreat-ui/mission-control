"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Team", href: "/", icon: "group" },
  { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { label: "Tasks", href: "/tasks", icon: "task_alt" },
  { label: "Pipeline", href: "/pipeline", icon: "monitoring" },
  { label: "Settings", href: "/system", icon: "settings" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[90%] max-w-sm">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Frosted glass background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />
        
        <div className="relative flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex items-center justify-center w-12 h-12 transition-all duration-300"
              >
                {isActive && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-accent shadow-[0_0_15px_rgba(88,166,255,0.8)] animate-fade-in" />
                )}
                
                <span
                  className={`material-symbols-outlined text-[24px] transition-all duration-300 ${
                    isActive ? "text-accent scale-110" : "text-text-tertiary opacity-70"
                  }`}
                >
                  {item.icon}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
