import localFont from 'next/font/local';

import "@/Styles/globals.css";
import { getMetadata } from '@/sanity/sanity-utils';
import Header from '@/components/Header/Header';
import { getHome } from "@/sanity/sanity-utils";
import Footer from '@/components/Footer/Footer';
import { PortableText } from '@portabletext/react';

const tommy = localFont({ src: '../../public/Tommy.woff2', variable: "--font-tommy" });
const regular = localFont({ src: '../../public/Regular.woff', variable: "--font-regular" });


export default async function RootLayout({ children }) {
  const home = await getHome();

  return (
    <html lang="en">
      <body className={`${tommy.variable} ${regular.variable} font-sans bg-background  text-white`} >
        <div className='px-5 lg:px-32 py-8'>
          <Header />
        </div>
        {children}
        <div className="relative w-full overflow-x-clip flex flex-col bg-BGaccent">
          <Footer footerBackgroundText={home[0]?.footerBackgroundText} />
        </div>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }) {
  const metadataContent = await getMetadata();
  return {
    title: metadataContent[0]?.websiteTitle,
    description: metadataContent[0]?.description,
    openGraph: {
      title: metadataContent[0]?.websiteTitle,
      description: metadataContent[0]?.description,
      url: metadataContent[0]?.websiteTitlesiteUrl,
      images: [
        {
          url: metadataContent[0]?.embedBanner,
          width: 800,
          height: 600,
        }
      ],
    },
    twitter: {
      images: [
        {
          url: metadataContent[0]?.embedBanner,
          width: 800,
          height: 600,
        },
      ],
    }
  }
}
