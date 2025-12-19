import { getButtonIcons } from "./api";
import { renderTierFilterButtons, renderWeaponFilterButtons } from "./dom";

const filters = {
    weapons: [],
    tiers: [],
};

document.addEventListener("DOMContentLoaded", () => {
    getButtonIcons().then((data) => {
        renderWeaponFilterButtons(data.weapons);
        renderTierFilterButtons(data.tiers);
    });
});
