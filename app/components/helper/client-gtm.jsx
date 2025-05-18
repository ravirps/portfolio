"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GoogleTagManager = dynamic(
  () => import('@next/third-parties/google').then(mod => mod.GoogleTagManager),
  { ssr: false }
);

export default function ClientGTM() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return process.env.NEXT_PUBLIC_GTM ? <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> : null;
} 