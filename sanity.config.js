import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

import { defineConfig } from 'sanity'

import { structureTool } from 'sanity/structure'
import schemas from "./sanity/schemas"

const config = defineConfig({
    name: "Sanity",
    title: "Sanity Studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: "2024-08-10",
    plugins: [
        structureTool(),
        simplerColorInput({
            // Note: These are all optional
            defaultColorFormat: 'rgba',
            defaultColorList: [
                { label: 'Light', value: '#ffffff' },
                { label: 'Dark', value: '#333333' },
                { label: 'Brand', value: '#ca786d' },
                { label: 'Accent', value: '#626754' },
                { label: 'Custom...', value: 'custom' },
            ],
            enableSearch: true,
        })
    ],
    basePath: "/admin",
    schema: { types: schemas }
})

export default config;

