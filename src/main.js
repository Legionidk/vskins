import { getWeaponsData, getWeaponSkins } from "./api.js";
import { renderNavigationButtons, renderSkins } from "./dom.js";

// document.addEventListener("DOMContentLoaded", () => {
//     getWeaponsData().then((data) => {
//         const firstWeaponUuid = renderNavigationButtons(data);

//         getWeaponSkins(firstWeaponUuid).then((skins) => {
//             renderSkins(skins);
//         });
//     });
// });
