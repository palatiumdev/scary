const resume = {
    name: "resume",
    title: "Resume",
    type: "document",
    fields: [
        {
            name: 'profileImage',
            title: 'Profile image',
            type: 'image',
        },
        {
            name: 'aboutTitle',
            title: 'About title',
            type: 'string',
        },
        {
            name: 'aboutCount',
            title: 'About count',
            type: 'string',
        },
        {
            name: 'aboutText',
            title: 'About text',
            type: "array",
            of: [{
                type: "block",
            }]
        },
        {
            title: 'Education list',
            name: 'educationList',
            type: 'array',
            of: [{
                type: "object",
                name: "education",
                fields: [
                    { type: "image", name: "logo" },
                    { type: "string", name: "institution" },
                    { type: "string", name: "details" },
                    { type: "string", name: "certificate" },
                    { type: "string", name: "marks" },
                ]
            }
            ]
        },
        {
            title: 'Work list',
            name: 'workList',
            type: 'array',
            of: [{
                type: "object",
                name: "work",
                fields: [
                    { type: "string", name: "title" },
                    { type: "image", name: "logo" },
                    { type: "string", name: "date" },
                    { type: "string", name: "details" },
                    {
                        name: 'info',
                        title: 'Info',
                        type: "array",
                        of: [{
                            type: "block",
                        }]
                    },
                ]
            }
            ]
        },

    ]
}

export default resume;
