const home = {
    name: "home",
    title: "Home",
    type: "document",
    //add fields for sanity
    fields: [
        {
            name: "profilePic",
            title: "Profile picture",
            type: "image",
        },
        {
            name: "headerButtonText",
            title: "Header button text",
            type: "string"
        },
        {
            name: "heroText",
            title: "Hero text",
            type: "string"
        },
        {
            name: "heroButtonText",
            title: "Hero button text",
            type: "string"
        },
        {
            name: "heroVideo",
            title: "Hero video",
            type: "file"
        },
        {
            title: 'Creators',
            name: 'creators',
            type: 'array',
            of: [{
                type: "object",
                name: "creator",
                fields: [
                    { type: "string", name: "Username" },
                    { type: "string", name: "channelId" },
                ]
            }
            ]
        },
        {
            title: 'Videos',
            name: 'videos',
            type: 'array',
            of: [{
                type: "object",
                name: "video",
                fields: [
                    { type: "string", name: "Title" },
                    { type: "string", name: "videoId" },
                    { type: "string", name: "Username" },
                    { type: "string", name: "channelId" },
                    { type: "string", name: "testimonial" },
                ]
            }
            ]
        },
        {
            title: 'Shorts',
            name: 'shorts',
            type: 'array',
            of: [{
                type: "object",
                name: "short",
                fields: [
                    { type: "string", name: "title" },
                    { type: "string", name: "videoId" },
                ]
            }
            ]
        },
        {
            name: "contact",
            title: "Contact text",
            type: "string"
        },
        {
            name: "contactButtonText",
            title: "Contact button text",
            type: "string"
        },
        {
            name: "footerBackgroundText",
            title: "Footer background text",
            type: "string"
        },
        {
            name: "footerText",
            title: "Footer text",
            type: "string"
        },
    ]
}

export default home;
