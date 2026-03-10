"use client";

import React from "react";
import {
  Bot,
  ShieldCheck,
  Mail,
  Clock,
  Terminal,
  CreditCard,
} from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  type: "human" | "agent";
  model?: string;
  subscription?: string;
  status: "online" | "idle" | "offline";
  bio: string;
  emoji: string;
  accentColor: string;
}

const team: ProfileCardProps[] = [
  {
    name: "Virgil Reinhard",
    role: "Chief Executive Officer",
    type: "human",
    status: "online",
    emoji: "🏢",
    accentColor: "#D29922",
    bio: "Founder and primary operator. Coordinates the neural architecture of the company and oversees strategic directives.",
  },
  {
    name: "Cleo",
    role: "Chief of Staff",
    type: "agent",
    model: "Opus 4.6 / Anthropic",
    subscription: "Anthropic Pro Tier 5",
    status: "online",
    emoji: "🧠",
    accentColor: "#58A6FF",
    bio: "Master orchestrator and primary agent interface. Handles all critical decision-making processes and manages the broader agent team.",
  },
  {
    name: "Hunter",
    role: "Assistant",
    type: "agent",
    model: "Sonnet 4.6 / Anthropic",
    subscription: "Anthropic Pro Tier 4",
    status: "online",
    emoji: "🎯",
    accentColor: "#F85149",
    bio: "Specialized in rapid execution and tactical task management. Supports the Chief of Staff in daily operations and CEO directives.",
  },
  {
    name: "Echo",
    role: "Engineer",
    type: "agent",
    model: "ChatGPT 5.2 + Codex / OpenAI",
    subscription: "OpenAI ChatGPT Plus Enterprise",
    status: "idle",
    emoji: "⚙️",
    accentColor: "#3FB950",
    bio: "Technical lead responsible for codebase maintenance, system architecture, and complex engineering solutions.",
  },
  {
    name: "Omega",
    role: "Operations",
    type: "agent",
    model: "Gemini Pro 3.1 / Google API",
    subscription: "Google Gemini Advanced",
    status: "online",
    emoji: "🔧",
    accentColor: "#D29922",
    bio: "Focuses on infrastructure stability, resource allocation, and large-scale data processing across the OS.",
  },
  {
    name: "Flash",
    role: "Andrea Ops",
    type: "agent",
    model: "Gemini Flash / Google",
    subscription: "Google API Tier 1",
    status: "offline",
    emoji: "🧡",
    accentColor: "#F78166",
    bio: "High-speed utility bot for specialized operational workflows and rapid response tasks.",
  },
];

function ProfileCard({
  name,
  role,
  type,
  model,
  subscription,
  status,
  bio,
  emoji,
  accentColor,
}: ProfileCardProps) {
  const statusConfig = {
    online: {
      label: "Online",
      dotClass: "bg-success",
      glowClass: "status-online",
      glowColor: "rgba(63,185,80,0.5)",
    },
    idle: {
      label: "Idle",
      dotClass: "bg-warning",
      glowClass: "",
      glowColor: "rgba(210,153,34,0.5)",
    },
    offline: {
      label: "Offline",
      dotClass: "bg-idle",
      glowClass: "",
      glowColor: "rgba(139,148,158,0.3)",
    },
  };

  const s = statusConfig[status];

  return (
    <div
      className="agent-card-glow glass-card glass-card-hover p-5 sm:p-6 flex flex-col gap-5 group"
      style={{ "--glow-color": accentColor + "66" } as React.CSSProperties}
    >
      {/* Header: Avatar + Badge */}
      <div className="flex items-start justify-between">
        <div className="relative">
          <div
            className="h-16 w-16 sm:h-18 sm:w-18 rounded-2xl overflow-hidden border-2 border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-300 bg-bg-card flex items-center justify-center text-3xl sm:text-4xl shadow-inner"
            style={{
              boxShadow: `inset 0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 ${accentColor}00`,
            }}
          >
            {emoji}
          </div>
          <div
            className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-[3px] border-[#161B22] ${s.dotClass} ${s.glowClass}`}
            style={{ "--pulse-color": s.glowColor } as React.CSSProperties}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border backdrop-blur-sm"
            style={{
              color: status === "online" ? "#3FB950" : status === "idle" ? "#D29922" : "#6E7681",
              borderColor: status === "online" ? "rgba(63,185,80,0.2)" : status === "idle" ? "rgba(210,153,34,0.2)" : "rgba(110,118,129,0.2)",
              background: status === "online" ? "rgba(63,185,80,0.06)" : status === "idle" ? "rgba(210,153,34,0.06)" : "rgba(110,118,129,0.06)",
            }}
          >
            <div className={`h-1.5 w-1.5 rounded-full ${s.dotClass}`} />
            {s.label}
          </div>
          {type === "agent" ? (
            <span className="bg-accent/8 text-accent text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 border border-accent/15">
              <Bot size={10} /> AI
            </span>
          ) : (
            <span className="bg-warning/8 text-warning text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 border border-warning/15">
              <ShieldCheck size={10} /> CEO
            </span>
          )}
        </div>
      </div>

      {/* Name + Role */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight group-hover:text-white transition-colors">
          {name}
        </h3>
        <p
          className="text-xs font-semibold tracking-wide uppercase"
          style={{ color: accentColor }}
        >
          {role}
        </p>
      </div>

      {/* Model + Subscription */}
      {(model || subscription) && (
        <div className="space-y-3">
          {model && (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-accent shrink-0">
                <Terminal size={14} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] uppercase font-bold text-text-tertiary leading-none mb-0.5 tracking-wider">
                  Model
                </span>
                <span className="text-xs text-text-secondary font-mono truncate">
                  {model}
                </span>
              </div>
            </div>
          )}
          {subscription && (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-success shrink-0">
                <CreditCard size={14} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] uppercase font-bold text-text-tertiary leading-none mb-0.5 tracking-wider">
                  Tier
                </span>
                <span className="text-xs text-text-secondary truncate">
                  {subscription}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bio */}
      <p className="text-[13px] text-text-secondary/80 leading-relaxed border-t border-white/[0.04] pt-4">
        &ldquo;{bio}&rdquo;
      </p>

      {/* Action buttons */}
      <div className="flex gap-2 mt-auto pt-4 border-t border-white/[0.04]">
        <button className="flex-1 py-2.5 px-3 bg-white/[0.03] border border-white/[0.06] hover:border-accent/40 hover:text-accent hover:bg-accent/5 rounded-xl text-[10px] font-bold transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-widest">
          <Mail size={13} /> Message
        </button>
        <button className="flex-1 py-2.5 px-3 bg-white/[0.03] border border-white/[0.06] hover:border-accent/40 hover:text-accent hover:bg-accent/5 rounded-xl text-[10px] font-bold transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-widest">
          <Clock size={13} /> Activity
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const onlineCount = team.filter((t) => t.status === "online").length;

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto w-full">
      {/* Subtle gradient overlay for depth */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent z-0" />

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Team
          </h2>
          <p className="text-xs text-text-tertiary font-medium">
            Personnel & Autonomous Agents
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/8 border border-success/15">
          <div className="h-2 w-2 rounded-full bg-success status-online" style={{ "--pulse-color": "rgba(63,185,80,0.5)" } as React.CSSProperties} />
          <span className="text-[10px] font-bold text-success uppercase tracking-widest">
            {onlineCount}/{team.length} Online
          </span>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 relative z-10 stagger-children">
        {team.map((person) => (
          <ProfileCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
}
