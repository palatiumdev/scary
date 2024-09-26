const resume = {
    name: "clients",
    title: "Clients",
    type: "document",
    fields: [
        {
            title: 'Clients',
            name: 'clients',
            type: 'array',
            of: [{
                type: "object",
                name: "client",
                fields: [
                    { type: "string", name: "username" },
                    { type: "file", name: "profileImage" },
                    { type: "string", name: "subCount" },
                    { type: "string", name: "channelId" },
                ]
            }
            ]
        },
    ]
}

export default resume;
