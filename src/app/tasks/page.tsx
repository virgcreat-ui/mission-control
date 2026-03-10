"use client";

import React from "react";

type Priority = 'high' | 'medium' | 'low';
type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

interface Task {
  id: string;
  title: string;
  agent: string;
  priority: Priority;
  dueDate: string;
  status: TaskStatus;
}

const tasks: Task[] = [
  { id: '1', title: 'Wire Mission Control API', agent: 'Echo', priority: 'high', dueDate: 'Mar 15', status: 'TODO' },
  { id: '2', title: 'ComeUp portfolio images', agent: 'Omega', priority: 'medium', dueDate: 'Mar 12', status: 'TODO' },
  { id: '3', title: 'Order FBA prep supplies', agent: 'Virgil', priority: 'medium', dueDate: 'Mar 11', status: 'TODO' },
  { id: '4', title: 'Spring Sales scanning', agent: 'Hunter', priority: 'high', dueDate: 'Ongoing', status: 'IN_PROGRESS' },
  { id: '5', title: 'Mission Control redesign', agent: 'Cleo', priority: 'high', dueDate: 'Mar 10', status: 'IN_PROGRESS' },
  { id: '6', title: 'ComeUp 5 services live', agent: 'Cleo', priority: 'high', dueDate: 'Mar 10', status: 'DONE' },
  { id: '7', title: 'Cron cleanup (29→12)', agent: 'Cleo', priority: 'low', dueDate: 'Mar 10', status: 'DONE' },
  { id: '8', title: 'Durg Barnet KDP publish', agent: 'Cleo', priority: 'high', dueDate: 'Mar 9', status: 'DONE' },
];

export default function TasksPage() {
  const getTasksByStatus = (status: TaskStatus) => tasks.filter(t => t.status === status);

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-black text-text-primary tracking-tight">Task Board</h2>
          <p className="text-sm text-text-tertiary">Orchestrating autonomous agents and manual workflows.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg-primary text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
          <span className="material-symbols-outlined text-lg">add</span>
          New Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <Column title="TODO" tasks={getTasksByStatus('TODO')} icon="radio_button_unchecked" iconColor="text-text-tertiary" />
        <Column title="IN PROGRESS" tasks={getTasksByStatus('IN_PROGRESS')} icon="play_circle" iconColor="text-warning" />
        <Column title="DONE" tasks={getTasksByStatus('DONE')} icon="check_circle" iconColor="text-success" />
      </div>
    </div>
  );
}

function Column({ title, tasks, icon, iconColor }: { title: string, tasks: Task[], icon: string, iconColor: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-sm ${iconColor}`}>{icon}</span>
          <h3 className="text-[10px] font-black text-text-primary uppercase tracking-widest">{title}</h3>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-bg-card text-text-tertiary border border-border">{tasks.length}</span>
        </div>
        <button className="p-1 rounded text-text-tertiary hover:bg-bg-card transition-colors">
          <span className="material-symbols-outlined text-sm">more_horiz</span>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
        <button className="w-full py-3 rounded-xl border border-dashed border-border text-text-tertiary hover:text-text-primary hover:border-accent/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-xs font-bold">
          <span className="material-symbols-outlined text-sm">add</span> Add Task
        </button>
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const priorityColor = {
    high: 'text-error bg-error/10 border-error/20',
    medium: 'text-warning bg-warning/10 border-warning/20',
    low: 'text-idle bg-idle/10 border-idle/20',
  };

  return (
    <div className="glass-card glass-card-hover p-4 flex flex-col gap-4 group cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors line-clamp-2">
          {task.title}
        </h4>
        <div className="p-1 rounded bg-bg-primary text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-sm">more_horiz</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-xs text-text-tertiary">person</span>
          <span className="text-[10px] font-bold text-text-tertiary uppercase">{task.agent}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-xs text-text-tertiary">calendar_today</span>
          <span className="text-[10px] font-bold text-text-tertiary uppercase">{task.dueDate}</span>
        </div>
        <div className={`ml-auto px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter border ${priorityColor[task.priority]}`}>
          {task.priority}
        </div>
      </div>
    </div>
  );
}
