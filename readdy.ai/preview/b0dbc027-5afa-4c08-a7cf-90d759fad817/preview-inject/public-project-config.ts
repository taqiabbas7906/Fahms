export type PublicProjectConfig = {
  is_free: boolean;
  affiliate_enabled: boolean;
  affiliate_link: string;
};

type PublicProjectConfigCache = Map<string, Promise<PublicProjectConfig | null>>;

const CACHE_KEY = "__READDY_PUBLIC_PROJECT_CONFIG_REQUESTS__";

function getRequestCache(): PublicProjectConfigCache {
  const runtime = globalThis as typeof globalThis & {
    [CACHE_KEY]?: PublicProjectConfigCache;
  };
  if (!runtime[CACHE_KEY]) {
    runtime[CACHE_KEY] = new Map();
  }
  return runtime[CACHE_KEY];
}

/**
 * Fetches the public project configuration once per project on the current page.
 * Watermark and Affiliate Badge callers share the same in-flight request.
 */
export function fetchPublicProjectConfig(projectId: string): Promise<PublicProjectConfig | null> {
  const apiUrl = `https://${__READDY_AI_DOMAIN__}/api/public/user/is_free`;
  const requestUrl = `${apiUrl}?projectId=${encodeURIComponent(projectId)}`;
  const cache = getRequestCache();
  const cachedRequest = cache.get(requestUrl);
  if (cachedRequest) return cachedRequest;

  const request = fetch(requestUrl)
    .then(async (response) => {
      if (!response.ok) return null;
      const result = await response.json();
      return result.code === "OK" ? result.data as PublicProjectConfig : null;
    })
    .catch(() => null);

  cache.set(requestUrl, request);
  return request;
}
