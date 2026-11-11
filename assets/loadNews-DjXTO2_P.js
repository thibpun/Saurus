import{t as e}from"./sanityClient-zoRskoEF.js";async function t(t=`sr`){return await e.fetch(`*[_type == "news" && hide!=true] | order(sortOrder asc) {
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
    }`,{language:t})}async function n(t,n=`sr`){return await e.fetch(`*[_type == "news" && slug.current == $slug] | order(sortOrder asc) {
        "title": select(
            $language == "en" => titleEn,
            title
        ),


        "bannerImage": bannerImage.asset->url,
        "articleContent": select(
            $language == "en" => articleContentEn,
            articleContent
        ),
    }`,{slug:t,language:n})}export{t as n,n as t};