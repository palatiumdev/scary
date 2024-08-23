import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "mvucg8wc",
    dataset: 'production',
    apiVersion: "2024-08-10",
    useCdn: false,

})

//add groq query
export async function getHome() {
    return client.fetch(
        groq`*[_type == "home"] {
            _id,
            _createdAt,
            "headerLogo": headerLogo.asset->url,
            "profilePic": profilePic.asset->url,
            headerButtonText,
            heroText,
            heroButtonText,
            "heroVideoUrl": heroVideo.asset->url,
            creators[] {
                Username,
                channelId
            },
            videos[] {
                Title,
                videoId,
                Username,
                channelId,
                testimonial
            },
            shorts[] {
                videoId,
                title
            },
            contact,
            contactButtonText,
            footerBackgroundText,
            footerText
}` , {}, { cache: "force-cache", next: { tags: ["home"] } }
    )
}