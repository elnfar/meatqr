import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Meat - The next generation QR venue management system",
  description: "Generated by create next app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
