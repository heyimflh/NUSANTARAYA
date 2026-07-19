"use client";

import { useEffect } from "react";
import { usePassport } from "@/context/app-context";

interface AtlasLifecycleBridgeProps {
  provinceId: string;
}

export function AtlasLifecycleBridge({ provinceId }: AtlasLifecycleBridgeProps) {
  const { planProvince } = usePassport();
  useEffect(() => {
    planProvince(provinceId);
  }, [provinceId, planProvince]);

  return null;
}

