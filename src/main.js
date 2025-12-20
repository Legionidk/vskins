import { getWeaponsData, getTiersData } from "./api.js";
import {
    renderSkinCards,
    renderTierFilterButtons,
    renderWeaponFilterButtons,
} from "./dom.js";

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
            renderSkinCards(weapons, tiers, filters);
            document.querySelector(".loader").classList.add("hidden");
            document.querySelector("input").classList.remove("hidden");
            document
                .querySelector(".filter-block-wrapper")
                .classList.remove("hidden");
            document.querySelector(".card-wrapper").classList.remove("hidden");
        });
});
