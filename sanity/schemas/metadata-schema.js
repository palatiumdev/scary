const metadata = {
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

export default metadata;
