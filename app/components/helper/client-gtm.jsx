"use client";

import dynamic from "next/dynamic";
import { useClientOnly } from "@/app/hooks/useHydration";

const GoogleTagManager = dynamic(
  () => import('@next/third-parties/google').then(mod => mod.GoogleTagManager),
  { ssr: false }
);

export default function ClientGTM() {
  const mounted = useClientOnly();

  // Return null during SSR and initial client render to prevent hydration mismatch
  if (!mounted) return null;
  
  return process.env.NEXT_PUBLIC_GTM ? <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> : null;
} 