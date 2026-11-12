import { sanityClient } from "./sanityClient.js";

export async function fetchNewsPreview(language = "sr") {

    const cacheKey = `newsPreview_${language}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);

    const query = `*[_type == "news" && hide!=true] | order(sortOrder asc) {
        "title": select(
            $language == "en" => titleEn,
            title
        ),

        "slug": slug.current,

        "thumbnail":coalesce(thumbnail{
            alt,
            "url": asset->url
        }),
        "description": select(
            $language == "en" => descriptionEn,
            description
        ),
        date,
        "relatedProject": relatedProject-> slug.current
    }`;
    const data = await sanityClient.fetch(query, { language });
    try{
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
    }
    catch{}
    return data;
}
export async function fetchNewsArticle(slug, language = "sr") {
    const cacheKey = `newsArticle_${slug}_${language}`;
    
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);

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
    const data = await sanityClient.fetch(query, {slug, language });
    try{
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
    }
    catch{}
    return data;
}
