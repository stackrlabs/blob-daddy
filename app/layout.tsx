import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Blob DAddy",
  description: "Aggregate DAs with DAddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <main className="bg-grey-default font-jetbrains">{children}</main>
      </body>
    </html>
  );
}
