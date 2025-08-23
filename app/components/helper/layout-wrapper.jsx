"use client";

import { usePathname } from "next/navigation";
import Footer from "../footer";
import ScrollToTop from "./scroll-to-top";
import Navbar from "../navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isBiodataPage = pathname === "/biodata";

  return (
    <>
      <main className={`min-h-screen relative mx-auto text-white ${
        isBiodataPage 
          ? 'w-full p-0' 
          : 'px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]'
      }`}>
        {!isBiodataPage && <Navbar />}
        {children}
        {!isBiodataPage && <ScrollToTop />}
      </main>
      {!isBiodataPage && <Footer />}
    </>
  );
}
