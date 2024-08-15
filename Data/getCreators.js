export default async function getCreator(channelId) {

    const revalidationTTL = 3600;

    const API_KEY = process.env.API_KEY;

    const SUBS_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`;
    const PIC_URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${API_KEY}`;
    const USERNAME_URL = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${API_KEY}`;

    const [subsResponse, picResponse, usernameResponse] = await Promise.all([
        fetch(SUBS_URL, {}, { next: { revalidate: revalidationTTL } }),
        fetch(PIC_URL, {}, { next: { revalidate: revalidationTTL } }),
        fetch(USERNAME_URL, {}, { next: { revalidate: revalidationTTL } }),
    ]);

    if (!subsResponse.ok || !picResponse.ok || !usernameResponse.ok) {
        throw new Error('Failed to fetch data');
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
}
