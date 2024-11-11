import {Hind_Siliguri, Roboto} from "next/font/google";
import "./globals.css";

const Siliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-siliguri",
})

const roboto_font = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Siliguri.variable} ${roboto_font.variable} `}>
      <body>
        {children}
      </body>
    </html>
  );
}
