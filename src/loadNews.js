import i18next from "./i18n.js";
import { sanityClient } from "./sanityClient.js";

export async function fetchNewsPreview(language = "sr") {
    const query = `*[_type == "news"] | order(sortOrder asc) {
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

let cache = {
    lang: null,
    data: null
  };

export default async function getNews(){
    const currentLang = i18next.language || "sr";
    const fileName= currentLang==="en"?"news_en.json":"news.json";

    if(cache.data && cache.lang===currentLang) return cache.data;

    try{
        const cacheBuster = `?v=${Date.now()}`;
        const res = await fetch(`${import.meta.env.BASE_URL}${fileName}${cacheBuster}`, {
            cache: "no-store"
        });
        
        if(!res.ok)throw new Error(`HTTP error! status:${res.status}`);

        const data=await res.json();
        cache={
            lang:currentLang,
            data:data
        }
        return data;
    }
    catch(err){
        console.error("Could not fetch news!",err);
        return [];
    }
}

// getNews();

