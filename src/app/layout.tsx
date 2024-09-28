import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo app",
  description: "Todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-700 text-gray-50 container m-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
