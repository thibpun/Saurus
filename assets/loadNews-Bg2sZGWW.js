import{t as e}from"./sanityClient-DgA2SV1W.js";async function t(t=`sr`){let n=`newsPreview_${t}`,r=sessionStorage.getItem(n);if(r)return JSON.parse(r);let i=await e.fetch(`*[_type == "news" && hide!=true] | order(sortOrder asc) {
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
    }`,{language:t});try{sessionStorage.setItem(n,JSON.stringify(i))}catch{}return i}async function n(t,n=`sr`){let r=`newsArticle_${t}_${n}`,i=sessionStorage.getItem(r);if(i)return JSON.parse(i);let a=await e.fetch(`*[_type == "news" && slug.current == $slug] | order(sortOrder asc) {
        "title": select(
            $language == "en" => titleEn,
            title
        ),


        "bannerImage": bannerImage.asset->url,
        "articleContent": select(
            $language == "en" => articleContentEn,
            articleContent
        ),
    }`,{slug:t,language:n});try{sessionStorage.setItem(r,JSON.stringify(a))}catch{}return a}export{t as n,n as t};