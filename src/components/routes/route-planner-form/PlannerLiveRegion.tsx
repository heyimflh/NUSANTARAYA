import React, { useEffect, useState } from "react";

/**
 * Global accessible live region to announce important state changes to screen readers.
 * Use via custom event or global store in a real app, but for now we'll export a simple emitter.
 */

class LiveAnnouncer {
  private listeners: ((msg: string, priority: "polite" | "assertive") => void)[] = [];

  subscribe(listener: (msg: string, priority: "polite" | "assertive") => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  announce(msg: string, priority: "polite" | "assertive" = "polite") {
    this.listeners.forEach((l) => l(msg, priority));
  }
}

export const announcer = new LiveAnnouncer();

export function PlannerLiveRegion() {
  const [politeMsg, setPoliteMsg] = useState("");
  const [assertiveMsg, setAssertiveMsg] = useState("");

  useEffect(() => {
    return announcer.subscribe((msg, priority) => {
      if (priority === "assertive") {
        setAssertiveMsg(msg);
        setTimeout(() => setAssertiveMsg(""), 1000);
      } else {
        setPoliteMsg(msg);
        setTimeout(() => setPoliteMsg(""), 1000);
      }
    });
  }, []);

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      {politeMsg}
      <div aria-live="assertive" aria-atomic="true">
        {assertiveMsg}
      </div>
    </div>
  );
}
