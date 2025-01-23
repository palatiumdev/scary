/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yt3.ggpht.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async headers() {
        return [
             {
                source: '/', // Matches the home page
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400', // Cache for 24 hours
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
