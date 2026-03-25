import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " ASNA AVL - نظام إدارة الأسطول وتتبع المركبات",
  description: "نظام إدارة الأسطول وتتبع المركبات الذي يتابع الأعطال والصيانة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
