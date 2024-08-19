'use client'
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "../components/Navbar";

// export const metadata: Metadata = {
//   title: "Space Tourism",
//   description: "Developed by Bada Jesutobi, Project from Frontend Mentor",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const getBackgroundClass = () => {
    switch (pathname) {
      case "/":
        return "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
      case "/destination":
        return "bg-destination-mobile md:bg-destination-tablet lg:bg-desktop";
      case "/crew":
        return "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
      case "/technology":
        return "bg-technology-desktop bg-technology-tablet bg-technology-desktop";
      default:
        return "bg-darkBlue";
    }
  };

  return (
    <html lang="en">
      <body
        className={`2xl:container 2xl:mx-auto w-screen overflow-x-hidden lg:pt-10 pb-10 flex flex-col h-auto min-h-screen bg-no-repeat bg-cover ${getBackgroundClass()}`}
      >
        <nav className="relative flex justify-end">
          <Navbar />
        </nav>
        <main className="flex-1 h-auto flex flex-col">{children}</main>
      </body>
    </html>
  );
}
