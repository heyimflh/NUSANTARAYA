"use client";

import { useEffect, useRef } from "react";
import { usePassport } from "@/context/app-context";

interface AtlasLifecycleBridgeProps {
  provinceId: string;
}

export function AtlasLifecycleBridge({ provinceId }: AtlasLifecycleBridgeProps) {
  const { startProvince } = usePassport();
  useEffect(() => {
    startProvince(provinceId);
  }, [provinceId, startProvince]);

  return null;
}
