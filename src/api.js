export function getWeaponsData() {
    const weaponsApiUrl = "https://valorant-api.com/v1/weapons";
    const tmp = {};

    return fetch(weaponsApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on api fetching");
            }

            return response.json();
        })
        .then((data) => {
            data.data.forEach((weapon) => {
                tmp[weapon.uuid] = {
                    name: weapon.displayName,
                    uuid: weapon.uuid,
                    icon: weapon.killStreamIcon,
                };
            });

            return tmp;
        });
}

export function getWeaponSkins(weaponUuid) {
    const weaponsApiUrl = `https://valorant-api.com/v1/weapons/${weaponUuid}`;

    return fetch(weaponsApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on api fetching");
            }

            return response.json();
        })
        .then((data) => {
            return data.data.skins;
        });
}

export function getTierIcon(tierUuid) {
    const tierApiUrl = `https://valorant-api.com/v1/contenttiers/${tierUuid}`;

    return fetch(tierApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on api fetching");
            }

            return response.json();
        })
        .then((data) => {
            return data.data.displayIcon;
        });
}
