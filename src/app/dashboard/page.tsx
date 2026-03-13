"use client";

import React from "react";
import AgentCircles from "@/components/AgentCircles";
import { useMissionControlState } from "@/lib/useMissionControlState";
import type { MCSeverity } from "@/types/missionControl";

function fmtMoney(value: number, currency: string) {
  try {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
}

export default function DashboardPage() {
  const mc = useMissionControlState(5000);

  const invested = mc.status === "ready" ? mc.data.kpis.invested : null;
  const available = mc.status === "ready" ? mc.data.kpis.available : null;
  const projectedProfit = mc.status === "ready" ? mc.data.kpis.projectedProfit : null;

  const streams = mc.status === "ready" ? mc.data.streams : null;
  const attention = mc.status === "ready" ? mc.data.attention : null;
  const agents = mc.status === "ready" ? mc.data.agents : undefined;

  return (
    <div className="flex flex-col gap-6 lg:gap-8 animate-fade-in max-w-7xl mx-auto lg:p-6">
      <div className="flex flex-col gap-1 border-b border-white/5 pb-6">
        <h2 className="text-2xl lg:text-4xl font-black text-white tracking-[0.2em] uppercase">
          System Overview
        </h2>
        <p className="text-xs lg:text-sm text-text-tertiary font-medium">
          {mc.status === "error"
            ? "State feed offline — showing last known defaults."
            : mc.status === "loading"
              ? "Loading state feed…"
              : `Live feed updated: ${new Date(mc.data.lastUpdated).toLocaleString("fr-FR")}`}
        </p>
        {mc.status === "error" ? (
          <p className="text-[10px] text-error font-semibold mt-2 break-words">
            {mc.error}
          </p>
        ) : null}
      </div>

      {/* TOP ROW — 3 big KPI cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <KPICard
          label="Invested"
          value={invested ? fmtMoney(invested.value, invested.currency) : "€—"}
          trend=""
          icon="account_balance_wallet"
          color="warning"
        />
        <KPICard
          label="Projected Profit"
          value={projectedProfit ? fmtMoney(projectedProfit.value, projectedProfit.currency) : "€—"}
          trend=""
          icon="trending_up"
          color="success"
        />
        <KPICard
          label="Available"
          value={available ? fmtMoney(available.value, available.currency) : "€—"}
          trend=""
          icon="savings"
          color="accent"
        />
      </div>

      {/* MIDDLE — Revenue Streams section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="glass-card p-5 lg:p-8 flex flex-col gap-6 lg:gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
          <div className="flex items-center justify-between relative z-10">
            <h3 className="text-base lg:text-xl font-bold text-text-primary flex items-center gap-2 lg:gap-3">
              <span className="material-symbols-outlined text-accent">monitoring</span>
              Revenue Streams
            </h3>
            <button className="text-[10px] font-black tracking-widest text-accent hover:text-white border border-accent/20 hover:border-accent/50 px-3 py-1.5 rounded-full transition-all uppercase">
              View Analytics
            </button>
          </div>

          <div className="flex flex-col gap-8 relative z-10">
            {(streams || []).map((s) => (
              <ProgressBar
                key={s.id}
                label={s.label}
                status={s.status}
                progress={s.progress}
                color={s.color}
                icon={s.icon}
              />
            ))}

            {!streams?.length ? (
              <div className="text-xs text-text-tertiary">
                No stream data yet.
              </div>
            ) : null}
          </div>
        </div>

        {/* BOTTOM — 'Needs Your Attention' card */}
        <div className="glass-card p-5 lg:p-8 flex flex-col gap-4 lg:gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl -mr-16 -mt-16" />
          <h3 className="text-base lg:text-xl font-bold text-text-primary flex items-center gap-2 lg:gap-3 relative z-10">
            <span className="material-symbols-outlined text-error">notification_important</span>
            Needs Your Attention
          </h3>
          <div className="flex flex-col gap-2 relative z-10">
            {(attention || []).map((a) => (
              <AttentionItem
                key={a.id}
                color={a.severity}
                icon={a.icon}
                title={a.title}
                subtitle={a.subtitle}
              />
            ))}

            {!attention?.length ? (
              <div className="text-xs text-text-tertiary">No alerts.</div>
            ) : null}
          </div>
          <div className="mt-auto pt-6 border-t border-border relative z-10">
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span>
              State source: OpenClaw workspace
            </p>
          </div>
        </div>
      </div>

      {/* Active Agents status strip */}
      <div className="glass-card p-3 lg:p-4 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">
            Active Agents
          </span>
        </div>
        <AgentCircles agents={agents} />
      </div>
    </div>
  );
}

function KPICard({
  label,
  value,
  trend,
  icon,
  color,
}: {
  label: string;
  value: string;
  trend: string;
  icon: string;
  color: "warning" | "success" | "accent";
}) {
  const colorMap = {
    warning: "text-warning bg-warning/5",
    success: "text-success bg-success/5",
    accent: "text-accent bg-accent/5",
  };

  return (
    <div className="glass-card glass-card-hover p-5 lg:p-8 flex flex-col gap-3 lg:gap-4 relative overflow-hidden group">
      <div
        className={`absolute top-0 right-0 w-24 h-24 blur-2xl -mr-8 -mt-8 opacity-20 group-hover:opacity-40 transition-opacity ${colorMap[color]}`}
      />
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black tracking-widest text-text-tertiary uppercase">
          {label}
        </span>
        <span className={`material-symbols-outlined ${colorMap[color].split(" ")[0]}`}>
          {icon}
        </span>
      </div>
      <div className="flex items-baseline justify-between relative z-10">
        <p className="text-4xl lg:text-5xl font-black text-text-primary tracking-tighter">
          {value}
        </p>
        {trend ? (
          <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border text-text-tertiary border-border bg-white/0">
            {trend}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ProgressBar({
  label,
  status,
  progress,
  color,
  icon,
}: {
  label: string;
  status: string;
  progress: number;
  color: Exclude<MCSeverity, "error">;
  icon: string;
}) {
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
            <span className="text-[10px] text-text-tertiary font-medium">
              {status}
            </span>
          </div>
        </div>
        <span className={`text-xs font-black ${colorMap[color].replace("bg-", "text-")}`}>
          {progress}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-bg-primary rounded-full overflow-hidden border border-border">
        <div
          className={`h-full ${colorMap[color]} transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
          style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
        />
      </div>
    </div>
  );
}

function AttentionItem({
  color,
  icon,
  title,
  subtitle,
}: {
  color: MCSeverity;
  icon: string;
  title: string;
  subtitle: string;
}) {
  const colorMap = {
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    error: "text-error bg-error/10",
    accent: "text-accent bg-accent/10",
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-border">
      <div className="flex items-center gap-4">
        <div
          className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${colorMap[color]}`}
        >
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
            {title}
          </span>
          <span className="text-xs text-text-tertiary font-medium">{subtitle}</span>
        </div>
      </div>
      <div
        className={`h-2 w-2 rounded-full shrink-0 ${colorMap[color]
          .split(" ")[1]
          .replace("/10", "")} shadow-[0_0_8px_currentColor]`}
      />
    </div>
  );
}
