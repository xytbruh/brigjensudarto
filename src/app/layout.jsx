import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "brigjen sudarto | calon dpr-ri lampung",
  description:
    "Berkarya, Bersatu, Sejahtera Bersama Sudarto untuk Lampung! Mewakili suara rakyat Tulang Bawang Barat dan Mesuji, saya siap menjadi perwakilan yang setia dan berkomitmen di DPR Provinsi Lampung. Dengan visi untuk kemajuan daerah dan kepentingan masyarakat, mari bersama kita bangun perubahan yang nyata. Suara Anda adalah kekuatan kita, mari bergerak maju bersama menuju masa depan yang lebih baik. Bersama- sama, kita dapat mewujudkan harapan dan kebutuhan kita semua.",
  keywords: "calon dpr-ri lampung, brigjen sudarto, sudarto, caleg lampung, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
