import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something is coming",
  description: "Get early access",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-cream font-sans antialiased min-h-screen safe-top safe-bottom overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
