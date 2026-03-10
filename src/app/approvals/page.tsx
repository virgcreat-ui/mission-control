"use client";

import React from "react";
import { 
  Shield, 
  Check, 
  X, 
  History, 
  AlertTriangle,
  FileText,
  User,
  Calendar
} from "lucide-react";

const pendingApprovals: Array<{id: string; title: string; description: string; requestedBy: string; date: string}> = [];

export default function ApprovalsPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">CEO Approvals</h2>
          <p className="text-sm text-text-tertiary">All critical agent decisions require your explicit sign-off.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-card border border-gray-800 text-text-tertiary text-xs font-bold hover:text-text-primary hover:border-accent/30 transition-all">
          <History size={14} /> View History
        </button>
      </div>

      {pendingApprovals.length === 0 ? (
        <div className="glass-card flex flex-col items-center justify-center p-20 text-center gap-6 border-success/10 bg-success/5 animate-fade-in shadow-[0_0_24px_rgba(63,185,80,0.05)]">
          <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center text-success border border-success/20 shadow-[0_0_12px_rgba(63,185,80,0.2)]">
            <Shield size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-black text-text-primary tracking-tight">No pending approvals</h3>
            <p className="text-sm text-text-tertiary max-w-xs font-medium uppercase tracking-widest text-[10px]">All clear ✅ All systems operational.</p>
          </div>
          <button className="mt-2 px-8 py-3 rounded-full bg-success/10 border border-success/20 text-xs font-black text-success uppercase tracking-widest hover:bg-success hover:text-white transition-all duration-300">
            Audit Logs
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {pendingApprovals.map((approval) => (
            <ApprovalCard key={approval.id} approval={approval} />
          ))}
        </div>
      )}
    </div>
  );
}

function ApprovalCard({ approval }: { approval: any }) {
  return (
    <div className="glass-card overflow-hidden group hover:border-accent/30 transition-all">
      <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
              <FileText size={20} />
            </div>
            <div>
              <h4 className="text-sm font-black text-text-primary uppercase tracking-tight">{approval.description}</h4>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1.5">
                  <User size={12} className="text-text-tertiary" />
                  <span className="text-[10px] font-bold text-text-tertiary uppercase">{approval.requestedBy}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-text-tertiary" />
                  <span className="text-[10px] font-bold text-text-tertiary uppercase">{approval.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-800">
          <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border border-gray-800 text-text-tertiary text-xs font-black hover:bg-error hover:text-white hover:border-error transition-all uppercase tracking-widest flex items-center justify-center gap-2 group/btn">
            <X size={14} className="group-hover/btn:scale-110 transition-transform" /> Reject
          </button>
          <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-success text-white text-xs font-black hover:bg-success/90 transition-all uppercase tracking-widest shadow-[0_0_12px_rgba(63,185,80,0.3)] flex items-center justify-center gap-2 group/btn">
            <Check size={14} className="group-hover/btn:scale-110 transition-transform" /> Approve
          </button>
        </div>
      </div>
    </div>
  );
}
