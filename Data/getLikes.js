export default async function getLikes(videoId) {
    const API_KEY = process.env.API_KEY;
    const VIDEO_STATS_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    try {
        // Fetch the video stats without revalidation
        const statsResponse = await fetch(VIDEO_STATS_URL);

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

        // Return likes as a number (it's a string in API)
        return Number(likes);

    } catch (error) {
        console.error('Error fetching video likes:', error);
        throw error;
    }
}
