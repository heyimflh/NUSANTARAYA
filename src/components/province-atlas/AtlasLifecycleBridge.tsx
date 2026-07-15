"use client";

import { useEffect, useRef } from "react";
import { usePassport } from "@/context/app-context";

interface AtlasLifecycleBridgeProps {
  provinceId: string;
}

export function AtlasLifecycleBridge({ provinceId }: AtlasLifecycleBridgeProps) {
  const { startProvince } = usePassport();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      // Introduce a slight delay so it doesn't block the critical rendering path
      const timeoutId = setTimeout(() => {
        startProvince(provinceId);
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [provinceId, startProvince]);

  return null;
}
