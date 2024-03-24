import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Go DAddy",
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
        <main className="bg-grey-default font-jetbrains">{children}</main>
      </body>
    </html>
  );
}
