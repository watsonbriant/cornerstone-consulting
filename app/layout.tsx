import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cornerstone Consulting — Tampa, FL",
  description:
    "A Tampa-based B2B client acquisition team. We build careers from the ground up and promote 100% from within.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
