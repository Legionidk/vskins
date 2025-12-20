export function getWeaponsData(weaponsDataHandler) {
    return fetch("https://valorant-api.com/v1/weapons")
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    "Failed to fetch weapons data from VALORANT API"
                );
            }

            return response.json();
        })
        .then((data) => {
            data.data.forEach((weapon) => {
                weaponsDataHandler[weapon.uuid] = {
                    displayName: weapon.displayName,
                    killStreamIcon: weapon.killStreamIcon,
                    skins: [],
                };

                weapon.skins.forEach((skin) => {
                    if (skin.contentTierUuid === null) {
                        return;
                    }

                    const skinObject = {
                        displayName: skin.displayName,
                        uuid: skin.uuid,
                        contentTierUuid: skin.contentTierUuid,
                        icon: skin.displayIcon
                            ? skin.displayIcon
                            : "src/skin-image-placeholder.png",
                    };

                    weaponsDataHandler[weapon.uuid].skins.push(skinObject);
                });
            });
        });
}

export function getTiersData(tiersDataHandler) {
    return fetch("https://valorant-api.com/v1/contenttiers")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch tiers data from VALORANT API");
            }

            return response.json();
        })
        .then((data) => {
            data.data.forEach((tier) => {
                tiersDataHandler[tier.uuid] = {
                    displayName: tier.displayName,
                    displayIcon: tier.displayIcon,
                    uuid: tier.uuid,
                };
            });
        });
}
