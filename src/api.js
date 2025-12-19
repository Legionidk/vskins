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

export function getSkins(filters = []) {
    const skinsData = [];

    if (filters.length) {
        return Promise.all(
            filters.map((uuid) =>
                fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(
                                `Failed to fetch skins for ${uuid}`
                            );
                        }

                        return response.json();
                    })
                    .then((data) => {
                        skinsData.push(...data.data.skins);
                    })
            )
        ).then(() => {
            return skinsData;
        });
    }

    return fetch("https://valorant-api.com/v1/weapons")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch skins for weapons`);
            }

            return response.json();
        })
        .then((data) => {
            data.data.forEach((weapon) => {
                skinsData.push(...weapon.skins);
            });
        })
        .then(() => {
            return skinsData;
        });
}

getSkins().then((data) => {
    console.log(data);
});
