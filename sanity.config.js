import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from "./sanity/schemas"

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set in environment variables');
}

const config = defineConfig({
    name: "Sanity",
    title: "Sanity Studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: "2024-02-13",
    plugins: [structureTool(), simplerColorInput({
        defaultColorFormat: 'rgba',
        defaultColorList: [
            { label: 'Red', value: '#8E3D5D' },
            { label: 'Custom...', value: 'custom' },
        ],
        enableSearch: true,
    })],
    basePath: "/admin",
    schema: { types: schemas }
})

export default config;

