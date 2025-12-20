import { getWeaponsData, getTiersData } from "./api.js";
import { renderTierFilterButtons, renderWeaponFilterButtons } from "./dom.js";

const weapons = {};
const tiers = {};
const filters = {
    weapons: [],
    tiers: [],
};

document.addEventListener("DOMContentLoaded", () => {
    Promise.all([getWeaponsData(weapons), getTiersData(tiers)])
        .then(() => {
            renderWeaponFilterButtons(weapons, filters);
            renderTierFilterButtons(tiers, filters);
        })
        .then(() => {
            document.querySelector(".loader").classList.add("hidden");
            document
                .querySelector(".filter-block-wrapper")
                .classList.remove("hidden");
            document.querySelector(".card-wrapper").classList.remove("hidden");
        });
});
