import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HtetZarni - Portfolio",
  description: "A modern portfolio website crafted by HtetZarni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} h-[200dvh] bg-gray-50 text-gray-950`}
      >
        <Providers>
          <main className="mx-auto max-w-[70rem] px-5">
            <div className="fixed right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbf2e9] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
            <div className="fixed left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#e0ebff] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
