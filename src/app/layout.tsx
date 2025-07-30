import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dodo62 - Modern Dining in Vienna",
  description: "Experience contemporary Austrian cuisine in the heart of Vienna. Fresh ingredients, innovative dishes, and a warm atmosphere at dodo62.",
  keywords: "restaurant, Vienna, Austrian cuisine, fine dining, dodo62",
  authors: [{ name: "dodo62" }],
  openGraph: {
    title: "dodo62 - Modern Dining in Vienna",
    description: "Experience contemporary Austrian cuisine in the heart of Vienna.",
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
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <div className="mr-4 flex">
                <a href="/" className="mr-6 flex items-center space-x-2">
                  <span className="font-bold text-xl">dodo62</span>
                </a>
              </div>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="#menu" className="transition-colors hover:text-foreground/80">Menu</a>
                <a href="#about" className="transition-colors hover:text-foreground/80">About</a>
                <a href="#contact" className="transition-colors hover:text-foreground/80">Contact</a>
                <a href="#reservations" className="transition-colors hover:text-foreground/80">Reservations</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t bg-background">
            <div className="container flex h-16 items-center justify-between">
              <div className="text-sm text-muted-foreground">
                © 2024 dodo62. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Vienna, Austria</span>
                <span>•</span>
                <span>+43 1 234 567 890</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
