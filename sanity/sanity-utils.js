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
        groq`*[_type == "resume"]{
  "profileImageUrl": profileImage.asset->url,
  aboutTitle,
  aboutText,
  educationList[]{
    "institution": institution,
    "details": details,
    "certificate": certificate,
    "marks": marks,
    "logoUrl": logo.asset->url
  },
  workList[]{
    "title": title,
    "date": date,
    "details": details,
    "logoUrl": logo.asset->url,
    info
  },
  clients[]{
    "username": username,
    "profileImageUrl": profileImage.asset->url,
    "subCount": subCount,
    "channelId": channelId
  }
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
            }
        }`,
        {},
        { cache: "force-cache", next: { tags: ["services"] } }
    );
}
