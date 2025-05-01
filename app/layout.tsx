import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "O-uber",
  description: "Just a dynamic copy of uber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
