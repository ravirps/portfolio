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
    <div className={inter.className} style={{ 
      background: 'linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 50%, #eef2ff 100%)',
      margin: 0,
      padding: 0,
      color: '#374151',
      minHeight: '100vh'
    }}>
      <ClientToast />
      {children}
    </div>
  );
}
