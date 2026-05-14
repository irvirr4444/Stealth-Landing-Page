import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something is coming",
  description: "Get early access",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
