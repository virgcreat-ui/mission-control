"use client";

import React from "react";
import { Folder, Search, Filter, Plus, Clock, User, ChevronRight, BarChart3, Tag } from "lucide-react";

interface Project {
  name: string;
  category: "Software" | "Publishing" | "Sales" | "Strategy";
  progress: number;
  status: "active" | "standby" | "completed";
  agent: string;
  lastUpdate: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Amazon FBA OS",
    category: "Sales",
    progress: 65,
    status: "active",
    agent: "Omega",
    lastUpdate: "2h ago",
    description: "Automated inventory management and sales pipeline for Amazon storefronts."
  },
  {
    name: "Book 3 - SciFi",
    category: "Publishing",
    progress: 42,
    status: "active",
    agent: "Echo",
    lastUpdate: "1d ago",
    description: "Multi-agent narrative development and formatting for Book 3."
  },
  {
    name: "System Migration",
    category: "Strategy",
    progress: 88,
    status: "active",
    agent: "Cleo",
    lastUpdate: "14m ago",
    description: "Core infrastructure migration to decentralized node network."
  },
  {
    name: "Market Research Bot",
    category: "Software",
    progress: 10,
    status: "active",
    agent: "Hunter",
    lastUpdate: "5h ago",
    description: "Social media sentiment analysis and trend prediction engine."
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">Active Projects</h2>
          <p className="text-sm text-text-tertiary">Mission-critical initiatives and development pipelines.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="h-10 bg-bg-card border border-gray-800 rounded-xl pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent/50 transition-all w-48 focus:w-64 shadow-inner"
            />
          </div>
          <button className="h-10 px-4 bg-accent text-white rounded-xl text-sm font-bold hover:bg-accent/90 transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(88,166,255,0.4)]">
            <Plus size={16} /> New Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div 
            key={project.name} 
            className="glass-card glass-card-hover p-6 flex flex-col gap-5 border-l-4"
            style={{ 
              animationDelay: `${i * 100}ms`,
              borderLeftColor: project.category === "Sales" ? "#D29922" : 
                               project.category === "Publishing" ? "#3FB950" : 
                               project.category === "Strategy" ? "#58A6FF" : "#8B949E"
            }}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-text-tertiary tracking-widest">{project.category}</span>
                  <div className="h-1 w-1 rounded-full bg-text-tertiary" />
                  <span className="text-[10px] uppercase font-bold text-success tracking-widest">{project.status}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary tracking-tight">{project.name}</h3>
              </div>
              <div className="p-2 rounded-lg bg-bg-card border border-gray-800 text-text-secondary">
                <Folder size={20} />
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 italic">
              "{project.description}"
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                <span>Deployment Progress</span>
                <span className="text-accent font-black">{project.progress}%</span>
              </div>
              <div className="h-2 w-full bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(88,166,255,0.6)]"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800/50">
              <div className="flex items-center gap-2 text-text-tertiary">
                <User size={14} className="text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">{project.agent}</span>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary justify-end">
                <Clock size={14} className="text-success" />
                <span className="text-[10px] font-bold tracking-widest uppercase">{project.lastUpdate}</span>
              </div>
            </div>

            <button className="w-full py-2.5 bg-bg-card-hover border border-gray-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-accent hover:border-accent/30 transition-all flex items-center justify-center gap-2 group">
              View Deployment <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
