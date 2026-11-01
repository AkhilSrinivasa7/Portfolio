/**
 * Sanity.io API Client Configuration
 * Supports production Sanity CDN and structured client-side queries.
 */
export const sanityConfig = {
  projectId: (import.meta as any).env?.VITE_SANITY_PROJECT_ID || "portfolio",
  dataset: (import.meta as any).env?.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-03-01",
  useCdn: true,
};

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  const { projectId, dataset, apiVersion } = sanityConfig;

  // If no projectId configured, returns null to allow fallback to structured static data
  if (!projectId || projectId === "portfolio") {
    return null;
  }

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;
    
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Sanity query error: ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    return data.result as T;
  } catch (error) {
    console.warn("Sanity connection error, using local structured data:", error);
    return null;
  }
}
