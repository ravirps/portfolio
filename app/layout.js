import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import ClientGTM from "./components/helper/client-gtm";
import ClientToast from "./components/helper/client-toast";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ravi Pratap Singh - Software Engineer",
  description:
    "This is the portfolio of Ravi Pratap Singh. I am a Software Engineer experienced in React.js, TypeScript, and Mapbox integration. I specialize in implementing performance optimizations and developing configurable UI components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ClientToast />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <ClientGTM />
      </body>
    </html>
  );
}
