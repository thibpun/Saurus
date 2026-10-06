import renderProjects from "./renderProjects";
import i18next from "./i18n.js";

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
        // const res=await fetch(`${import.meta.env.BASE_URL}projects.json`);
        
        if(!res.ok)throw new Error(`HTTP error! status:${res.status}`);

        const data=await res.json();
        cache={
            lang:currentLang,
            data:data
        }
        // renderProjects(data);
        return data;
    }
    catch(err){
        console.error("Could not fetch projects!",err);
        return [];
    }
}

getProjects();

