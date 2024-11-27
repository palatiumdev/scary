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
            showcase[] {
                Title,
                showcaseVideos[] {Title, videoId, isShort},
                showcaseText,
                channelId,
                testimonial
            },
            videos[] {
                Title,
                videoId,
                Username,
                channelId,
                testimonial
            },
            shortsTestimonials,
            shorts[] {
                videoId,
                title
            },
            stats[] {
                number,
                text
            },
            contact,
            contactButtonText,
            footerBackgroundText,
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
            aboutTitle,
            aboutCount,
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
        }`, {}, { cache: "force-cache", next: { tags: ["resume"] } }
    );
}

export async function getServices() {
    return client.fetch(
        groq`*[_type == "services"] {
            _id,
            _createdAt,
            services[] {
                "icon": icon.asset->url,
                text,
            },
        }`,
        {},
        { cache: "force-cache", next: { tags: ["services"] } }
    );
}

export async function getClients() {
    return client.fetch(
        groq`*[_type == "clients"] {
            _id,
            _createdAt,
            clients[] {
                username,
                "profileImage": profileImage.asset->url,
                subCount,
                channelId
            }
        }`, {}, { cache: "force-cache", next: { tags: ["clients"] } }
    );
}