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

export function getWeapons(weaponUuid = "") {
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
