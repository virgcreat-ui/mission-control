"use client";

import React, { useState } from "react";
import { Send, Bot, User, Trash2, Paperclip, Terminal, MoreVertical, Globe, Lock } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "agent";
  content: string;
  timestamp: string;
  agentName?: string;
  agentAvatar?: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "agent",
    agentName: "Cleo",
    agentAvatar: "/avatars/cleo.png",
    content: "Systems operational. Chief of Staff online. What are our directives for the current cycle?",
    timestamp: "09:00 AM",
  },
  {
    id: "2",
    role: "user",
    content: "Initiate status check for Amazon FBA pipeline and Book 3 progress.",
    timestamp: "09:02 AM",
  },
  {
    id: "3",
    role: "agent",
    agentName: "Cleo",
    agentAvatar: "/avatars/cleo.png",
    content: "Understood. Querying Omega and Echo for real-time telemetry. Standby...",
    timestamp: "09:02 AM",
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] animate-fade-in max-w-5xl mx-auto glass-card overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-border bg-bg-card-hover flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
            <Bot size={20} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-text-primary tracking-tight">Agent Command Channel</h3>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Secure Link Active</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-bg-card rounded-lg text-text-tertiary hover:text-text-primary transition-colors">
            <Lock size={16} />
          </button>
          <button className="p-2 hover:bg-bg-card rounded-lg text-text-tertiary hover:text-error transition-colors">
            <Trash2 size={16} />
          </button>
          <button className="p-2 hover:bg-bg-card rounded-lg text-text-tertiary hover:text-text-primary transition-colors">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-bg-card">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
            <div className={`flex items-start gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`shrink-0 h-9 w-9 rounded-full overflow-hidden border border-border bg-bg-card flex items-center justify-center ${msg.role === "user" ? "text-accent border-accent/30" : "text-text-secondary"}`}>
                {msg.role === "user" ? (
                  <User size={18} />
                ) : (
                  <img src={msg.agentAvatar} alt={msg.agentName} className="h-full w-full object-cover" />
                )}
              </div>
              
              <div className="flex flex-col gap-1.5">
                {msg.role === "agent" && (
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest ml-1">{msg.agentName}</span>
                )}
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                  msg.role === "user" 
                    ? "bg-accent text-white rounded-tr-none shadow-accent/10" 
                    : "bg-bg-card-hover border border-border text-text-primary rounded-tl-none shadow-black/20"
                }`}>
                  {msg.content}
                </div>
                <span className={`text-[10px] text-text-tertiary font-medium ${msg.role === "user" ? "text-right mr-1" : "ml-1"}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border bg-bg-card-hover">
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="p-1 hover:bg-bg-card rounded-md text-text-tertiary hover:text-accent transition-colors">
              <Paperclip size={18} />
            </button>
            <button className="p-1 hover:bg-bg-card rounded-md text-text-tertiary hover:text-accent transition-colors">
              <Terminal size={18} />
            </button>
          </div>
          <input 
            type="text" 
            placeholder="Broadcast command to network..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="w-full h-14 bg-bg-card border border-border rounded-2xl pl-24 pr-16 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className={`absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl flex items-center justify-center transition-all ${
              input.trim() 
                ? "bg-accent text-white shadow-lg shadow-accent/20 hover:scale-105 active:scale-95" 
                : "bg-bg-card border border-border text-text-tertiary opacity-50 cursor-not-allowed"
            }`}
          >
            <Send size={16} />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest flex items-center gap-1.5">
              <Globe size={10} className="text-success" /> Network Broadcast
            </span>
            <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest flex items-center gap-1.5">
              <Bot size={10} className="text-accent" /> Cleo is listening
            </span>
          </div>
          <span className="text-[10px] font-medium text-text-tertiary italic">Press Enter to transmit</span>
        </div>
      </div>
    </div>
  );
}
