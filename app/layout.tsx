import type { Metadata } from "next";
import "./globals.css";
import { eventConfig } from "./event-config";

export const metadata: Metadata = {
    title: eventConfig.metadata.title,
    description: eventConfig.metadata.description,
    openGraph: {
      title: eventConfig.metadata.title,
      description: eventConfig.metadata.socialDescription,
      images: [{ url: eventConfig.images.heroDesktop, width: 1200, height: 630, alt: eventConfig.metadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: eventConfig.metadata.title,
      description: eventConfig.metadata.socialDescription,
      images: [eventConfig.images.heroDesktop],
    },
  };

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
