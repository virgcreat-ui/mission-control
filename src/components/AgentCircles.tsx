"use client";

interface Agent {
  name: string;
  role: string;
  avatar: string;
  glowColor: string;
  status: "active" | "busy" | "idle" | "error";
}

const agents: Agent[] = [
  {
    name: "Cleo",
    role: "Leader",
    avatar: "/avatars/cleo.png",
    glowColor: "#3FB950",
    status: "active",
  },
  {
    name: "Flash",
    role: "Assistant",
    avatar: "/avatars/flash.png",
    glowColor: "#F0883E",
    status: "active",
  },
  {
    name: "Echo",
    role: "Research",
    avatar: "/avatars/echo.png",
    glowColor: "#3FB950",
    status: "active",
  },
  {
    name: "Omega",
    role: "Builder",
    avatar: "/avatars/omega.png",
    glowColor: "#D29922",
    status: "busy",
  },
  {
    name: "Hunter",
    role: "Delegatee",
    avatar: "/avatars/hunter.png",
    glowColor: "#F85149",
    status: "idle",
  },
];

export default function AgentCircles() {
  return (
    <section className="flex items-center gap-6 overflow-x-auto no-scrollbar max-w-full">
      <div className="flex items-center gap-2 pr-6 border-r border-gray-800 shrink-0">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
          Agents
        </h2>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-success/10 border border-success/20">
          <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] font-bold text-success uppercase">All Online</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center gap-2 group cursor-pointer"
          >
            {/* Avatar with glow ring */}
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute -inset-0.5 rounded-full opacity-40 glow-ring blur-[2px]"
                style={{ backgroundColor: agent.glowColor }}
              />
              {/* Ring border */}
              <div
                className="relative h-8 w-8 rounded-full p-[1.5px] transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${agent.glowColor}, ${agent.glowColor}66)`,
                }}
              >
                <div className="h-full w-full rounded-full overflow-hidden bg-bg-card">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Status dot */}
              <div
                className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg-primary"
                style={{
                  backgroundColor:
                    agent.status === "active"
                      ? "#3FB950"
                      : agent.status === "busy"
                        ? "#D29922"
                        : agent.status === "error"
                          ? "#F85149"
                          : "#8B949E",
                }}
              />
            </div>
            {/* Name & Role */}
            <div className="flex flex-col -space-y-0.5">
              <span className="text-[11px] font-bold text-text-primary">
                {agent.name}
              </span>
              <span className="text-[9px] font-medium text-text-tertiary">
                {agent.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
