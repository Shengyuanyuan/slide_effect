import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Slide Demo",
  description: "Slide effect demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        {/* <Slide/> */}
      </body>
    </html>
  );
}
