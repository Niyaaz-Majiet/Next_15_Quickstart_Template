import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Providers from "./provider";
import { ToastContainer } from "react-toastify";
import Spinner from "@/components/Spinner/Spinner";

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
      <body>
        <Providers>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </Providers>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </body>
    </html>
  );
}
