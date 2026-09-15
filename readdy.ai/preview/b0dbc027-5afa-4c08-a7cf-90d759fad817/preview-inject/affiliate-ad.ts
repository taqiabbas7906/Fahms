import { initPostHog, trackPostHogEvent } from "./posthog";
import { fetchPublicProjectConfig } from "./public-project-config";
import type { PublicProjectConfig } from "./public-project-config";

const PUBLISHED_WEB_AD_CHANNEL = "published_web_ad";
const AFFILIATE_AD_ID = "readdy-affiliate-ad";
const READDY_LOGO = "https://public.readdy.ai/gen_page/readdy-logo.png";

type AffiliateAdConfig = PublicProjectConfig;

function trackEvent(eventName: string, properties: Record<string, any>) {
  trackPostHogEvent(eventName, properties, 1);
}

function buildAffiliateUrl(config: AffiliateAdConfig, projectId: string): string | null {
  if (!config.affiliate_link) return null;
  const url = new URL(config.affiliate_link);
  url.searchParams.set("channel", PUBLISHED_WEB_AD_CHANNEL);
  url.searchParams.set("source_project_id", projectId);
  return url.toString();
}

function getEventProperties(projectId: string, affiliateLink: string) {
  return {
    project_id: projectId,
    source_project_id: projectId,
    channel: PUBLISHED_WEB_AD_CHANNEL,
    affiliate_link: affiliateLink,
    domain: window.location.hostname,
    path: window.location.pathname,
  };
}

function applyStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(element.style, styles);
}

const isPC = () => window.innerWidth > 768 && !("ontouchstart" in window);

function createAdContainer(): HTMLDivElement {
  const ad = document.createElement("div");
  const isMobile = !isPC();
  ad.id = AFFILIATE_AD_ID;
  applyStyles(ad, {
    zIndex: `${Number.MAX_SAFE_INTEGER}`,
    position: "fixed",
    left: isMobile ? "12px" : "32px",
    bottom: isMobile ? "12px" : "32px",
    display: "inline-flex",
    alignItems: "center",
    height: "30px",
    maxWidth: isMobile ? "calc(100% - 24px)" : "none",
    padding: "0 10px",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "6px",
    backgroundColor: "#2D2D2D",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    color: "#FFFFFF",
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: "12px",
    lineHeight: "1",
    whiteSpace: "nowrap",
    cursor: "pointer",
  });
  return ad;
}

function createAdText(): HTMLSpanElement {
  const text = document.createElement("span");
  text.textContent = "Built with";
  applyStyles(text, {
    color: "rgba(255, 255, 255, 0.82)",
    fontWeight: "500",
  });
  return text;
}

function createLogoImage(): HTMLImageElement {
  const logo = document.createElement("img");
  logo.src = READDY_LOGO;
  logo.alt = "Readdy";
  applyStyles(logo, {
    width: "16px",
    height: "16px",
    marginLeft: "6px",
    flex: "0 0 auto",
    display: "block",
  });
  return logo;
}

function createBrandName(): HTMLSpanElement {
  const name = document.createElement("span");
  name.textContent = "Readdy";
  applyStyles(name, {
    marginLeft: "4px",
    fontWeight: "650",
    letterSpacing: "-0.01em",
  });
  return name;
}

function createOpenAffiliateLinkHandler(
  targetUrl: string,
  projectId: string,
  affiliateLink: string,
) {
  return () => {
    trackEvent("site_readdy_ad_click", getEventProperties(projectId, affiliateLink));
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };
}

function createAffiliateAd(config: AffiliateAdConfig, projectId: string): HTMLDivElement | null {
  const targetUrl = buildAffiliateUrl(config, projectId);
  if (!targetUrl) return null;

  const ad = createAdContainer();
  ad.append(createAdText(), createLogoImage(), createBrandName());
  ad.addEventListener(
    "click",
    createOpenAffiliateLinkHandler(targetUrl, projectId, config.affiliate_link),
  );
  return ad;
}

export async function initAffiliateAd() {
  if (__IS_PREVIEW__) return;

  const projectId = __READDY_PROJECT_ID__;
  if (!projectId) return;

  const config = await fetchPublicProjectConfig(projectId);
  document.getElementById(AFFILIATE_AD_ID)?.remove();
  if (!config || config.is_free || !config.affiliate_enabled) return;

  const ad = createAffiliateAd(config, projectId);
  if (!ad) return;
  document.body.appendChild(ad);
  const posthog = await initPostHog();
  if (posthog) {
    trackEvent(
      "site_readdy_ad_impression",
      getEventProperties(projectId, config.affiliate_link),
    );
  }
}

initAffiliateAd().catch(() => {
  document.getElementById(AFFILIATE_AD_ID)?.remove();
});
