import { getTierIcon, getWeaponSkins } from "./api.js";

export function renderNavigationButtons(weaponsData) {
    const firstWeaponUuid = Object.keys(weaponsData)[0];
    const navElement = document.querySelector("nav");

    Object.values(weaponsData).forEach((weapon) => {
        const buttonElement = document.createElement("button");
        buttonElement.classList.add("filter-button", weapon.uuid);

        const imgElement = document.createElement("img");
        imgElement.classList.add("weapon-icon");
        imgElement.src = weapon.icon;
        imgElement.alt = weapon.name;

        buttonElement.addEventListener("click", (event) => {
            document.querySelector(".card-wrapper").innerHTML = "";

            const weaponUuid = event.target.className.includes("filter-button")
                ? event.target.classList[1]
                : event.target.parentNode.classList[1];

            getWeaponSkins(weaponUuid).then((skins) => {
                renderSkins(skins);
            });
        });

        buttonElement.append(imgElement);
        navElement.append(buttonElement);
    });

    return firstWeaponUuid;
}

export function renderSkins(skinsArray) {
    for (const skin of skinsArray) {
        if (
            ["Standard", "Random", "Melee"].some((el) =>
                skin.displayName.includes(el)
            )
        ) {
            continue;
        }

        const cardWrapper = document.querySelector(".card-wrapper");

        const card = document.createElement("div");
        card.classList.add("skin-card");

        const skinImgWrapper = document.createElement("div");
        skinImgWrapper.classList.add("skin-img-wrapper");

        const skinInfoDiv = document.createElement("div");
        skinInfoDiv.classList.add("skin-info");

        const skinImg = document.createElement("img");
        skinImg.classList.add("skin-img");
        skinImg.src = skin.displayIcon
            ? skin.displayIcon
            : "src/skin-image-placeholder.png";
        skinImg.alt = skin.displayName;

        const skinTierImg = document.createElement("img");
        skinTierImg.classList.add("skin-tier-icon", skin.contentTierUuid);

        getTierIcon(skin.contentTierUuid).then((tierIcon) => {
            skinTierImg.src = tierIcon;
        });

        const skinNameSpan = document.createElement("span");
        skinNameSpan.classList.add("skin-name");
        skinNameSpan.append(skinTierImg);
        skinNameSpan.append(skin.displayName);

        skinImgWrapper.append(skinImg);
        skinInfoDiv.append(skinNameSpan);
        card.append(skinImgWrapper, skinInfoDiv);
        cardWrapper.append(card);
    }
}
