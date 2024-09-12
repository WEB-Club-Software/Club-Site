import type { Metadata } from "next";
import { Inter, Bebas_Neue} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({subsets: ["latin"],
  weight: ['400'],
});
export const metadata: Metadata = {
  title:{
    default:"Club de Software - ESPE",
    template:"%s"
  },
  description: "Software Club main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.className} >
      <body> {children}</body>
    </html>
  );
}
