import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../component/header/index";
import Footer from "../component/footer/index";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "next-app-14",
};

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR">
    
      <body className={'bg-slate-900 text-slate-200 ${vazirFont.className}'}>
      <Header/>
        <main className="p-5">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
