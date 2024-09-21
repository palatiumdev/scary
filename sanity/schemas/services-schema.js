const services = {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
        {
            title: 'Services',
            name: 'services',
            type: 'array',
            of: [{
                type: "object",
                name: "service",
                fields: [
                    {
                        name: "icon",
                        title: "Icon",
                        type: "image"
                    },
                    {
                        name: 'text',
                        title: 'Text',
                        type: 'string',
                    },
                ]
            }
            ]
        },
    ]
}

export default services;
