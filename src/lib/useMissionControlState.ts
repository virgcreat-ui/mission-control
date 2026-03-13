"use client";

import * as React from "react";
import type { MissionControlState } from "@/types/missionControl";

type HookState =
  | { status: "loading"; data: null; error: null }
  | { status: "ready"; data: MissionControlState; error: null }
  | { status: "error"; data: null; error: string };

export function useMissionControlState(pollMs: number = 5000) {
  const [state, setState] = React.useState<HookState>({
    status: "loading",
    data: null,
    error: null,
  });

  const load = React.useCallback(async () => {
    try {
      const res = await fetch("/api/state", { cache: "no-store" });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      const json = (await res.json()) as MissionControlState;
      setState({ status: "ready", data: json, error: null });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setState({ status: "error", data: null, error: msg });
    }
  }, []);

  React.useEffect(() => {
    load();
    const t = setInterval(load, pollMs);
    return () => clearInterval(t);
  }, [load, pollMs]);

  return state;
}
