export function renderWeaponFilters(weaponsData) {
    weaponsData.forEach((weapon) => {
        const filterBlock = document.querySelector(
            "div.filter-block.weapon div.filter-buttons-wrapper"
        );

        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", weapon.uuid);

        const buttonIcon = document.createElement("img");
        buttonIcon.src = weapon.killStreamIcon;

        filterButton.append(buttonIcon);
        filterBlock.append(filterButton);
    });
}

export function renderTierFilters(tiersData) {
    tiersData.forEach((tier) => {
        const filterBlock = document.querySelector(
            "div.filter-block.tier div.filter-buttons-wrapper"
        );

        const filterButton = document.createElement("div");
        filterButton.classList.add("filter-button", tier.uuid);

        const buttonSpan = document.createElement("span");
        buttonSpan.textContent = tier.displayName;

        const buttonIcon = document.createElement("img");
        buttonIcon.src = tier.displayIcon;

        filterButton.append(buttonIcon, buttonSpan);
        filterBlock.append(filterButton);
    });
}
