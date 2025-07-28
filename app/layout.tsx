import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const brandFont = Poppins({subsets: ['latin'], weight: ["100", "200", "400", "600"]})

export const metadata: Metadata = {
  title: "HELIOGRAF",
  description: "Redefining Crypto Finance for Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={brandFont.className}
      >
        <div className="bg-black">
        {children}

        </div>
      </body>
    </html>
  );
}
