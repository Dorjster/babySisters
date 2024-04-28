// Importotototototo
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Roboto } from "next/font/google";
import { DataProvider } from "@/context/userProvider";
import { FilterDataProvider } from "@/context/filterProvider";
import { ParentFilterProvider } from "@/context/parentProvider";
import { ThemeProvider } from "next-themes";
// import { ClerkProvider } from "@clerk/nextjs";

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
    <html lang="en" className="dark">
      <body>
        <div className={roboto.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <ClerkProvider> */}
            <DataProvider>
              <ParentFilterProvider>
                <FilterDataProvider>
                  <Header />

                  {children}
                  <Footer />
                </FilterDataProvider>
              </ParentFilterProvider>
            </DataProvider>
            {/* </ClerkProvider> */}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
