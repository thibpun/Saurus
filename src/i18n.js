import i18next from "i18next";

const resources = {
  sr: {
    translation: {
      home: {
        featuredProjects: "Istaknuti projekti",
        galleryLabel: "Galerija arhitektonskih projekata",
      
        slide1: {
          category: "urbanizam — Mesto, Godina",
          title: "Naziv projekta 1",
          imageAlt: "Moderna minimalistička vila",
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in tempora veritatis autem error delectus sequi rerum, sint quaerat ut molestias facilis id, fuga dolor exercitationem fugit dolore, ducimus aperiam?",
          description2:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quos nostrum, maiores dolore labore velit dolorem laborum error sapiente hic?"
        },
      
        slide2: {
          category: "stambeni — mesto, godina",
          title: "Naziv projekta 2",
          imageAlt: "Futuristička višespratnica",
          description1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nobis ducimus sint illo! A, nulla odit ea, quasi expedita at veniam et, corrupti aliquam ab laborum sed asperiores rerum.",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem dolorum necessitatibus sit laboriosam facilis harum libero, sunt ipsum nobis?"
        },
      
        slide3: {
          category: "enterijer — mesto, godina",
          title: "Naziv projekta 3",
          imageAlt: "Projekat enterijera",
          description1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nobis ducimus sint illo! A, nulla odit ea, quasi expedita at veniam et, corrupti aliquam ab laborum sed asperiores rerum.",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem dolorum necessitatibus sit laboriosam facilis harum libero, sunt ipsum nobis?"
        },
      
        slide4: {
          category: "poslovni — mesto, godina",
          title: "Naziv projekta 4",
          imageAlt: "Projekat poslovnog objekta",
          description1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nobis ducimus sint illo! A, nulla odit ea, quasi expedita at veniam et, corrupti aliquam ab laborum sed asperiores rerum.",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem dolorum necessitatibus sit laboriosam facilis harum libero, sunt ipsum nobis?"
        },
      
        previousSlide: "Prethodni slajd",
        nextSlide: "Sledeći slajd"
      },
      meta: {
        title:
          "Arhitektonski studio Saurus - Analize lokacija, projekti za legalizaciju",
      },

      navigation: {
        news: "Vesti",
        projects: "Projekti",
        studio: "Studio",
        english: "EN",
        serbian: "SR",
        menu: "Meni",
      },

      projectsPage: {
        title: "Projekti",
        filtersTitle: "Filteri",
        type: "Tip",
        phase: "Faza",
        status: "Status",
        year: "Godina",
        all: "Sve",
        types: {
          commercial: "Poslovni",
          urbanism: "Urbanizam",
          residential: "Stambeni",
          house: "Kuća",
          public: "Javni",
        },
        phases: {
          conceptual: "Idejni",
          main: "Glavni",
          interior: "Enterijer",
        },
        statuses: {
          competition: "Konkurs",
          awarded: "Nagrađen",
          built: "Izveden",
        },
      },

      about: {
        heading: "O studiju",

        paragraph1:
          "Osnovan 2007. godine, Saurus je arhitektonski studio za unapređenje prostora za život običnih ljudi sa težnjom da se uključi što širi krug uticaja bez izuzetaka i time postigne maksimalan broj rešenih problema ugrađenih u harmoničnu celinu. Arhitekturu ne shvatamo kao modni trend. Svako rešenje zasnivamo na kontekstu i na klasičnim, neprolaznim vrednostima, utemeljenim na prirodi stvari.",

        paragraph2:
          "Potvrdu da smo krenuli pravim putem, i podstrek da tako nastavimo, dobili smo na samom početku od cenjenih profesora Arhitektonskog fakulteta u Beogradu koji su nas kao predsednici žirija nagradili na tri domaća anonimna konkursa.",

        paragraph3:
          "Imamo iza sebe veliki broj objekata, uglavnom izvedenih. Projekti variraju od dogradnji, rekonstrukcija, enterijera, projekata porodičnih kuća, stambeno–poslovnih objekata, do većih stambenih kompleksa, trgovačkih i turističkih objekata, javnih površina i trgova. Pritom nam cilj nikada nije bio kvantitet, već kvalitet.",

        paragraph4:
          "Arhitektonski studio Saurus pruža usluge projektovanja celokupne tehničke dokumentacije potrebne za gradnju, ozakonjenja – legalizacije postojećih objekata, pomoći u odabiru i urbanističkoj analizi lokacije, parcele i pripremi dokumentacije, zajednički rad sa krajnjim korisnicima, nadzor i savetodavnu podršku tokom celog procesa koji vodi useljenom objektu.",

        paragraph5:
          "Svaki objekat prvo „izgradimo“ u virtuelnoj stvarnosti prostornog informacionog modela, što svodi broj grešaka u sinhronizaciji delova projekta na minimum i znatno doprinosi jasnijoj komunikaciji, kako sa investitorom, tako i sa krajnjim korisnicima kroz vizuelizacije i prezentacije, kataloge stanova, enterijerska rešenja i slično.",

        paragraph6:
          "Naš cilj je da se podigne kvalitet izvedenih objekata prosečne cene izgradnje za svakodnevni život običnog čoveka – od porodičnih kuća preko stambenih višeporodičnih objekata do poslovnih i drugih objekata.",

        paragraph7:
          "Naš princip je bliska saradnja sa investitorima u čijoj smo ulozi i sami bili na nekoliko građevinskih poduhvata, i odlično se upoznali sa interesima i problemima ovog posla.",

        paragraph8:
          "Studio Saurus čine arhitekti Jelena i Srđan Tomić uz podršku partnera i honorarno angažovanih kolega koji pokrivaju različite specijalističke oblasti. Težimo usklađivanju svih delova projektne dokumentacije u skladnu celinu sa minimumom grešaka čime smanjujemo nepotrebne troškove investitora, ali uvek uz maksimalni mogući kvalitet u datim uslovima.",
      },

      contact: {
        heading: "Kontakt",
        details: "Podaci",
        email: "E-mail:",
        currentAccount:"Tekući račun: 265-1740310001205-24",
        companyInfo:"Matični broj: 61640894\u00A0\u00A0\u00A0PIB: 106107446",
      },

      personnel: {
        architect: "Arhitekta",
        urbanArchitect: "Arhitekta urbanista",
        electricalEngineer: "D.I. Elektrotehnike",
      },

      awards: {
        heading: "Nagrade",

        award1: {
          title: "Prva nagrada i glavni projekat",
          description:
            "Konkursno rešenje trga u Beočinu u organizaciji Lafarge BFC d.o.o. 2009. Članovi žirija bili su predsednik žirija Bogdan Cvejić, „Lafaržov“ arhitekta iz Pariza Leopold Lombard, profesor Arhitektonskog fakulteta u Beogradu Zoran Lazović.",
        },

        award2: {
          title: "Treća nagrada",
          description:
            "Konkursno rešenje na temu Japanska česma na Kalemegdanu u organizaciji GSP Beograd 2010. Predsednik žirija konkursa Branislav Mitrović, redovni profesor Arhitektonskog fakulteta.",
        },

        award3: {
          title: "Treća povišena nagrada",
          description:
            "Konkursno rešenje objekta pijace Senjak sa podzemnom garažom i javnih površina 2010. Predsednik žirija konkursa Vasilije Milunović, redovni profesor Arhitektonskog fakulteta.",
        },
      },

      images: {
        logo: "Studio Saurus logo",
        about: "Saurus architectural studio",
        srdjan: "Srđan Tomić",
        jelena: "Jelena Tomić",
        marko: "Marko Ranđelović",
        miroslav: "Miroslav Kočmaruk",
      },
    },
  },

  en: {
    translation: {
      home: {
        featuredProjects: "Featured Projects",
        galleryLabel: "Architecture Projects Gallery",
      
        slide1: {
          category: "urban planning — Place, Year",
          title: "Project Name 1",
          imageAlt: "Modern minimalist villa",
          description1:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in tempora veritatis autem error delectus sequi rerum, sint quaerat ut molestias facilis id, fuga dolor exercitationem fugit dolore, ducimus aperiam?",
          description2:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quos nostrum, maiores dolore labore velit dolorem laborum error sapiente hic?"
        },
      
        slide2: {
          category: "residential — place, year",
          title: "Project Name 2",
          imageAlt: "Futuristic high-rise building",
          description1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nobis ducimus sint illo! A, nulla odit ea, quasi expedita at veniam et, corrupti aliquam ab laborum sed asperiores rerum.",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem dolorum necessitatibus sit laboriosam facilis harum libero, sunt ipsum nobis?"
        },
      
        slide3: {
          category: "interior — place, year",
          title: "Project Name 3",
          imageAlt: "Interior architecture project",
          description1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nobis ducimus sint illo! A, nulla odit ea, quasi expedita at veniam et, corrupti aliquam ab laborum sed asperiores rerum.",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem dolorum necessitatibus sit laboriosam facilis harum libero, sunt ipsum nobis?"
        },
      
        slide4: {
          category: "commercial — place, year",
          title: "Project Name 4",
          imageAlt: "Commercial architecture project",
          description1:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nobis ducimus sint illo! A, nulla odit ea, quasi expedita at veniam et, corrupti aliquam ab laborum sed asperiores rerum.",
          description2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem dolorum necessitatibus sit laboriosam facilis harum libero, sunt ipsum nobis?"
        },
      
        previousSlide: "Previous Slide",
        nextSlide: "Next Slide"
      },
      meta: {
        title:
          "Saurus Architectural Studio - Site Analysis, Building Legalization Projects",
      },

      navigation: {
        news: "News",
        projects: "Projects",
        studio: "Studio",
        english: "EN",
        serbian: "SR",
        menu: "Menu",
      },

      projectsPage: {
        title: "Projects",
        filtersTitle: "Filters",
        type: "Type",
        phase: "Phase",
        status: "Status",
        year: "Year",
        all: "All",
        types: {
          commercial: "Commercial",
          urbanism: "Urbanism",
          residential: "Residential",
          house: "House",
          public: "Public",
        },
        phases: {
          conceptual: "Conceptual",
          main: "Main",
          interior: "Interior",
        },
        statuses: {
          competition: "Competition",
          awarded: "Awarded",
          built: "Built",
        },
      },

      about: {
        heading: "About the Studio",

        paragraph1:
          "Founded in 2007, Saurus is an architectural studio dedicated to improving the spaces in which everyday people live. We seek to take as broad a range of influences into account as possible, with the aim of resolving as many practical problems as possible within a harmonious whole. We do not see architecture as a fashion trend. Every solution is based on its context and on classical, timeless values grounded in the nature of things.",

        paragraph2:
          "We received confirmation that we were on the right path, as well as encouragement to continue in the same direction, from respected professors of the Faculty of Architecture in Belgrade at the very beginning of our practice. Serving as jury chairs, they awarded us prizes in three national anonymous architectural competitions.",

        paragraph3:
          "We have completed a large number of projects, most of which have been built. Our work ranges from extensions, renovations and interiors to family houses, residential and commercial buildings, larger residential complexes, commercial and tourist buildings, public spaces and squares. Our goal has never been quantity, but quality.",

        paragraph4:
          "Saurus Architectural Studio provides complete architectural and technical documentation required for construction, legalization of existing buildings, assistance with site selection and urban planning analysis, preparation of documentation, collaboration with end users, supervision, and advisory support throughout the entire process leading to the completion and occupancy of a building.",

        paragraph5:
          "We first 'build' every project in the virtual environment of a building information model, which minimizes errors in coordinating the various parts of the project. This significantly improves communication with both the investor and end users through visualizations and presentations, apartment catalogues, interior design solutions and similar materials.",

        paragraph6:
          "Our goal is to raise the quality of completed buildings within average construction budgets for everyday life — from family houses and multi-family residential buildings to commercial and other types of buildings.",

        paragraph7:
          "Our principle is close cooperation with investors. We have also taken on the role of investor ourselves in several construction projects, giving us a thorough understanding of the interests and challenges involved in this business.",

        paragraph8:
          "Studio Saurus consists of architects Jelena and Srđan Tomić, supported by partners and freelance colleagues covering various specialist fields. We strive to coordinate all parts of the project documentation into a coherent whole with a minimum of errors, reducing unnecessary costs for investors while always achieving the highest possible quality under the given circumstances.",
      },

      contact: {
        heading: "Contact",
        details: "Company Details",
        email: "E-mail:",
        currentAccount:"Account no: 265-1740310001205-24",
        companyInfo:"Company no: 61640894\u00A0\u00A0\u00A0TIN: 106107446",
      },

      personnel: {
        architect: "Architect",
        urbanArchitect: "Architect / Urban Planner",
        electricalEngineer: "Electrical Engineer",
      },

      awards: {
        heading: "Awards",

        award1: {
          title: "First Prize and Main Design",
          description:
            "Competition proposal for the town square in Beočin, organized by Lafarge BFC d.o.o. in 2009. The jury members were jury chair Bogdan Cvejić, Lafarge's Paris-based architect Leopold Lombard, and Zoran Lazović, professor at the Faculty of Architecture in Belgrade.",
        },

        award2: {
          title: "Third Prize",
          description:
            "Competition proposal for the Japanese Fountain at Kalemegdan, organized by GSP Belgrade in 2010. The competition jury was chaired by Branislav Mitrović, full professor at the Faculty of Architecture.",
        },

        award3: {
          title: "Third Prize with Special Mention",
          description:
            "Competition proposal for the Senjak market building with an underground garage and public spaces, 2010. The competition jury was chaired by Vasilije Milunović, full professor at the Faculty of Architecture.",
        },
      },

      images: {
        logo: "Studio Saurus logo",
        about: "Saurus architectural studio",
        srdjan: "Srđan Tomić",
        jelena: "Jelena Tomić",
        marko: "Marko Ranđelović",
        miroslav: "Miroslav Kočmaruk",
      },
    },
  },
};

// Detect previously selected language.
const savedLanguage = localStorage.getItem("language") || "sr";

await i18next.init({
  lng: savedLanguage,
  fallbackLng: "sr",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

function updatePageLanguage() {
  document.documentElement.lang = i18next.language;

  // Translate text content without removing inner HTML elements (like icons)
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (key) {
      if (element.children.length > 0) {
        // If element has HTML children, only target and replace its pure text nodes.
        Array.from(element.childNodes).forEach(child => {
          if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim() !== '') {
            // Replace the trimmed word to keep surrounding flex spacing/newlines intact
            child.nodeValue = child.nodeValue.replace(child.nodeValue.trim(), i18next.t(key));
          }
        });
      } else {
        // Standard replacement if it's just plain text
        element.textContent = i18next.t(key);
      }
    }
  });

  // Translate HTML attributes, e.g. alt, aria-label
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const key = element.dataset.i18nAttr;
    const attribute = element.dataset.i18nAttribute;

    if (key && attribute) {
      element.setAttribute(attribute, i18next.t(key));
    }
  });

  // Update the page title
  document.title = i18next.t("meta.title");

  // Show the language we can switch TO
  const languageToggle = document.querySelector("#language-toggle");

  if (languageToggle) {
    const nextLanguage = i18next.language === "sr" ? "en" : "sr";

    languageToggle.textContent =
      nextLanguage === "en"
        ? i18next.t("navigation.english")
        : i18next.t("navigation.serbian");

    languageToggle.setAttribute(
      "aria-label",
      nextLanguage === "en"
        ? "Switch to English"
        : "Prebaci na srpski"
    );
  }
}

// Set up the language switcher.
const languageToggle = document.querySelector("#language-toggle");

if (languageToggle) {
  languageToggle.addEventListener("click", async (event) => {
    event.preventDefault();

    const nextLanguage = i18next.language === "sr" ? "en" : "sr";

    await i18next.changeLanguage(nextLanguage);

    localStorage.setItem("language", nextLanguage);

    updatePageLanguage();
  });
}

// Initial translation
updatePageLanguage();

export default i18next;