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
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="relative">
        {/* Frosted glass background */}
        <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-2xl border-t border-white/[0.06]" />
        <div className="relative flex items-stretch justify-around px-2 pb-safe pt-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-xl transition-all duration-200 min-w-0 ${
                  isActive
                    ? "text-accent"
                    : "text-text-tertiary active:text-text-secondary"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span className="text-[9px] font-bold tracking-wide uppercase">
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-1 h-0.5 w-5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
