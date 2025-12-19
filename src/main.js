import { getButtonIcons, getSkins } from "./api.js";
import {
    renderTierFilterButtons,
    renderWeaponFilterButtons,
    renderSkinCards,
} from "./dom.js";

const filters = {
    weapons: [],
    tiers: [],
};

document.addEventListener("DOMContentLoaded", () => {
    getButtonIcons()
        .then((data) => {
            renderWeaponFilterButtons(data.weapons, filters.weapons);
            renderTierFilterButtons(data.tiers, filters.tiers);
        })
        .then(() => {
            renderSkinCards(getSkins());
        });
});
