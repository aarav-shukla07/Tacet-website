// lib/fonts.ts
import { JetBrains_Mono, Poppins, Inter } from "next/font/google";

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});