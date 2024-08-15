export default async function getVideos(playlistId) {

    const revalidationTTL = 3600;

    const API_KEY = process.env.API_KEY;

    const PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`;

    const playlistResponse = await fetch(PLAYLIST_URL, {}, { next: { revalidate: revalidationTTL } })


    if (!playlistResponse.ok) {
        throw new Error('Failed to fetch data');
    }

    const playlistData = await playlistResponse.json();

    let videos = [];

    for (let i = 0; i < playlistData.pageInfo.totalResults; i++) {
        videos.push(playlistData.items[i].snippet.resourceId.videoId)
    }

    const responseData = videos;

    return responseData;
}
