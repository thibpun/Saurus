import{t as e}from"./sanityClient-zoRskoEF.js";var t={type:{Poslovni:`Commercial`,Urbanizam:`Urbanism`,Stambeni:`Residential`,Kuća:`Home`,Javni:`Public`},phase:{Idejni:`Conceptual`,Glavni:`Main`,Enterijer:`Interior`},contest:{Konkurs:`Competition`,Nagrađen:`Awarded`,Izveden:`Built`}};function n(e,n){return n===`en`?{...e,type:(e.type||[]).map(e=>t.type[e]||e),phase:(e.phase||[]).map(e=>t.phase[e]||e),contest:(e.contest||[]).map(e=>t.contest[e]||e)}:e}async function r(t=`sr`){let r=`projectsPreview_${t}`,i=sessionStorage.getItem(r);if(i)return JSON.parse(i);let a=(await e.fetch(`*[_type == "project" && hide!=true] | order(sortOrder asc) {
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
    }`,{language:t})).map(e=>n(e,t));try{sessionStorage.setItem(r,JSON.stringify(a))}catch{}return a}async function i(t,n=`sr`){let r=`projectImages_${t}_${n}`,i=sessionStorage.getItem(r);if(i)return JSON.parse(i);let a=await e.fetch(`*[_id == $id]{
        "images":coalesce(images[]{
            alt,
            "url": asset->url
          }),
          "mobileImages":coalesce(mobileImages[]{
            alt,
            "url": asset->url
          })
      }`,{id:t,language:n});try{sessionStorage.setItem(r,JSON.stringify(a))}catch{}return a}async function a(t,n=`sr`){let r=`projectExpanded_${t}_${n}`,i=sessionStorage.getItem(r);if(i)return JSON.parse(i);let a=await e.fetch(`*[slug.current == $slug]{
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
     }`,{slug:t,language:n});try{sessionStorage.setItem(r,JSON.stringify(a))}catch{}return a}export{i as n,r,a as t};