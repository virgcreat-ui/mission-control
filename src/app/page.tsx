"use client";

import React from "react";
import {
  Bot,
  ShieldCheck,
  Mail,
  Clock,
  Terminal,
  CreditCard,
  Zap,
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
  activeMission?: string;
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
    activeMission: "Optimizing supply chain logic for Q3",
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
    activeMission: "Processing urgent market intelligence",
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
    activeMission: "Refining vector database indexing",
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
  activeMission,
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
      className="agent-card-glow glass-card p-5 sm:p-6 flex flex-col gap-5 group hover:border-white/20 transition-all duration-500"
      style={{ 
        "--glow-color": accentColor + "33",
        boxShadow: `0 10px 30px -15px ${accentColor}33`
      } as React.CSSProperties}
    >
      {/* Header: Avatar + Badge */}
      <div className="flex items-start justify-between">
        <div className="relative">
          <div
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border border-white/[0.08] group-hover:border-white/[0.2] transition-all duration-500 bg-black flex items-center justify-center text-3xl sm:text-4xl shadow-2xl"
          >
            {emoji}
          </div>
          <div
            className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-[3px] border-[#0D1117] ${s.dotClass} ${s.glowClass} transition-transform duration-500 group-hover:scale-110`}
            style={{ "--pulse-color": s.glowColor } as React.CSSProperties}
          />
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md"
            style={{
              color: status === "online" ? "#3FB950" : status === "idle" ? "#D29922" : "#6E7681",
              borderColor: status === "online" ? "rgba(63,185,80,0.2)" : status === "idle" ? "rgba(210,153,34,0.2)" : "rgba(110,118,129,0.2)",
              background: status === "online" ? "rgba(63,185,80,0.1)" : status === "idle" ? "rgba(210,153,34,0.1)" : "rgba(110,118,129,0.1)",
            }}
          >
            {s.label}
          </div>
          {type === "agent" ? (
            <span className="bg-accent/10 text-accent text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-[0.15em] flex items-center gap-1.5 border border-accent/20">
              <Bot size={12} /> Agent
            </span>
          ) : (
            <span className="bg-warning/10 text-warning text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-[0.15em] flex items-center gap-1.5 border border-warning/20">
              <ShieldCheck size={12} /> Human
            </span>
          )}
        </div>
      </div>

      {/* Name + Role */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
          {name}
        </h3>
        <p
          className="text-[10px] font-black tracking-[0.2em] uppercase opacity-70"
          style={{ color: accentColor }}
        >
          {role}
        </p>
      </div>

      {/* Active Mission Tag */}
      {activeMission && (
        <div className="px-4 py-3 rounded-xl bg-accent/5 border border-accent/10 flex items-start gap-3 group/mission hover:bg-accent/10 transition-colors duration-300">
          <Zap size={14} className="text-accent shrink-0 mt-0.5 animate-pulse" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-black uppercase tracking-widest text-accent/60">Active Mission</span>
            <span className="text-xs text-text-primary font-medium leading-relaxed">{activeMission}</span>
          </div>
        </div>
      )}

      {/* Model + Subscription */}
      {(model || subscription) && (
        <div className="grid grid-cols-1 gap-3">
          {model && (
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Terminal size={14} className="text-text-tertiary" />
              <div className="flex flex-col min-w-0">
                <span className="text-[8px] uppercase font-black text-text-tertiary tracking-widest">
                  Model
                </span>
                <span className="text-[11px] text-text-secondary font-mono truncate">
                  {model}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bio */}
      <p className="text-[13px] text-text-secondary leading-relaxed italic opacity-80 border-l-2 border-white/5 pl-4 py-1">
        &ldquo;{bio}&rdquo;
      </p>

      {/* Action buttons */}
      <div className="flex gap-2 mt-auto pt-2">
        <button className="flex-1 py-3 px-4 bg-white/[0.03] border border-white/[0.08] hover:border-accent/50 hover:bg-accent/10 hover:text-white rounded-xl text-[10px] font-black transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
          <Mail size={14} /> Contact
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const onlineCount = team.filter((t) => t.status === "online").length;

  return (
    <div className="flex flex-col gap-10 animate-fade-in max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10 border-b border-white/5 pb-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
             <div className="h-1 w-12 bg-accent rounded-full" />
             <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">Strategic Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[0.2em] uppercase">
            Agent Status
          </h2>
          <p className="text-sm text-text-tertiary font-medium tracking-wide">
            Monitoring {team.length} tactical units across the neural network.
          </p>
        </div>
        
        <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-text-tertiary uppercase tracking-widest leading-none mb-1">Operational</span>
            <span className="text-xl font-black text-success leading-none">{onlineCount}/{team.length}</span>
          </div>
          <div className="h-10 w-[1px] bg-white/10" />
          <div className="h-3 w-3 rounded-full bg-success status-online" style={{ "--pulse-color": "rgba(63,185,80,0.5)" } as React.CSSProperties} />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 stagger-children">
        {team.map((person) => (
          <ProfileCard key={person.name} {...person} />
        ))}
      </div>

      {/* Background Decorative Element */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}
