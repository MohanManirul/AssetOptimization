import {Hind_Siliguri, Roboto} from "next/font/google";
import LocalFont from "next/font/local"; 
import "./globals.css";

const MyLocalFont = LocalFont({
  src:'./fonts/SolaimanLipi.ttf',
  variable: "--local-font",
})

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
    // for single font <html lang="en" className={Siliguri.variable}> 
    <html lang="en" className={`${Siliguri.variable} ${roboto_font.variable} ${MyLocalFont.variable} `}> 
      <body>
        {children}
      </body>
    </html>
  );
}
