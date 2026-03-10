"use client";

import React from "react";
import { 
  Settings, 
  Server, 
  Cpu, 
  HardDrive, 
  Activity, 
  Terminal, 
  Clock, 
  Shield, 
  RefreshCw,
  Database,
  Cloud,
  ChevronRight,
  Monitor
} from "lucide-react";

export default function SystemPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Settings className="text-accent" size={24} />
            <h2 className="text-2xl font-bold text-text-primary tracking-tight">System Configuration</h2>
          </div>
          <p className="text-sm text-text-tertiary">Infrastructure health, model orchestration, and environment variables.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-all shadow-[0_0_12px_rgba(88,166,255,0.4)]">
          <RefreshCw size={16} /> Reboot Systems
        </button>
      </div>

      {/* System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard label="CPU Usage" value="12%" icon={<Cpu size={18} />} color="success" />
        <StatusCard label="Memory Usage" value="4.2 / 16 GB" icon={<HardDrive size={18} />} color="success" />
        <StatusCard label="Network Load" value="2.4 MB/s" icon={<Activity size={18} />} color="accent" />
        <StatusCard label="System Uptime" value="142:12:05" icon={<Clock size={18} />} color="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Model Health */}
        <div className="glass-card p-6 flex flex-col gap-6 border-accent/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <Cloud size={20} className="text-accent" />
              Model Connectivity
            </h3>
            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-success/10 text-success uppercase">All APIs Operational</span>
          </div>
          <div className="flex flex-col gap-4">
            <ModelItem name="Anthropic Claude 3.5 Opus" latency="342ms" status="online" />
            <ModelItem name="OpenAI GPT-4o" latency="186ms" status="online" />
            <ModelItem name="Google Gemini 1.5 Pro" latency="512ms" status="online" />
            <ModelItem name="Anthropic Claude 3.5 Sonnet" latency="288ms" status="online" />
          </div>
        </div>

        {/* System Logs */}
        <div className="glass-card p-6 flex flex-col gap-6 border-warning/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <Terminal size={20} className="text-warning" />
              Live System Logs
            </h3>
            <button className="text-[10px] font-black text-text-tertiary hover:text-text-primary uppercase tracking-widest">Clear Logs</button>
          </div>
          <div className="bg-bg-primary/50 rounded-xl p-4 border border-gray-800 font-mono text-[11px] h-64 overflow-y-auto space-y-2">
            <LogEntry time="14:20:12" level="INFO" msg="System audit initiated by Cleo." />
            <LogEntry time="14:21:05" level="SUCCESS" msg="All revenue streams synchronized." />
            <LogEntry time="14:21:45" level="INFO" msg="Memory indexed (42 files, 128MB)." />
            <LogEntry time="14:22:10" level="WARN" msg="Latency spike detected in Google API (512ms)." />
            <LogEntry time="14:25:33" level="INFO" msg="Cron job: 'Daily Cleanup' completed successfully." />
            <LogEntry time="14:30:00" level="INFO" msg="Awaiting next scheduled heartbeat." />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: 'success' | 'warning' | 'accent' | 'error' }) {
  const colorMap = {
    success: "text-success bg-success/10 border-success/20",
    warning: "text-warning bg-warning/10 border-warning/20",
    accent: "text-accent bg-accent/10 border-accent/20",
    error: "text-error bg-error/10 border-error/20",
  };

  return (
    <div className={`glass-card p-4 flex items-center gap-4 border ${colorMap[color]}`}>
      <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">{label}</p>
        <p className="text-xl font-black text-text-primary">{value}</p>
      </div>
    </div>
  );
}

function ModelItem({ name, latency, status }: { name: string, latency: string, status: 'online' | 'offline' }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-800/30 last:border-0 group cursor-pointer hover:bg-white/5 px-2 -mx-2 rounded-md transition-colors">
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${status === 'online' ? 'bg-success shadow-[0_0_8px_rgba(63,185,80,0.6)] animate-pulse' : 'bg-idle'}`} />
        <span className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">{name}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono text-text-tertiary">{latency}</span>
        <button className="p-1 rounded bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
          <Settings size={12} className="text-text-tertiary" />
        </button>
      </div>
    </div>
  );
}

function LogEntry({ time, level, msg }: { time: string, level: string, msg: string }) {
  const levelColors: Record<string, string> = {
    INFO: 'text-accent',
    SUCCESS: 'text-success',
    WARN: 'text-warning',
    ERROR: 'text-error',
  };

  return (
    <div className="flex gap-3 leading-tight border-b border-gray-800/20 pb-1">
      <span className="text-text-tertiary flex-shrink-0">[{time}]</span>
      <span className={`font-black flex-shrink-0 ${levelColors[level]}`}>{level}</span>
      <span className="text-text-secondary">{msg}</span>
    </div>
  );
}
