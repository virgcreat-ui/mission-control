"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { label: "Team", href: "/", icon: "group" },
  { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { label: "Tasks", href: "/tasks", icon: "task_alt" },
  { label: "Projects", href: "/projects", icon: "folder" },
  { label: "Pipeline", href: "/pipeline", icon: "monitoring" },
  { label: "Approvals", href: "/approvals", icon: "verified_user" },
  { label: "Memory", href: "/memory", icon: "memory" },
  { label: "Settings", href: "/system", icon: "settings" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative hidden lg:flex flex-col border-r border-border bg-bg-primary transition-all duration-300 ease-in-out z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-24 justify-center px-6 border-b border-border">
        {!isCollapsed ? (
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-[0.2em] text-white uppercase">Mission Control</span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider">CEO Cockpit</span>
          </div>
        ) : (
          <div className="mx-auto h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-accent text-xl">rocket_launch</span>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all relative duration-200",
                isActive 
                  ? "bg-accent/10 text-accent" 
                  : "text-text-secondary hover:bg-bg-card hover:text-text-primary"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-accent rounded-r-full" />
              )}
              <span className={cn(
                "material-symbols-outlined text-xl transition-transform duration-200 group-hover:scale-110",
                isActive ? "text-accent" : "text-text-tertiary group-hover:text-text-primary"
              )}>
                {item.icon}
              </span>
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-xl transition-all",
          isCollapsed ? "justify-center" : "bg-bg-card/50"
        )}>
          <div className="relative h-9 w-9 flex-shrink-0">
            <img 
              src="/avatars/cleo.png" 
              alt="Virgil Reinhard" 
              className="h-full w-full rounded-lg object-cover border border-border"
            />
            <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-success border-2 border-bg-primary" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-text-primary truncate">Virgil Reinhard</span>
              <span className="text-[10px] text-text-tertiary font-medium truncate">CEO</span>
            </div>
          )}
          {!isCollapsed && (
            <button className="ml-auto text-text-tertiary hover:text-error transition-colors">
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

