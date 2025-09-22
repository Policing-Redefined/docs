// src/components/CMS/AlertsBar.tsx
import { useEffect, useState } from "react";
import { fetchAlerts, type Alert } from "./alerts";
import { AlertsBody } from "./AlertsBody"
import "./alerts.css";

export function AlertsBar() {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    useEffect(() => {
        fetchAlerts().then(setAlerts).catch(() => setAlerts([]));
    }, []);

    if (!alerts.length) return null;

    return (
        <div className="alerts-container">
            {alerts.map((a) => (
                <div key={a.id} className={`alert alert-${a.color}`}>
                    <span className="alert-title">{a.title}</span>
                    {a.body && (
                        <div className="alert-body markdown">
                            <AlertsBody markdown={a.body} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AlertsBar;