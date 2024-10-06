async function getViews(videoId) {
    const API_KEY = process.env.API_KEY;
    const VIDEO_STATS_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    try {
        const res = await fetch(VIDEO_STATS_URL);

        // Check if the response is okay
        if (!res.ok) {
            throw new Error(`API request failed with status: ${res.status}`);
        }

        const data = await res.json();

        // Check if the response has the required data
        if (!data.items || data.items.length === 0) {
            throw new Error(`No video found with ID: ${videoId}`);
        }

        const viewCount = Number(data.items[0].statistics.viewCount);

        // Ensure viewCount is a valid number
        if (isNaN(viewCount)) {
            throw new Error(`Invalid view count for video ID: ${videoId}`);
        }

        return viewCount;

    } catch (error) {
        console.error(`Error fetching statistics for video ${videoId}:`, error);
        return 0; // Default to 0 if any error occurs
    }

}

export default getViews;
