function createClickEvent(buttonElement, filtersHandler) {
    buttonElement.addEventListener("click", (event) => {
        const buttonElement = event.target.classList.value
            .split(" ")
            .includes("filter-button")
            ? event.target
            : event.target.parentNode;
        const classList = buttonElement.classList.value.split(" ");
        const filtersKey = classList[1];

        if (!classList.includes("pressed")) {
            buttonElement.classList.add("pressed");
            filtersHandler[filtersKey].push(classList[2]);
        } else {
            const indexToRemove = filtersHandler[filtersKey].indexOf(
                classList[2]
            );
            buttonElement.classList.remove("pressed");
            filtersHandler[filtersKey].splice(indexToRemove, 1);
        }
    });
}

function createSkinCard(skinData, tierData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const skinImgWrapper = document.createElement("div");
    skinImgWrapper.classList.add("skin-img-wrapper");

    const skinImg = document.createElement("img");
    skinImg.classList.add("skin-img");
    skinImg.src = skinData.icon;
    skinImg.alt = skinData.displayName;

    const skinNameSpan = document.createElement("span");
    skinNameSpan.classList.add("skin-name");
    skinNameSpan.textContent = skinData.displayName;

    const skinInfo = document.createElement("div");
    skinInfo.classList.add("skin-info");

    const skinTierInfo = document.createElement("div");
    skinTierInfo.classList.add("skin-tier-info");

    const tierImg = document.createElement("img");
    tierImg.classList.add("skin-tier-icon");
    tierImg.src = tierData.displayIcon;
    tierImg.alt = tierData.displayName;

    const tierNameSpan = document.createElement("span");
    tierNameSpan.classList.add("tier-name");
    tierNameSpan.textContent = tierData.displayName;

    skinImgWrapper.appendChild(skinImg);
    skinTierInfo.append(tierImg, tierNameSpan);
    skinInfo.append(skinTierInfo, skinNameSpan);
    card.append(skinImgWrapper, skinInfo);

    return card;
}

export function renderWeaponFilterButtons(weaponsData, filtersHandler) {
    const filterButtonWrapper = document.querySelector(
        "div.filter-block.weapon div.filter-button-wrapper"
    );

    for (const [uuid, weapon] of Object.entries(weaponsData)) {
        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", "weapons", uuid);
        createClickEvent(filterButton, filtersHandler);

        const skinImgWrapper = document.createElement("img");
        skinImgWrapper.classList.add(
            "filter-button-icon",
            "override-color",
            uuid
        );
        skinImgWrapper.src = weapon.killStreamIcon;
        skinImgWrapper.alt = `Filter to ${weapon.displayName}`;

        filterButton.appendChild(skinImgWrapper);
        filterButtonWrapper.appendChild(filterButton);
    }
}

export function renderTierFilterButtons(tiersData, filtersHandler) {
    const filterButtonWrapper = document.querySelector(
        "div.filter-block.tier div.filter-button-wrapper"
    );

    for (const [uuid, tier] of Object.entries(tiersData)) {
        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", "tiers", uuid);
        createClickEvent(filterButton, filtersHandler);

        const tierImgWrapper = document.createElement("img");
        tierImgWrapper.classList.add("filter-button-icon", "tier", uuid);
        tierImgWrapper.src = tier.displayIcon;
        tierImgWrapper.alt = `Filter to ${tier.displayName}`;

        const tierNameSpan = document.createElement("span");
        tierNameSpan.classList.add("filter-button-text", "tier", uuid);
        tierNameSpan.textContent = tier.displayName;

        filterButton.append(tierImgWrapper, tierNameSpan);
        filterButtonWrapper.appendChild(filterButton);
    }
}

export function renderSkinCards(weaponsData, tiersData, filters) {
    const cardWrapper = document.querySelector(".card-wrapper");
    const weaponFilters = filters.weapons;
    const tierFilters = filters.tiers;
    const tmpWeapons = {};

    if (weaponFilters.length) {
        weaponFilters.forEach((weaponUuid) => {
            tmpWeapons[weaponUuid] = weaponsData[weaponUuid];
        });

        weaponsData = tmpWeapons;
    }

    if (tierFilters.length) {
        tierFilters.forEach((tierUuid) => {
            Object.keys(weaponsData).forEach((weaponUuid) => {
                const tmpSkins = [];

                weaponsData[weaponUuid].skins.forEach((skin) => {
                    if (skin.contentTierUuid === tierUuid) {
                        tmpSkins.push(skin);
                    }
                });

                weaponsData[weaponUuid].skins = tmpSkins;
            });
        });
    }

    Object.values(weaponsData).forEach((weapon) => {
        weapon.skins.forEach((skin) => {
            cardWrapper.appendChild(
                createSkinCard(skin, tiersData[skin.contentTierUuid])
            );
        });
    });
}
