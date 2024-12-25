import { Ubuntu } from "@next/font/google";
import Image from "next/image";
import { Providers } from "./providers";
import "../styles/globals.css";
import { Ribbon } from "@/components/Ribbon";

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
      suppressHydrationWarning
    >
      <head />
      <body 
        className="min-h-screen flex flex-col relative"
      >
        <div 
          className="fixed inset-0 z-[-1] transition-all duration-300"
          style={{
            backgroundImage: "url('/assets/bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hidden dark:block absolute inset-0 bg-black/70" />
        </div>
        
        <Providers>
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
          <div className="mt-auto">
            <Ribbon />
            <footer className="text-gray-700 dark:text-neutral-500 text-sm py-6 text-center">
              © 2024 BetterEarth. All rights reserved.
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
