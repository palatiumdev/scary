import getVideos from "./getVideos";

export default async function getStats(playlistId) {
    const API_KEY = process.env.API_KEY;

    // Define the base URL for video statistics
    const VIDEO_STATS_URL = (videoId) => `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    try {
        // Fetch the list of videos in the playlist
        const videos = await getVideos(playlistId);

        // Fetch view counts for each video in parallel
        const videoDetailsPromises = videos.map(video =>
            fetch(VIDEO_STATS_URL(video))
                .then(res => res.json())
                .then(data => ({
                    id: video,
                    viewCount: Number(data.items[0].statistics.viewCount)
                }))
        );

        const videoDetails = await Promise.all(videoDetailsPromises);

        // Prepare the response data
        const responseData = {
            videoViews: videoDetails.map(detail => detail.viewCount).reduce((accumulator, currentValue) => accumulator + currentValue, 0),
            totalVideos: videos.length,
        };


        // Return the response data
        return responseData;
    } catch (error) {
        console.error('Error fetching video statistics:', error);
        return { error: 'Failed to fetch video statistics' };
    }
}
