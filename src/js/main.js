import { getWeaponsData, getWeaponSkins } from "./api.js";
import { renderNavigationButtons, renderSkins } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
    getWeaponsData().then((data) => {
        renderNavigationButtons(data);

        const firstWeaponUuid =
            document.querySelector(".filter-button").classList[1];

        getWeaponSkins(firstWeaponUuid).then((skins) => {
            renderSkins(skins);
        });
    });
});
