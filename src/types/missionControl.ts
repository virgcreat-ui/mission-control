export type MCSeverity = "success" | "warning" | "error" | "accent";
export type MCAgentStatus = "active" | "busy" | "idle" | "error";

export interface MCKPI {
  value: number;
  currency: string;
  note?: string;
}

export interface MCStream {
  id: string;
  label: string;
  status: string;
  progress: number;
  color: Exclude<MCSeverity, "error">;
  icon: string; // material-symbols name
}

export interface MCAttentionItem {
  id: string;
  severity: MCSeverity;
  icon: string; // material-symbols name
  title: string;
  subtitle: string;
}

export interface MCAgent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  glowColor: string;
  status: MCAgentStatus;
}

export interface MissionControlState {
  lastUpdated: string;
  kpis: {
    invested: MCKPI;
    available: MCKPI;
    projectedProfit: MCKPI;
  };
  streams: MCStream[];
  attention: MCAttentionItem[];
  agents: MCAgent[];
  meta?: Record<string, unknown>;
}
