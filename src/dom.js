import { getWeapons } from "./api";

export function renderWeaponFilterButtons() {
    getWeapons().then((data) => {
        const filterButtonWrapper = document.querySelector(
            "div.filter-block.weapon div.filter-button-wrapper"
        );

        data.forEach((weapon) => {
            const filterButton = document.createElement("div");
            filterButton.classList.add("filter-button", "weapon", weapon.uuid);

            const skinImgWrapper = document.createElement("img");
            skinImgWrapper.classList.add("filter-button-icon", weapon.uuid);
            skinImgWrapper.src = weapon.killStreamIcon;
            skinImgWrapper.alt = `Filter to ${weapon.displayName}`;

            filterButton.appendChild(skinImgWrapper);
            filterButtonWrapper.appendChild(filterButton);
        });
    });
}
