import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import AuthProvider from "@/service/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repair Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      
      <body className={inter.className}>
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
        </body>
    </html>
  );
}
