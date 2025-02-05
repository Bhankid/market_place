import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/app/components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "../app/Theme/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Futuristic Marketplace",
  description: "Connect buyers and sellers in a futuristic digital marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply the data-theme attribute dynamically */}
      <body
        className={`${inter.className} bg-slate-100 text-foreground min-h-screen`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-28">
              {children}
            </main>
            <Footer companyName="FredMarket" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
