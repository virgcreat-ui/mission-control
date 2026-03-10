"use client";

import React, { useState } from "react";
import { 
  Brain, 
  Search, 
  Filter, 
  Clock, 
  FileText, 
  User, 
  ChevronRight,
  Database,
  Tag,
  Eye,
  MoreVertical,
  Layers,
  Sparkles
} from "lucide-react";

const memories = [
  { id: '1', title: 'Market Analysis: Consumer Electronics FBA', agent: 'Echo', date: 'Mar 09, 14:20', type: 'Strategic', content: 'In-depth analysis of battery margins and delivery constraints...' },
  { id: '2', title: 'Daily Log: Mar 10', agent: 'Cleo', date: 'Mar 10, 08:00', type: 'Log', content: 'Systems initializing. Pipeline review scheduled for 10:00...' },
  { id: '3', title: 'Amazon Supplier Outreach Script', agent: 'Omega', date: 'Mar 08, 11:30', type: 'Operational', content: 'Standardized communication templates for bulk ordering...' },
  { id: '4', title: 'Code Review: API Integration Module', agent: 'Echo', date: 'Mar 07, 16:45', type: 'Engineering', content: 'Identified 3 potential bottlenecks in the rate-limiting logic...' },
  { id: '5', title: 'Retrospective: First 30 Days', agent: 'Cleo', date: 'Mar 05, 09:15', type: 'Feedback', content: 'Operational efficiency up by 22% since autonomous shift...' },
];

export default function MemoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Brain className="text-accent" size={24} />
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">Institutional Memory</h2>
        </div>
        <p className="text-sm text-text-tertiary">Real-time access to agent-created documentation and thought processes.</p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-accent transition-colors" />
          <input 
            type="text" 
            placeholder="Search all files and memories..." 
            className="w-full bg-bg-card border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-bg-card border border-gray-800 text-sm font-bold text-text-tertiary hover:text-text-primary hover:border-gray-700 transition-all">
            <Filter size={16} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-all shadow-[0_0_12px_rgba(88,166,255,0.4)]">
            <Sparkles size={16} /> New Entry
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-4 flex items-center gap-4 border-accent/10">
          <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Database size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Total Knowledge</p>
            <p className="text-xl font-black text-text-primary">128.4 MB</p>
          </div>
        </div>
        <div className="glass-card p-4 flex items-center gap-4 border-warning/10">
          <div className="h-10 w-10 rounded-full bg-warning/10 flex items-center justify-center text-warning">
            <FileText size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Files Indexed</p>
            <p className="text-xl font-black text-text-primary">42</p>
          </div>
        </div>
        <div className="glass-card p-4 flex items-center gap-4 border-success/10">
          <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center text-success">
            <Clock size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Last Updated</p>
            <p className="text-xl font-black text-text-primary">6m ago</p>
          </div>
        </div>
      </div>

      {/* Memory List */}
      <div className="flex flex-col gap-3">
        {memories.map((item) => (
          <MemoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function MemoryItem({ item }: { item: any }) {
  return (
    <div className="glass-card group hover:border-accent/30 transition-all cursor-pointer">
      <div className="p-5 flex items-start gap-6">
        <div className="h-12 w-12 rounded-xl bg-gray-800/50 flex flex-col items-center justify-center text-text-tertiary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
          <FileText size={20} />
          <span className="text-[8px] font-black uppercase mt-1 tracking-tighter">DOC</span>
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <h4 className="text-base font-bold text-text-secondary group-hover:text-text-primary transition-colors">{item.title}</h4>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-800 text-text-tertiary uppercase">{item.type}</span>
          </div>
          <p className="text-sm text-text-tertiary line-clamp-1">{item.content}</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <User size={12} className="text-text-tertiary" />
              <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-tight">{item.agent}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-text-tertiary" />
              <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-tight">{item.date}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-accent hover:text-white transition-all">
            <Eye size={16} />
          </button>
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all text-text-tertiary hover:text-text-primary">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
