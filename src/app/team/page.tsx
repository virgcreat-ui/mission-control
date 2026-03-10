"use client";

import React from "react";
import { 
  User, 
  Bot, 
  ShieldCheck, 
  Mail, 
  Clock, 
  Terminal, 
  CreditCard,
  ChevronRight,
  Users
} from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  type: "human" | "agent";
  avatar: string;
  model?: string;
  subscription?: string;
  status: "online" | "idle" | "offline";
  bio: string;
  emoji: string;
}

const team: ProfileCardProps[] = [
  {
    name: "Virgil Reinhard",
    role: "Chief Executive Officer",
    type: "human",
    avatar: "/avatars/cleo.png",
    status: "online",
    emoji: "🏢",
    bio: "Founder and primary operator. Coordinates the neural architecture of the company and oversees strategic directives."
  },
  {
    name: "Cleo",
    role: "Chief of Staff",
    type: "agent",
    avatar: "/avatars/cleo.png",
    model: "Opus 4.6 / Anthropic",
    subscription: "Anthropic Pro Tier 5",
    status: "online",
    emoji: "🧠",
    bio: "Master orchestrator and primary agent interface. Handles all critical decision-making processes and manages the broader agent team."
  },
  {
    name: "Hunter",
    role: "Assistant",
    type: "agent",
    avatar: "/avatars/hunter.png",
    model: "Sonnet 4.6 / Anthropic",
    subscription: "Anthropic Pro Tier 4",
    status: "online",
    emoji: "🎯",
    bio: "Specialized in rapid execution and tactical task management. Supports the Chief of Staff in daily operations and CEO directives."
  },
  {
    name: "Echo",
    role: "Engineer",
    type: "agent",
    avatar: "/avatars/echo.png",
    model: "ChatGPT 5.2 + Codex / OpenAI",
    subscription: "OpenAI ChatGPT Plus Enterprise",
    status: "idle",
    emoji: "⚙️",
    bio: "Technical lead responsible for codebase maintenance, system architecture, and complex engineering solutions."
  },
  {
    name: "Omega",
    role: "Operations",
    type: "agent",
    avatar: "/avatars/omega.png",
    model: "Gemini Pro 3.1 / Google API",
    subscription: "Google Gemini Advanced",
    status: "online",
    emoji: "🔧",
    bio: "Focuses on infrastructure stability, resource allocation, and large-scale data processing across the OS."
  },
  {
    name: "Flash",
    role: "Andrea Ops",
    type: "agent",
    avatar: "/avatars/flash.png",
    model: "Gemini Flash / Google",
    subscription: "Google API Tier 1",
    status: "offline",
    emoji: "🧡",
    bio: "High-speed utility bot for specialized operational workflows and rapid response tasks."
  }
];

function ProfileCard({ name, role, type, avatar, model, subscription, status, bio, emoji }: ProfileCardProps) {
  const statusColors = {
    online: "bg-success shadow-[0_0_8px_rgba(63,185,80,0.6)]",
    idle: "bg-warning shadow-[0_0_8px_rgba(210,153,34,0.6)]",
    offline: "bg-idle shadow-[0_0_8px_rgba(139,148,158,0.6)]"
  };

  return (
    <div className="glass-card glass-card-hover p-6 flex flex-col gap-6 group border-gray-800/40">
      <div className="flex items-start justify-between">
        <div className="relative">
          <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-accent/50 transition-colors bg-bg-card flex items-center justify-center text-4xl shadow-inner">
            {emoji}
          </div>
          <div className={`absolute bottom-0.5 right-0.5 h-5 w-5 rounded-full border-4 border-[#161B22] ${statusColors[status]} ${status === 'online' ? 'animate-pulse' : ''}`} />
        </div>
        <div className="flex gap-2">
          {type === "agent" ? (
            <span className="bg-accent/10 text-accent text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 border border-accent/20">
              <Bot size={12} /> AGENT
            </span>
          ) : (
            <span className="bg-warning/10 text-warning text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 border border-warning/20">
              <ShieldCheck size={12} /> HUMAN
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-text-primary tracking-tight">{name}</h3>
        <p className="text-sm font-semibold text-accent tracking-wide uppercase">{role}</p>
      </div>

      <div className="space-y-4">
        {model && (
          <div className="flex items-center gap-3 text-text-tertiary">
            <div className="h-8 w-8 rounded-lg bg-[#161B22] border border-gray-800 flex items-center justify-center text-accent">
              <Terminal size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-text-tertiary leading-none mb-1 tracking-tighter">Architecture</span>
              <span className="text-sm text-text-secondary font-mono">{model}</span>
            </div>
          </div>
        )}
        {subscription && (
          <div className="flex items-center gap-3 text-text-tertiary">
            <div className="h-8 w-8 rounded-lg bg-[#161B22] border border-gray-800 flex items-center justify-center text-success">
              <CreditCard size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-text-tertiary leading-none mb-1 tracking-tighter">Service Level</span>
              <span className="text-sm text-text-secondary">{subscription}</span>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-text-secondary leading-relaxed border-t border-gray-800/50 pt-5 italic">
        "{bio}"
      </p>

      <div className="flex gap-2 mt-auto pt-6 border-t border-gray-800/30">
        <button className="flex-1 py-2.5 px-3 bg-bg-card-hover border border-gray-800 hover:border-accent/50 hover:text-accent rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
          <Mail size={14} /> Message
        </button>
        <button className="flex-1 py-2.5 px-3 bg-bg-card-hover border border-gray-800 hover:border-accent/50 hover:text-accent rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
          <Clock size={14} /> Task Log
        </button>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-10 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Users className="text-accent" size={24} />
            <h2 className="text-2xl font-bold text-text-primary tracking-tight">Team Directory</h2>
          </div>
          <p className="text-sm text-text-tertiary uppercase tracking-widest font-semibold">Personnel & Autonomous Agents</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] font-black text-success uppercase tracking-widest">5/6 Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((person) => (
          <ProfileCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
}
