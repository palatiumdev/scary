import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: "2024-08-10",
    useCdn: process.env.NODE_ENV === 'production',
});

// Add GROQ query for home
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
        }`, {}, { cache: "force-cache", next: { tags: ["home"] } }
    );
}

// Add GROQ query for metadata
export async function getMetadata() {
    return client.fetch(
        groq`*[_type == "metadata"] {
            _id,
            _createdAt,
            websiteTitle,
            siteUrl,
            description,
            "embedBanner": embedBanner.asset->url
        }`, {}, { cache: "force-cache", next: { tags: ["metadata"] } }
    );
}

// Add GROQ query for resume
export async function getResume() {
    return client.fetch(
        groq`*[_type == "resume"] {
            _id,
            _createdAt,
            "profileImage": profileImage.asset->url,
            boutTitle,
            aboutText[] {
                ...  // Fetches the array of block content
            },
            educationList[] {
                "logo": logo.asset->url,
                institution,
                details,
                certificate,
                marks
            },
            workList[] {
                title,
                "logo": logo.asset->url,
                date,
                details,
                info[] {
                    ...  // Fetches the array of block content inside info
                }
            },
            clients,
        }`, {}, { cache: "force-cache", next: { tags: ["resume"] } }
    );
}