import React from 'react';
import {useRouter} from "next/router";

export default function Address(props = null) {
  const router = useRouter();
  if (typeof window === "undefined") return null;
  router.push(router.pathname + "/maschio")
  return null;
}
