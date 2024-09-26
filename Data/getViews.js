async function getViews(videoId) {

    const API_KEY = process.env.API_KEY;
    const VIDEO_STATS_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    try {
        const res = await fetch(VIDEO_STATS_URL);
        const data = await res.json();
        return Number(data.items[0].statistics.viewCount)

    } catch (error) {
        console.error(`Error fetching statistics for video ${videoId}:`, error);
        return 0
    }
}

export default getViews;
