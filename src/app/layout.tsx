import type { Metadata } from "next";
import { MapPin, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import "./globals.css";

export const metadata: Metadata = {
  title: "Settled.",
  description: "House Cleaning & Remodelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-Inter antialiased min-h-screen"
      >
        <div className="my-3 py-2 w-full flex justify-center sticky top-0 bg-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex gap-24 align-middle">
                <Link href="/services">
                  <span className="font-semibold tracking-tight">SERVICES</span>
                </Link>
                <Link href="/">
                  <Image
                    className="dark:invert inline-block"
                    src="/img/no_headline.png"
                    alt="logo"
                    width={100}
                    height={10}
                    priority
                  />
                </Link>
                <Link href="/about">
                  <span className="font-semibold tracking-tight">ABOUT US</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="mx-36">
          {children}
        </div>
        <div className="px-32 py-12 flex flex-row gap-48 h-[30vh] bg-amber-50 justify-center">
          <Image
            className="dark:invert my-auto"
            src="/img/full.png"
            alt="Next.js logo"
            width={200}
            height={600}
            priority
          />
          <div className="my-auto flex flex-col gap-4">
            <MapPin />
            <span className="text-sm">
              <b>SETTLED, SDN. BHD.</b> <br />
              15-21 Block C Wisma ICT, Jalan 123 <br />
              56000 Kuala Lumpur <br />
              Wilayah Persekutuan Kuala Lumpur, Malaysia
            </span>
          </div>
          <div className="flex flex-col gap-4 my-auto">
            <a className="flex flex-row gap-5 items-center" href='https://google.com' target="_blank">
              <Mail size={16} />
              settled@helpdesk.com
            </a>
            <a className="flex flex-row gap-5 items-center" href='https://google.com' target="_blank">
              <Linkedin size={16} />
              settledmalaysia
            </a>
            <a className="flex flex-row gap-5 items-center" href='https://google.com' target="_blank">
              <Instagram size={16} />
              @settledmalaysia
            </a>
            <a className="flex flex-row gap-5 items-center" href='https://google.com' target="_blank">
              <Facebook size={16} />
              Settled Malaysia
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}