"use client";

import { useClientOnly } from "@/app/hooks/useHydration";

export default function HydrationSafe({ children, fallback = null }) {
  const mounted = useClientOnly();

  // Return fallback during SSR and initial client render
  if (!mounted) return fallback;
  
  return children;
}
