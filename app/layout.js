import localFont from 'next/font/local';

import "@/Styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Shorts from '@/components/Carousel/Shorts';
import ContactText from '@/components/Contanct/ContactText';

const tommy = localFont({ src: '../public/Tommy.woff2', variable: "--font-tommy" });
const regular = localFont({ src: '../public/Regular.woff', variable: "--font-regular" });

export const metadata = {
  title: 'Vfxpjb - Video editing portfolio',
  openGraph: {
    title: 'Explore my video editing portfolio',
    description: "Experienced video editor available for new projects. Contact me today 📩",
    url: 'https://vfxpjb.vercel.app/',
    siteName: 'Vfxpjb - Video editing portfolio',
    images: [
      {
        url: 'https://i.postimg.cc/pTCt7TRC/banner.jpg',
        width: 800,
        height: 600,
      }
    ],
    twitter: {
      images: [
        {
          url: 'https://i.postimg.cc/pTCt7TRC/banner.jpg',
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
