import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import ClientGTM from "./components/helper/client-gtm";
import ClientToast from "./components/helper/client-toast";
import LayoutWrapper from "./components/helper/layout-wrapper";
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ClientToast />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <ClientGTM />
      </body>
    </html>
  );
}
