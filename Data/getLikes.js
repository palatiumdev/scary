export default async function getLikes(videoId) {
    const revalidationTTL = 3600;

    const API_KEY = process.env.API_KEY;

    // Fetch statistics (including likes) for the single video
    const VIDEO_STATS_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    const statsResponse = await fetch(VIDEO_STATS_URL, {}, { next: { revalidate: revalidationTTL } });

    if (!statsResponse.ok) {
        throw new Error('Failed to fetch video statistics');
    }

    const statsData = await statsResponse.json();

    // Check if video data is available
    if (statsData.items.length === 0) {
        throw new Error('No data found for the provided video ID');
    }

    // Get the like count for the video
    const likes = statsData.items[0].statistics.likeCount;

    return likes

}
