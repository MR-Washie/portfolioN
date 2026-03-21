import { Geist, Geist_Mono } from "next/font/google";
import AdminSidebar from "../component/AdminSidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammad Ragib",
  description: "Mohammad Ragib",
  description: "Mohammad Ragib Nitp",
  description: "Mohammad Ragib nit patna",
};

export default function RootLayout({ children }) {
  return (

    <div>
      <AdminSidebar />
      <div className="ml-64">
        {children}
      </div>
    </div>

  );
}
