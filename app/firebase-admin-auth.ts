import { getAuth } from "firebase-admin/auth";
import { applicationDefault, cert, getApps, initializeApp } from "firebase-admin/app";
import { headers } from "next/headers";

function getFirebaseAdminApp() {
  if (!getApps().length) {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    initializeApp({
      credential: privateKey && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PROJECT_ID
        ? cert({ projectId: process.env.FIREBASE_PROJECT_ID, clientEmail: process.env.FIREBASE_CLIENT_EMAIL, privateKey })
        : applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
  return getApps()[0];
}

export async function getFirebaseAdminUser() {
  const authorization = (await headers()).get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;

  try {
    const token = authorization.slice("Bearer ".length);
    const decoded = await getAuth(getFirebaseAdminApp()).verifyIdToken(token);
    const adminEmails = (process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
    const secondFactor = (decoded.firebase as { sign_in_second_factor?: string } | undefined)?.sign_in_second_factor;
    const isAdmin = Boolean(decoded.email && adminEmails.includes(decoded.email.toLowerCase()) && (process.env.REQUIRE_ADMIN_MFA === "false" || secondFactor));
    return isAdmin ? decoded : null;
  } catch {
    return null;
  }
}
