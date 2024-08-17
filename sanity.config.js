import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from "./sanity/schemas"

const config = defineConfig({
    name: "Sanity",
    title: "Sanity Studio",
    projectId: "mvucg8wc",
    dataset: 'production',
    apiVersion: "2024-08-10",
    plugins: [structureTool()],
    basePath: "/admin",
    schema: { types: schemas }
})

export default config;

