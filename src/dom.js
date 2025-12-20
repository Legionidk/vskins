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
