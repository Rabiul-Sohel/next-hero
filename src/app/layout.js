import localFont from "next/font/local";
import "./globals.css";
import { Roboto, Poppins } from 'next/font/google'
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "This is Next hero to explore",
};
 
const roboto = Roboto({
  weight:[ "400"],
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //className={roboto.className}
        className={`${roboto.className} ${geistSans.variable} ${geistMono.variable}  antialiased `}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
