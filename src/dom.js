export function renderWeaponFilterButtons(weaponsData, filtersHandler) {
    const filterButtonWrapper = document.querySelector(
        "div.filter-block.weapon div.filter-button-wrapper"
    );

    weaponsData.forEach((weapon) => {
        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", "weapon", weapon.uuid);

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
            if (event.target.classList.includes("pressed")) {
                
            }
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
