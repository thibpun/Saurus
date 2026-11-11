import { sanityClient } from "./sanityClient.js";

export async function fetchNewsPreview(language = "sr") {
    const query = `*[_type == "news" && hide!=true] | order(sortOrder asc) {
        "title": select(
            $language == "en" => titleEn,
            title
        ),

        "slug": slug.current,

        "thumbnail": thumbnail.asset->url,
        "description": select(
            $language == "en" => descriptionEn,
            description
        ),
        date,
        "relatedProject": relatedProject-> slug.current
    }`;
    return await sanityClient.fetch(query, { language });
}
export async function fetchNewsArticle(slug, language = "sr") {
    const query = `*[_type == "news" && slug.current == $slug] | order(sortOrder asc) {
        "title": select(
            $language == "en" => titleEn,
            title
        ),


        "bannerImage": bannerImage.asset->url,
        "articleContent": select(
            $language == "en" => articleContentEn,
            articleContent
        ),
    }`;
    return await sanityClient.fetch(query, {slug, language });
}
