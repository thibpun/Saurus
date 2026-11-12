import { sanityClient } from "./sanityClient.js";
import { translateCategories } from "./categoryTranslations.js";

export async function fetchProjectsPreview(language = "sr") {
    const cacheKey = `projectsPreview_${language}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);

    const query = `*[_type == "project" && hide!=true] | order(sortOrder asc) {
        _id,
        "title": select(
            $language == "en" => titleEn,
            title
        ),

        "slug": slug.current,

        "thumbnail":coalesce(thumbnail{
            alt,
            "url": asset->url
        }),
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
    const translatedProjects=projects.map(project =>
        translateCategories(project, language)
    );
    
    try{
        sessionStorage.setItem(cacheKey, JSON.stringify(translatedProjects));
    }
    catch{}
    return translatedProjects;
}
export async function fetchProjectImages(id,language = "sr") {
    const cacheKey = `projectImages_${id}_${language}`;
    
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);

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

    const data = await sanityClient.fetch(query, { id,language });
    try{
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
    }
    catch{}
    return data;
}

export async function fetchProjectExpaned(slug,language="sr"){
    const cacheKey = `projectExpanded_${slug}_${language}`;
    
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);

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

    const data = await sanityClient.fetch(query, {slug, language });
    try{
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
    }
    catch{}
    return data;
}
