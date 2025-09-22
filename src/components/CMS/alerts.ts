// src/components/CMS/alerts.ts
export type Alert = {
  id: string;                        // use string in the UI
  color: "red" | "green" | "blue";
  title: string;
  body?: string;
};

const API_URL = "https://pr-admin-panel.vercel.app/api/messages";

export async function fetchAlerts(): Promise<Alert[]> {
  try {
    const res = await fetch(API_URL, { cache: "no-store", mode: "cors" });
    if (!res.ok) {
      console.error("[alerts] bad response", res.status, await res.text());
      return [];
    }

    const data = await res.json();
    // Accept either: Array or { messages: Array }
    const raw: any[] = Array.isArray(data) ? data : Array.isArray(data?.messages) ? data.messages : [];

    return raw
      .filter((m) => m && m.id != null && typeof m.title === "string")
      .map((m) => ({
        id: String(m.id),                                               // <-- coerce here
        title: m.title as string,
        body: typeof m.body === "string" ? m.body : undefined,
        color: (["red", "green", "blue"] as const).includes(m.color) ? m.color : "blue",
      }));
  } catch (err) {
    console.error("[alerts] fetch failed", err);
    return [];
  }
}
