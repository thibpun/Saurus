import applyFilters from "./filters";
import getProjects from "./loadProjects";
import i18next from "./i18n.js";

const isMobile = window.matchMedia("(max-width: 65rem)");

const filterContainer=document.getElementById('filter-container');

filterContainer.addEventListener('click',(e)=>{
    const btn=e.target.closest('button');
    if(!btn || btn.hasAttribute('aria-haspopup'))return;

    const filterGroup=btn.closest('ul');
    if(!filterGroup)return;

    const allButtonsInGroup=Array.from(filterGroup.querySelectorAll('button'));
    const sveButton=allButtonsInGroup[0];
    const isSveButton= btn===sveButton;
    
    if(isSveButton){
        allButtonsInGroup.forEach(button=>updateButtonState(button,sveButton===button));
    }
    else{
        const isActive=btn.classList.contains('active');
        updateButtonState(btn,!isActive);
        if(!isActive) updateButtonState(sveButton,false);
    }
    const selectedCategories=allButtonsInGroup.slice(1);
    const isAnyCategoryActive=selectedCategories.some(button=>button.classList.contains('active'));
    if(!isAnyCategoryActive){
        updateButtonState(sveButton,true);
    }
    applyFilters();
})



function updateButtonState(button,isActive){
    button.classList.toggle('active',isActive);

    if(button.hasAttribute('aria-pressed')){
        button.setAttribute('aria-pressed',isActive);
    }
    else if(button.hasAttribute('aria-selected')){
        button.setAttribute('aria-selected',isActive);

        const checkbox=button.querySelector('iconify-icon');
        if(checkbox){
            checkbox.setAttribute('icon',isActive ? 'ri:checkbox-fill' : 'ri:checkbox-blank-line');
        }
    }
}



if(!isMobile.matches){
    const yearFilterContainer=document.getElementById('year-filter');
    const yearMainBtn=yearFilterContainer.querySelector('button[aria-haspopup]');
    yearFilterContainer.addEventListener('mouseenter',()=>{
        yearMainBtn.setAttribute('aria-expanded','true');
    })
    yearFilterContainer.addEventListener('mouseleave',()=>{
        yearMainBtn.setAttribute('aria-expanded','false');
    })
}

if(isMobile.matches){
    const typeFilterContainer=document.getElementById('type-filter');
    const typeBtns=typeFilterContainer.querySelectorAll('ul button');
    typeBtns[0].removeAttribute("aria-pressed");
    typeBtns[0].setAttribute("aria-selected","true");
    Array.from(typeBtns).slice(1).forEach(button=>{
        button.removeAttribute("aria-pressed");
        button.setAttribute("aria-selected","false");
    });

    const phaseFilterContainer=document.getElementById('phase-filter');
    const phaseBtns=phaseFilterContainer.querySelectorAll('ul button');
    phaseBtns[0].removeAttribute("aria-pressed");
    phaseBtns[0].setAttribute("aria-selected","true");
    Array.from(phaseBtns).slice(1).forEach(button=>{
        button.removeAttribute("aria-pressed");
        button.setAttribute("aria-selected","false");
    });

    const statusFilterContainer=document.getElementById('status-filter');
    const statusBtns=statusFilterContainer.querySelectorAll('ul button');
    statusBtns[0].removeAttribute("aria-pressed");
    statusBtns[0].setAttribute("aria-selected","true");
    Array.from(statusBtns).slice(1).forEach(button=>{
        button.removeAttribute("aria-pressed");
        button.setAttribute("aria-selected","false");
    });


    const dropdownToggles=document.querySelectorAll('button[aria-haspopup="listbox"]');
    dropdownToggles.forEach(button=>{
        button.addEventListener('click',(event)=>{
            event.stopPropagation();
            const isExpanded=button.getAttribute('aria-expanded')==='true';
            dropdownToggles.forEach(button=>button.setAttribute('aria-expanded','false'));

            if(!isExpanded){
                button.setAttribute('aria-expanded','true');
            }
        })
    })
    document.addEventListener('click',(event)=>{
        if(!event.target.closest('.filter-subcontainer') && !event.target.closest('#year-filter') && !event.target.closest(`ul[role="listbox"]`)){
            dropdownToggles.forEach(button=>button.setAttribute('aria-expanded','false'));
        }
    })
}


async function loadYearFilter(){
    const yearsUL = document.querySelector('#year-filter ul');
    const projects=await getProjects();
    const years = [];

    projects.forEach((project)=>{
        project.year.forEach((year)=>{
            if (!years.includes(year)) {
                years.push(year);
              }
        })
        
    })
    years.reverse();

    const currentLang = i18next.language || "sr";
    const All= currentLang==="en"?"All":"Sve";
    let innerHtml=`<li><button type="button" role="option" aria-selected="true" class="active">
    <iconify-icon icon="ri:checkbox-fill"></iconify-icon>${All}
  </button></li>`;
    years.forEach((year)=>{
        innerHtml+=`<li><button type="button" role="option" aria-selected="false">
        <iconify-icon icon="ri:checkbox-blank-line"></iconify-icon>${year}
      </button></li>`;
    })
    yearsUL.innerHTML=innerHtml;

}
loadYearFilter();

i18next.on('languageChanged', async () => {
    loadYearFilter();
  });