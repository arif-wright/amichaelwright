"use client";

import { useEffect } from "react";

export function trackEvent(event: string, data: Record<string, string> = {}) {
  const payload = JSON.stringify({
    event,
    path: window.location.pathname,
    ...data,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/events", payload);
    return;
  }

  void fetch("/api/events", {
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
    keepalive: true,
    method: "POST",
  });
}

export default function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedLink = target.closest<HTMLElement>("[data-track-event]");

      if (!trackedLink) {
        return;
      }

      trackEvent(trackedLink.dataset.trackEvent || "", {
        href: trackedLink.getAttribute("href") || "",
        label: trackedLink.textContent?.trim() || "",
      });
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
