import { renderWeaponFilters, renderTierFilters } from "./dom.js";
import { getWeapons, getTiers } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    getWeapons().then((data) => {
        renderWeaponFilters(data);
    });

    getTiers().then((data) => {
        renderTierFilters(data);
    });
});
