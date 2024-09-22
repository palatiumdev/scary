export default async function getCreator(channelId, tiktokUserId) {

    const revalidationTTL = 3600;
    const API_KEY = process.env.API_KEY; // YouTube API key
    const TIKTOK_API_TOKEN = process.env.TIKTOK_API_TOKEN; // TikTok API token

    const SUBS_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`;
    const PIC_URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${API_KEY}`;
    const USERNAME_URL = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${API_KEY}`;

    try {
        // Try fetching data from YouTube API
        const [subsResponse, picResponse, usernameResponse] = await Promise.all([
            fetch(SUBS_URL, {}, { next: { revalidate: revalidationTTL } }),
            fetch(PIC_URL, {}, { next: { revalidate: revalidationTTL } }),
            fetch(USERNAME_URL, {}, { next: { revalidate: revalidationTTL } }),
        ]);

        if (!subsResponse.ok || !picResponse.ok || !usernameResponse.ok) {
            throw new Error('Failed to fetch data from YouTube');
        }

        const subsData = await subsResponse.json();
        const picData = await picResponse.json();
        const usernameData = await usernameResponse.json();

        const responseData = {
            subCount: Number(subsData.items[0].statistics.subscriberCount).toLocaleString('de-DE'),
            profileImage: picData.items[0].snippet.thumbnails.medium.url,
            username: usernameData.items[0].brandingSettings.channel.title,
        };

        return responseData;

    } catch (error) {
        console.error('YouTube API failed, trying TikTok API...');

        // Fallback to TikTok API if YouTube fails
        const TIKTOK_URL = `https://open.tiktokapis.com/v2/user/info/?id=${tiktokUserId}`;

        try {
            const tiktokResponse = await fetch(TIKTOK_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${TIKTOK_API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!tiktokResponse.ok) {
                throw new Error('Failed to fetch data from TikTok API');
            }

            const tiktokData = await tiktokResponse.json();

            const responseData = {
                subCount: tiktokData.data.follower_count.toLocaleString('de-DE'),
                profileImage: tiktokData.data.avatar_url,
                username: tiktokData.data.nickname,
            };

            return responseData;

        } catch (tiktokError) {
            throw new Error('Both YouTube and TikTok APIs failed: ' + tiktokError.message);
        }
    }
}
