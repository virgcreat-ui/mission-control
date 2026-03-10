"use client";

import React, { useState } from "react";

const tabs = ["ALL PLATFORMS", "AMAZON FBA", "COMEUP SERVICES", "PUBLISHED BOOKS"];

export default function PipelinePage() {
  const [activeTab, setActiveTab] = useState("ALL PLATFORMS");

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-black text-text-primary tracking-tight">Revenue Pipeline</h2>
          <p className="text-sm text-text-tertiary">Global logistics tracking and platform revenue distribution.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary text-lg">search</span>
            <input 
              type="text" 
              placeholder="Track shipment ID..." 
              className="bg-bg-card border border-border rounded-full pl-10 pr-4 py-2 text-xs text-text-primary focus:outline-none focus:border-accent/50 w-64 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-bg-primary text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Data
          </button>
        </div>
      </div>

      {/* Pill Tabs */}
      <div className="flex gap-2 p-1 bg-bg-card border border-border rounded-full w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all ${
              activeTab === tab 
                ? "bg-accent text-bg-primary" 
                : "text-text-tertiary hover:text-text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pipeline Content */}
      <div className="grid grid-cols-1 gap-8">
        {(activeTab === "ALL PLATFORMS" || activeTab === "AMAZON FBA") && <AmazonSection />}
        {(activeTab === "ALL PLATFORMS" || activeTab === "COMEUP SERVICES") && <ComeUpSection />}
      </div>
    </div>
  );
}

function AmazonSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-white/[0.02]">
          <h3 className="text-sm font-black text-text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-warning">inventory_2</span>
            Amazon Order Manifest
          </h3>
          <span className="text-[10px] font-bold text-text-tertiary">1 ACTIVE SHIPMENT</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-white/[0.01]">
                <th className="px-6 py-4 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Product</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Revenue</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4 text-xs font-bold text-accent">#AZ-99201</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-primary">Eneloop Pro AA (8-Pack)</span>
                    <span className="text-[10px] text-text-tertiary">Electronics / Batteries</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-black text-text-primary">€345.00</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-warning/10 text-warning text-[9px] font-black uppercase tracking-tighter border border-warning/20">In Transit</span>
                </td>
                <td className="px-6 py-4 text-xs text-text-tertiary font-medium">Mar 05, 2026</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4 text-xs font-bold text-accent">#AZ-99202</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-primary">Mama Surprise (Little Live)</span>
                    <span className="text-[10px] text-text-tertiary">Toys / Interactive</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-black text-text-primary">€453.00</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-warning/10 text-warning text-[9px] font-black uppercase tracking-tighter border border-warning/20">In Transit</span>
                </td>
                <td className="px-6 py-4 text-xs text-text-tertiary font-medium">Mar 05, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass-card p-8">
        <h3 className="text-sm font-black text-text-primary uppercase tracking-widest mb-10">Live Tracking</h3>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-border">
            <div className="absolute top-0 left-0 w-[66%] h-full bg-success shadow-[0_0_12px_rgba(63,185,80,0.4)]" />
          </div>
          
          <div className="relative flex justify-between">
            <TrackingStep 
              label="Fulfillment Center" 
              date="Mar 05" 
              status="completed" 
              icon="warehouse"
            />
            <TrackingStep 
              label="In Transit" 
              date="Mar 08" 
              status="active" 
              icon="local_shipping"
            />
            <TrackingStep 
              label="Delivered" 
              date="ETA Mar 31" 
              status="pending" 
              icon="package_2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackingStep({ label, date, status, icon }: { label: string, date: string, status: 'completed' | 'active' | 'pending', icon: string }) {
  const statusColors = {
    completed: "bg-success text-bg-primary",
    active: "bg-success text-bg-primary animate-pulse",
    pending: "bg-bg-card text-text-tertiary border border-border"
  };

  return (
    <div className="flex flex-col items-center gap-4 relative z-10">
      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${statusColors[status]}`}>
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={`text-xs font-black uppercase tracking-widest ${status === 'pending' ? 'text-text-tertiary' : 'text-text-primary'}`}>{label}</span>
        <span className="text-[10px] font-bold text-text-tertiary mt-1">{date}</span>
      </div>
    </div>
  );
}

function ComeUpSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-black text-text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-accent">shopping_cart</span>
          ComeUp Service Performance
        </h3>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-border text-text-tertiary hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
          <button className="p-2 rounded-full border border-border text-text-tertiary hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
        <ServiceCard title="Children's Book Illustration" price="€45" sales={0} rating={5.0} />
        <ServiceCard title="Landing Page Pro" price="€25" sales={0} rating={5.0} />
        <ServiceCard title="Chatbot Intelligent" price="€35" sales={0} rating={5.0} />
        <ServiceCard title="Data Reports & Analysis" price="€20" sales={0} rating={5.0} />
        <ServiceCard title="Translation FR↔EN" price="€20" sales={0} rating={5.0} />
      </div>
    </div>
  );
}

function ServiceCard({ title, price, sales, rating }: { title: string, price: string, sales: number, rating: number }) {
  return (
    <div className="glass-card glass-card-hover p-6 min-w-[240px] flex flex-col gap-4 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl -mr-8 -mt-8 group-hover:bg-accent/10 transition-colors" />
      <div className="flex items-center justify-between relative z-10">
        <span className="px-2 py-0.5 rounded bg-success/10 text-success text-[9px] font-black uppercase tracking-tighter border border-success/20">LIVE</span>
        <div className="flex items-center gap-1 text-warning">
          <span className="material-symbols-outlined text-xs">star</span>
          <span className="text-[10px] font-black">{rating}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 relative z-10">
        <h4 className="text-sm font-black text-text-primary group-hover:text-accent transition-colors">{title}</h4>
        <span className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest">{sales} SALES TOTAL</span>
      </div>
      <div className="flex items-baseline gap-1 mt-2 relative z-10">
        <span className="text-2xl font-black text-text-primary">{price}</span>
        <span className="text-[10px] font-bold text-text-tertiary uppercase">STARTING</span>
      </div>
    </div>
  );
}
