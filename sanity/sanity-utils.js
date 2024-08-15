import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: "2024-08-10",
    useCdn: false,

})

//add groq query
export async function getHome() {
    return client.fetch(
        groq`*[_type == "home"] {
            _id,
            _createdAt,
        }` , {}, { cache: "force-cache", next: { tags: ["home"] } }  //TO DO: Web hook solution
    )
}