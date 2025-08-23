import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import ClientToast from "../components/helper/client-toast";
import "../css/card.scss";
import "../css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biodata - Ravi Pratap Singh",
  description: "Marriage biodata of Ravi Pratap Singh - Software Engineer",
};

export default function BiodataLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientToast />
        {children}
      </body>
    </html>
  );
}
