const categoryTranslations = {
    type: {
        "Poslovni": "Commercial",
        "Urbanizam": "Urbanism",
        "Stambeni": "Residential",
        "Kuća": "Home",
        "Javni": "Public"
    },

    phase: {
        "Idejni": "Conceptual",
        "Glavni": "Main",
        "Enterijer": "Interior"
    },

    contest: {
        "Konkurs": "Competition",
        "Nagrađen": "Awarded",
        "Izveden": "Built"
    }
};

export function translateCategories(project, language) {
    if (language !== "en") return project;

    return {
        ...project,
        type: (project.type || []).map(
            value => categoryTranslations.type[value] || value
        ),
        phase: (project.phase || []).map(
            value => categoryTranslations.phase[value] || value
        ),
        contest: (project.contest || []).map(
            value => categoryTranslations.contest[value] || value
        )
    };
}

export default categoryTranslations;