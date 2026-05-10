// ==================== PERSISTENCE ====================

function saveToLocalStorage() {
    localStorage.setItem(
        "notfallplan_config",
        JSON.stringify(SECTION_CONFIG),
    );
    localStorage.setItem("notfallplan_data", JSON.stringify(DATA));
    localStorage.setItem(
        "notfallplan_kontakte",
        JSON.stringify(KONTAKTE),
    );
    localStorage.setItem(
        "notfallplan_custom",
        JSON.stringify(CUSTOM_SECTIONS),
    );
}

function loadFromLocalStorage() {
    if (localStorage.getItem("notfallplan_config"))
        SECTION_CONFIG = JSON.parse(
            localStorage.getItem("notfallplan_config"),
        );
    if (localStorage.getItem("notfallplan_data"))
        DATA = JSON.parse(localStorage.getItem("notfallplan_data"));
    if (localStorage.getItem("notfallplan_kontakte"))
        KONTAKTE = JSON.parse(
            localStorage.getItem("notfallplan_kontakte"),
        );
    if (localStorage.getItem("notfallplan_custom"))
        CUSTOM_SECTIONS = JSON.parse(
            localStorage.getItem("notfallplan_custom"),
        );
}
