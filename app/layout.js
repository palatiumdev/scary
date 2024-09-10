import localFont from 'next/font/local';

import "@/Styles/globals.css";
import { getMetadata } from '@/sanity/sanity-utils';

const tommy = localFont({ src: '../public/Tommy.woff2', variable: "--font-tommy" });
const regular = localFont({ src: '../public/Regular.woff', variable: "--font-regular" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tommy.variable} ${regular.variable} font-sans bg-BGaccent  text-white`} >
        {children}
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
