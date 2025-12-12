export function getTiers() {
    const tiersApi = "https://valorant-api.com/v1/contenttiers";

    return fetch(tiersApi)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on tiers fetching");
            }

            return response.json();
        })
        .then((data) => {
            return data.data;
        });
}

export function getWeapons() {
    const weaponApi = "https://valorant-api.com/v1/weapons";

    return fetch(weaponApi)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on tiers fetching");
            }

            return response.json();
        })
        .then((data) => {
            return data.data;
        });
}
