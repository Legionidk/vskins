import { getButtonIcons } from "./api.js";
import { renderTierFilterButtons, renderWeaponFilterButtons } from "./dom.js";

const filters = {
    weapons: [],
    tiers: [],
};

document.addEventListener("DOMContentLoaded", () => {
    getButtonIcons().then((data) => {
        renderWeaponFilterButtons(data.weapons, filters.weapons);
        renderTierFilterButtons(data.tiers, filters.tiers);
    });
});
