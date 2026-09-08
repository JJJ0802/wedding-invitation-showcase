import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { eventConfig } from "./event-config";

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const image = `${protocol}://${host}${eventConfig.images.heroDesktop}`;
  return {
    title: eventConfig.metadata.title,
    description: eventConfig.metadata.description,
    openGraph: {
      title: eventConfig.metadata.title,
      description: eventConfig.metadata.socialDescription,
      images: [{ url: image, width: 1200, height: 630, alt: eventConfig.metadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: eventConfig.metadata.title,
      description: eventConfig.metadata.socialDescription,
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
