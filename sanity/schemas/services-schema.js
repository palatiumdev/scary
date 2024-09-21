const services = {
    name: "metadata",
    title: "Metadata",
    type: "document",
    fields: [
        {
            name: 'websiteTitle',
            title: 'Website title',
            type: 'string',
        },
        {
            name: 'siteUrl',
            title: 'Site URL',
            type: 'url',
        },

        {
            title: 'Services',
            name: 'services',
            type: 'array',
            of: [{
                type: "object",
                name: "service",
                fields: [
                    {
                        name: 'description',
                        title: 'Description',
                        type: 'string',
                    },
                    {
                        name: "embedBanner",
                        title: "Embed banner",
                        type: "image"
                    },
                ]
            }
            ]
        },
    ]
}

export default services;
