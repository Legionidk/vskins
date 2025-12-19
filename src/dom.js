export function renderWeaponFilterButtons(weaponsData, filtersHandler) {
    const filterButtonWrapper = document.querySelector(
        "div.filter-block.weapon div.filter-button-wrapper"
    );

    weaponsData.forEach((weapon) => {
        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", "weapon", weapon.uuid);
        filterButton.addEventListener("click", (event) => {
            const buttonElement = event.target.classList.value
                .split(" ")
                .includes("filter-button")
                ? event.target
                : event.target.parentNode;
            const classList = buttonElement.classList.value.split(" ");

            if (!classList.includes("pressed")) {
                buttonElement.classList.add("pressed");
                filtersHandler.push(classList[2]);
            } else {
                const indexToRemove = filtersHandler.indexOf(classList[2]);

                buttonElement.classList.remove("pressed");
                filtersHandler.splice(indexToRemove, 1);
            }

            console.log(filtersHandler);
        });

        const skinImgWrapper = document.createElement("img");
        skinImgWrapper.classList.add(
            "filter-button-icon",
            "override-color",
            weapon.uuid
        );
        skinImgWrapper.src = weapon.killStreamIcon;
        skinImgWrapper.alt = `Filter to ${weapon.displayName}`;

        filterButton.appendChild(skinImgWrapper);
        filterButtonWrapper.appendChild(filterButton);
    });
}

export function renderTierFilterButtons(tiersData, filtersHandler) {
    const filterButtonWrapper = document.querySelector(
        "div.filter-block.tier div.filter-button-wrapper"
    );

    tiersData.forEach((tier) => {
        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", "tier", tier.uuid);
        filterButton.addEventListener("click", (event) => {
            const buttonElement = event.target.classList.value
                .split(" ")
                .includes("filter-button")
                ? event.target
                : event.target.parentNode;
            const classList = buttonElement.classList.value.split(" ");

            if (!classList.includes("pressed")) {
                buttonElement.classList.add("pressed");
                filtersHandler.push(classList[2]);
            } else {
                const indexToRemove = filtersHandler.indexOf(classList[2]);

                buttonElement.classList.remove("pressed");
                filtersHandler.splice(indexToRemove, 1);
            }

            console.log(filtersHandler);
        });

        const tierImgWrapper = document.createElement("img");
        tierImgWrapper.classList.add("filter-button-icon", "tier", tier.uuid);
        tierImgWrapper.src = tier.displayIcon;
        tierImgWrapper.alt = `Filter to ${tier.displayName}`;

        const tierNameSpan = document.createElement("span");
        tierNameSpan.classList.add("filter-button-text", "tier", tier.uuid);
        tierNameSpan.textContent = tier.displayName;

        filterButton.append(tierImgWrapper, tierNameSpan);
        filterButtonWrapper.appendChild(filterButton);
    });
}

export function renderSkinCards(skinsData) {
    const cardWrapper = document.querySelector(".card-wrapper");

    skinsData.then((data) => {
        data.forEach((skin) => {
            // TODO: Skip random favorite skins
            // if (skin.contentTierUuid === null) {
            //     return;
            // }

            const card = document.createElement("div");
            card.classList.add("card");

            const skinImgWrapper = document.createElement("div");
            skinImgWrapper.classList.add("skin-img-wrapper");

            const skinImg = document.createElement("img");
            skinImg.src = skin.displayIcon;
            skinImg.alt = skin.displayName;

            const skinInfo = document.createElement("div");
            skinInfo.classList.add("skin-info");

            const skinTierInfo = document.createElement("div");
            skinTierInfo.classList.add("skin-tier-info");

            // TODO: Chromium cant handle many requests in a short time
            fetch(
                `https://valorant-api.com/v1/contenttiers/${skin.contentTierUuid}`
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `Failed to fetch tier icon for ${skin.displayName} (tier uuid: ${skin.contentTierUuid})`
                        );
                    }

                    return response.json();
                })
                .then((data) => {
                    const tierImg = document.createElement("img");
                    tierImg.classList.add("skin-tier-icon");
                    tierImg.src = data.data.displayIcon;
                    tierImg.alt = data.data.displayName;

                    const tierSpan = document.createElement("span");
                    tierSpan.classList.add("skin-tier-name");
                    tierSpan.textContent = data.data.displayName;

                    skinTierInfo.appendChild(tierImg);
                });

            const skinNameSpan = document.createElement("span");
            skinNameSpan.classList.add("skin-name");
            skinNameSpan.textContent = skin.displayName;

            skinImgWrapper.appendChild(skinImg);
            skinInfo.append(skinTierInfo, skinNameSpan);
            card.append(skinImgWrapper, skinInfo);
            cardWrapper.appendChild(card);
        });
    });
}
