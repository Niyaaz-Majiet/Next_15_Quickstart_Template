"use client"

import { notFound } from "next/navigation";

//To catch 404 dynamic routes
export default function NotFoundCatchAll() {
  notFound()
}