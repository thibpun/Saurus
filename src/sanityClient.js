import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "mmme9kve",
    dataset: "production",
    apiVersion: "2026-11-04",
    useCdn: true
});