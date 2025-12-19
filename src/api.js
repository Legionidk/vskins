export function getButtonIcons() {
    const weaponsApiUrl = "https://valorant-api.com/v1/weapons";
    const tiersApiUrl = "https://valorant-api.com/v1/contenttiers";
    const data = {
        weapons: undefined,
        tiers: undefined,
    };

    return Promise.all([
        fetch(weaponsApiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch weapon data");
                }

                return response.json();
            })
            .then((responseData) => {
                data.weapons = responseData.data.map(
                    ({ uuid, displayName, killStreamIcon }) => ({
                        uuid,
                        displayName,
                        killStreamIcon,
                    })
                );
            }),

        fetch(tiersApiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch tier data");
                }

                return response.json();
            })
            .then((responseData) => {
                data.tiers = responseData.data.map(
                    ({ uuid, displayName, displayIcon }) => ({
                        uuid,
                        displayName,
                        displayIcon,
                    })
                );
            }),
    ]).then(() => {
        return data;
    });
}

export function getWeapons(weaponUuid = []) {
    const apiUrl = `https://valorant-api.com/v1/weapons/${weaponUuid}`;

    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch weapon data");
            }

            return response.json();
        })
        .then((data) => {
            return data.data;
        });
}

export function getTiers(tierUuid = "") {
    const apiUrl = `https://valorant-api.com/v1/contenttiers/${tierUuid}`;

    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch tier data");
            }

            return response.json();
        })
        .then((data) => {
            return data.data;
        });
}
