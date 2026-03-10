import React from "react";
import AgentCircles from "@/components/AgentCircles";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-black text-text-primary tracking-tight">System Overview</h2>
        <p className="text-sm text-text-tertiary">All sectors operational. 4 active agent clusters reported.</p>
      </div>

      {/* TOP ROW — 3 big KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          label="Invested" 
          value="€798" 
          trend="+12%"
          icon="account_balance_wallet"
          color="warning"
        />
        <KPICard 
          label="Projected Profit" 
          value="€420" 
          trend="+5.4%"
          icon="trending_up"
          color="success"
        />
        <KPICard 
          label="Available" 
          value="€702" 
          trend="-2%"
          icon="ads_click"
          color="accent"
        />
      </div>

      {/* MIDDLE — Revenue Streams section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 flex flex-col gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
          <div className="flex items-center justify-between relative z-10">
            <h3 className="text-xl font-bold text-text-primary flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">monitoring</span>
              Revenue Streams
            </h3>
            <button className="text-[10px] font-black tracking-widest text-accent hover:text-white border border-accent/20 hover:border-accent/50 px-3 py-1.5 rounded-full transition-all uppercase">
              View Analytics
            </button>
          </div>
          
          <div className="flex flex-col gap-8 relative z-10">
            <ProgressBar 
              label="Amazon FBA" 
              status="Order en route — delivery ~March 31"
              progress={30}
              color="warning"
              icon="inventory_2"
            />
            <ProgressBar 
              label="ComeUp" 
              status="5 services live — awaiting first order"
              progress={15}
              color="accent"
              icon="shopping_cart"
            />
            <ProgressBar 
              label="KDP Books" 
              status="2 published — tracking sales"
              progress={5}
              color="success"
              icon="book"
            />
          </div>
        </div>

        {/* BOTTOM — 'Needs Your Attention' card */}
        <div className="glass-card p-8 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl -mr-16 -mt-16" />
          <h3 className="text-xl font-bold text-text-primary flex items-center gap-3 relative z-10">
            <span className="material-symbols-outlined text-error">notification_important</span>
            Needs Your Attention
          </h3>
          <div className="flex flex-col gap-2 relative z-10">
            <AttentionItem 
              color="error" 
              icon="emergency_home"
              title="Pipeline Blockage" 
              subtitle="3 approvals pending 48h+" 
            />
            <AttentionItem 
              color="warning" 
              icon="inventory"
              title="Inventory Refill" 
              subtitle="2 items below threshold" 
            />
            <AttentionItem 
              color="accent" 
              icon="psychology"
              title="New Memory Log" 
              subtitle="Uncategorized data from Cleo" 
            />
          </div>
          <div className="mt-auto pt-6 border-t border-border relative z-10">
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span> Last system audit: 14:20 Today
            </p>
          </div>
        </div>
      </div>

      {/* Active Agents status strip */}
      <div className="glass-card p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Active Agents</span>
        </div>
        <AgentCircles />
      </div>
    </div>
  );
}

function KPICard({ label, value, trend, icon, color }: { label: string, value: string, trend: string, icon: string, color: 'warning' | 'success' | 'accent' }) {
  const colorMap = {
    warning: "text-warning bg-warning/5",
    success: "text-success bg-success/5",
    accent: "text-accent bg-accent/5",
  };

  return (
    <div className="glass-card glass-card-hover p-8 flex flex-col gap-4 relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-24 h-24 blur-2xl -mr-8 -mt-8 opacity-20 group-hover:opacity-40 transition-opacity ${colorMap[color]}`} />
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black tracking-widest text-text-tertiary uppercase">{label}</span>
        <span className={`material-symbols-outlined ${colorMap[color].split(' ')[0]}`}>{icon}</span>
      </div>
      <div className="flex items-baseline justify-between relative z-10">
        <p className="text-5xl font-black text-text-primary tracking-tighter">{value}</p>
        <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${color === 'success' || (color === 'warning' && trend.startsWith('+')) ? 'text-success border-success/20 bg-success/5' : 'text-error border-error/20 bg-error/5'}`}>
          <span className="material-symbols-outlined text-xs">{trend.startsWith('+') ? 'trending_up' : 'trending_down'}</span>
          {trend}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, status, progress, color, icon }: { label: string, status: string, progress: number, color: 'warning' | 'success' | 'accent', icon: string }) {
  const colorMap = {
    warning: "bg-warning",
    success: "bg-success",
    accent: "bg-accent",
  };

  return (
    <div className="flex flex-col gap-3 group/progress">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-bg-primary border border-border text-text-secondary group-hover/progress:text-text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">{icon}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text-primary">{label}</span>
            <span className="text-[10px] text-text-tertiary font-medium">{status}</span>
          </div>
        </div>
        <span className={`text-xs font-black ${colorMap[color].replace('bg-', 'text-')}`}>{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-bg-primary rounded-full overflow-hidden border border-border">
        <div 
          className={`h-full ${colorMap[color]} transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.5)]`} 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
}

function AttentionItem({ color, icon, title, subtitle }: { color: 'success' | 'warning' | 'error' | 'accent', icon: string, title: string, subtitle: string }) {
  const colorMap = {
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    error: "text-error bg-error/10",
    accent: "text-accent bg-accent/10",
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-border">
      <div className="flex items-center gap-4">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">{title}</span>
          <span className="text-xs text-text-tertiary font-medium">{subtitle}</span>
        </div>
      </div>
      <div className={`h-2 w-2 rounded-full ${colorMap[color].split(' ')[1].replace('/10', '')} shadow-[0_0_8px_currentColor]`} />
    </div>
  );
}
