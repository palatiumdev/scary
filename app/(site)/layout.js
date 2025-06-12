import localFont from 'next/font/local';
import "@/Styles/globals.css";
import { getMetadata, getHome } from '@/sanity/sanity-utils';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Font setup
const tommy = localFont({ src: '../../public/Tommy.woff2', variable: "--font-tommy" });
const regular = localFont({ src: '../../public/Regular.woff', variable: "--font-regular" });

// Metadata for <head>
export async function generateMetadata() {
  const metadataContent = await getMetadata();
  const metadata = metadataContent[0];

  return {
    title: metadata.websiteTitle,
    description: metadata.description,
    openGraph: {
      title: metadata.websiteTitle,
      description: metadata.description,
      url: metadata.siteUrl,
      images: [
        {
          url: metadata.embedBanner,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: metadata.embedBanner,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

// Layout wrapper
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const home = await getHome();

  return (
    <html lang="en">
      <body className={`${tommy.variable} ${regular.variable} font-sans bg-background text-white`}>
        <div className="px-5 lg:px-16 py-8 w-full">
          <Header />
        </div>

        {children}

        <div className="relative w-full overflow-x-clip flex flex-col bg-BGaccent mt-8">
          <Footer footerBackgroundText={home[0]?.footerBackgroundText} />
        </div>
      </body>
    </html>
  );
}
