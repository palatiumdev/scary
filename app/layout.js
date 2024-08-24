import localFont from 'next/font/local';

import "@/Styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Shorts from '@/components/Carousel/Shorts';
import ContactText from '@/components/Contanct/ContactText';

const tommy = localFont({ src: '../public/Tommy.woff2', variable: "--font-tommy" });
const regular = localFont({ src: '../public/Regular.woff', variable: "--font-regular" });

export const metadata = {
  title: 'ErosFx',
  openGraph: {
    title: 'ErosFx',
    description: "ErosFx Portfolio",
    url: 'https://erosfx.co/',
    siteName: 'ErosFx',
    images: [
      {
        url: 'https://i.postimg.cc/nhxkTdQx/banner.jpg',
        width: 800,
        height: 600,
      }
    ],
    twitter: {
      images: [
        {
          url: 'https://i.postimg.cc/nhxkTdQx/banner.jpg',
          width: 800,
          height: 600.
        },
      ]
    }
  },

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tommy.variable} ${regular.variable} font-sans bg-BGaccent  text-white`} >
        {children}
      </body>
    </html>
  );
}
