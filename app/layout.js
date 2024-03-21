import { Inter } from "next/font/google";
import "./globals.css";
import MobileLayout from "@/components/MobileLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "요양병원리스트",
  description: "쉽게 요양병원 검색하여 예약하기",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileLayout>{children}</MobileLayout>
      </body>
    </html>
  );
}
