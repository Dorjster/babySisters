// Importotototototo
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Roboto } from "next/font/google";

// Dem Font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Babysitter",
  description: "Babysitters by Babies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={roboto.className}>
          <Header />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
