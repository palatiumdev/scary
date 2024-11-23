const home = {
    name: "home",
    title: "Home",
    type: "document",
    //add fields for sanity
    fields: [
        {
            name: 'heroText',
            title: 'Hero text',
            type: "array",
            of: [{
                type: "block",
                marks: {
                    annotations: [{ type: 'textColor', }]
                },
            }]
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
            title: 'Showcase',
            name: 'showcase',
            type: 'array',
            of: [{
                type: "object",
                name: "showcase",
                fields: [
                    { type: "string", name: "Title" },
                    {
                        title: 'Showcase Videos',
                        name: 'showcaseVideos',
                        type: 'array',
                        of: [{
                            type: "object",
                            name: "video",
                            fields: [
                                { type: "string", name: "Title" },
                                { type: "string", name: "videoId" },
                            ]
                        }
                        ]
                    },
                    { type: "string", name: "showcaseText" },
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
            title: 'Shorts testimonials',
            name: 'shortsTestimonials',
            type: 'array',
            of: [{
                type: "object",
                name: "shortsTestimonial",
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
            title: 'Stats',
            name: 'stats',
            type: 'array',
            of: [{
                type: "object",
                name: "stat",
                fields: [
                    { type: "string", name: "number" },
                    { type: "string", name: "text" },
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
    ]
}

export default home;

