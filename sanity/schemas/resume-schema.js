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
                    { type: "string", name: "marks" },
                ]
            }
            ]
        },
    ]
}

export default resume;
