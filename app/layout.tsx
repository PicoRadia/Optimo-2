import { Ubuntu } from "@next/font/google";
import Image from "next/image";

import "../styles/globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} bg-[#0d0f12] text-neutral-200`}
    >
      <head />
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-[1200px] flex flex-col items-center">
            <div className="mb-8">
              <Image
                src="/assets/logo.webp"
                alt="Better Earth"
                width={160}
                height={40}
                priority
              />
            </div>
            {children}
          </div>
        </main>
        <footer className="text-neutral-500 text-sm py-9 text-center">
          © 2024 BetterEarth. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
