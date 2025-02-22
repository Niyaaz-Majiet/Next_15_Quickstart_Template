import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Providers from "./provider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Template App",
  description: "Template App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Suspense fallback={<label>Loading</label>}>{children}</Suspense>
        </Providers>
        <ToastContainer position="top-right" autoClose={2000} />
      </body>
    </html>
  );
}
