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
      <body className="flex flex-col items-center justify-between min-h-screen w-full py-8 px-4">
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/assets/logo.webp"
              alt="Better Data"
              width={160}
              height={40}
              priority
              className="mb-2"
            />
          </div>
          {children}
        </div>
        <footer className="text-neutral-500 text-sm mt-8">
          © 2024 BetterEarthC. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
