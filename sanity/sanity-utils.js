import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "9tjcuugs",
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

export async function getMetadata() {
    return client.fetch(
        groq`*[_type == "metadata"] {
            _id,
            _createdAt,
            websiteTitle,
            siteUrl,
            description,
            "embedBanner": embedBanner.asset->url
        }` , {}, { cache: "force-cache", next: { tags: ["metadata"] } }
    )
}
