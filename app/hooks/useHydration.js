"use client";

import { useEffect, useState } from "react";

export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsHydrated(true);
  }, []);

  return { isHydrated, isClient };
}

export function useClientOnly() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
