const POSTHOG_KEY = "phc_V7JMHB0fVJGRu8UHyrsj6pSL1BS76P5zD8qCi7lrTTV";
const POSTHOG_CDN = "https://cdn.jsdelivr.net/npm/posthog-js@1.96.1/dist/array.full.min.js";

type PostHogInstance = {
  capture: (eventName: string, properties?: Record<string, any>) => void;
  init: (key: string, options: Record<string, any>) => void;
  sessionRecording?: {
    stopRecording: () => void;
  };
};

let posthogReady: Promise<PostHogInstance | null> | null = null;

const getPostHog = () => (window as any).posthog as PostHogInstance | undefined;

/**
 * Loads and initializes the shared Readdy PostHog instance.
 * Concurrent callers reuse the same CDN request.
 */
export function initPostHog(): Promise<PostHogInstance | null> {
  const existingPostHog = getPostHog();
  if (existingPostHog) return Promise.resolve(existingPostHog);
  if (posthogReady) return posthogReady;

  posthogReady = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = POSTHOG_CDN;
    script.async = true;
    script.onload = () => {
      const posthog = getPostHog();
      if (!posthog) {
        resolve(null);
        return;
      }

      posthog.init(POSTHOG_KEY, {
        api_host: "https://us.i.posthog.com",
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        disable_session_recording: true,
        disable_scroll_properties: true,
        capture_performance: { web_vitals: false },
        rageclick: false,
        loaded(instance: PostHogInstance) {
          instance.sessionRecording?.stopRecording();
        },
      });
      resolve(posthog);
    };
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });

  return posthogReady;
}

/** Captures a Readdy watermark or badge event. */
export function trackPostHogEvent(
  eventName: string,
  properties: Record<string, any> = {},
  version: number,
) {
  getPostHog()?.capture(eventName, { ...properties, version });
}
