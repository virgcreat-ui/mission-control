import { readFile } from "fs/promises";

export const dynamic = "force-dynamic";

function getStatePath() {
  return (
    process.env.MISSION_CONTROL_STATE_PATH ||
    "/Users/BOTMAC/.openclaw/workspace/mission-control.json"
  );
}

export async function GET() {
  const statePath = getStatePath();

  try {
    const raw = await readFile(statePath, "utf8");
    const json = JSON.parse(raw);

    return Response.json(json, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json(
      {
        error: "MISSION_CONTROL_STATE_READ_FAILED",
        message,
        statePath,
      },
      { status: 500 }
    );
  }
}
