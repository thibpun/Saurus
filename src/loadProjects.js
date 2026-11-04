import i18next from "./i18n.js";
import { sanityClient } from "./sanityClient.js";
import { translateCategories } from "./categoryTranslations.js";

export async function fetchProjectsPreview(language = "sr") {
    const query = `*[_type == "project"] | order(sortOrder asc) {
        _id,
        sortOrder,

        "title": select(
            $language == "en" => titleEn,
            title
        ),

        "slug": slug.current,

        "thumbnail": thumbnail.asset->url,
        "thumbnailDescription": select(
            $language == "en" => thumbnailDescriptionEn,
            thumbnailDescription
        ),
        "year": coalesce(year, []),
        "type": coalesce(type, []),
        "phase": coalesce(phase, []),
        "contest": coalesce(contest, []),
        expand
    }`;
    const projects=await sanityClient.fetch(query, { language });
    return projects.map(project =>
        translateCategories(project, language)
    );
}
export async function fetchProjectImages(id,language = "sr") {
    const query = `*[_id == $id]{
        "images":coalesce(images[]{
            alt,
            "url": asset->url
          }),
          "mobileImages":coalesce(mobileImages[]{
            alt,
            "url": asset->url
          })
      }`;

    return sanityClient.fetch(query, { id,language });
}

export async function fetchProjectExpaned(slug,language="sr"){
    const query = `*[slug.current == $slug]{
       "title": select(
           $language == "en" => titleEn,
           title
       ),
     
       "thumbnail": thumbnail.asset->url,
       "thumbnailDescription": select(
           $language == "en" => thumbnailDescriptionEn,
           thumbnailDescription
       ),
       "year": coalesce(year, []),
       "client": select(
           $language == "en" => clientEn,
           client
       ),
       "location": select(
           $language == "en" => locationEn,
           location
       ),
       "description": select(
           $language == "en" => descriptionEn,
           description
       ),
       "gross": select(
           $language == "en" => grossEn,
           gross
       ),
       "status": select(
           $language == "en" => statusEn,
           status
       ),
       "descriptionLong": select(
           $language == "en" => descriptionLongEn,
           descriptionLong
       ),
       "images":coalesce(images[]{
        alt,
        "url": asset->url
        }),
        "mobileImages":coalesce(mobileImages[]{
            alt,
            "url": asset->url
        })       
     }`;

    return sanityClient.fetch(query, {slug, language });
}

let cache = {
    lang: null,
    data: null
  };

export default async function getProjects(){
    const currentLang = i18next.language || "sr";
    const fileName= currentLang==="en"?"projects_en.json":"projects.json";

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
        console.error("Could not fetch projects!",err);
        return [];
    }
}

getProjects();

