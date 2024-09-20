
import { getMetadata } from '@/sanity/sanity-utils';


export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body >
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
