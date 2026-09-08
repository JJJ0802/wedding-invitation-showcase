"use client";

const functionsBaseUrl = (process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL ?? "").replace(/\/$/, "");

export function apiUrl(path: string) {
  return functionsBaseUrl ? `${functionsBaseUrl}${path}` : `/api${path}`;
}
