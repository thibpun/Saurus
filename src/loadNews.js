import i18next from "./i18n.js";

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

getNews();

