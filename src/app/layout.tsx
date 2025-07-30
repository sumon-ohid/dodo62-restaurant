import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "dodo62 - Authentic Korean Cuisine in Vienna",
  description: "Experience authentic Korean cuisine in the heart of Vienna. Traditional recipes, fresh ingredients, and warm hospitality at dodo62.",
  keywords: "Korean restaurant, Vienna, Korean cuisine, bibimbap, bulgogi, kimchi, dodo62",
  authors: [{ name: "dodo62" }],
  openGraph: {
    title: "dodo62 - Authentic Korean Cuisine in Vienna",
    description: "Experience authentic Korean cuisine in the heart of Vienna.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased flex justify-center">
        <div className="relative flex min-h-screen flex-col w-full max-w-7xl">
          <Navbar />
          <main className="flex-1 flex items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
