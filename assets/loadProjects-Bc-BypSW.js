import{t as e}from"./nav-CkvKuC5e.js";import{t}from"./sanityClient-DgA2SV1W.js";var n={type:{Poslovni:`Commercial`,Urbanizam:`Urbanism`,Stambeni:`Residential`,Kuća:`Home`,Javni:`Public`},phase:{Idejni:`Conceptual`,Glavni:`Main`,Enterijer:`Interior`},contest:{Konkurs:`Competition`,Nagrađen:`Awarded`,Izveden:`Built`}};function r(e,t){return t===`en`?{...e,type:(e.type||[]).map(e=>n.type[e]||e),phase:(e.phase||[]).map(e=>n.phase[e]||e),contest:(e.contest||[]).map(e=>n.contest[e]||e)}:e}async function i(e=`sr`){return(await t.fetch(`*[_type == "project"] | order(sortOrder asc) {
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
    }`,{language:e})).map(t=>r(t,e))}async function a(e,n=`sr`){return t.fetch(`*[_id == $id]{
        "images":coalesce(images[]{
            alt,
            "url": asset->url
          }),
          "mobileImages":coalesce(mobileImages[]{
            alt,
            "url": asset->url
          })
      }`,{id:e,language:n})}async function o(e,n=`sr`){return t.fetch(`*[slug.current == $slug]{
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
     }`,{slug:e,language:n})}var s={lang:null,data:null};async function c(){let t=e.language||`sr`,n=t===`en`?`projects_en.json`:`projects.json`;if(s.data&&s.lang===t)return s.data;try{let e=`?v=${Date.now()}`,r=await fetch(`/Saurus/${n}${e}`,{cache:`no-store`});if(!r.ok)throw Error(`HTTP error! status:${r.status}`);let i=await r.json();return s={lang:t,data:i},i}catch(e){return console.error(`Could not fetch projects!`,e),[]}}c();export{c as i,a as n,i as r,o as t};