import { Footer, Navbar } from "@/components/";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car-Hub",
  description: "Best cars on Earth!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
