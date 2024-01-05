import type {Metadata} from "next";

import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

import {barlow_semi_condensed} from "./fonts";

export const metadata: Metadata = {
  title: "rock-paper-scissors-game",
  description: "Created by @fedeq",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${barlow_semi_condensed.variable}`} lang="en">
      <body className="bg-radial">
        <div className="font-barlowSemiCondensed min-h-dvh container m-auto grid h-full grid-rows-[auto,1fr,auto] px-8">
          <Header />
          <main className="py-4 md:py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
