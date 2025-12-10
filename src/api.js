function getWeaponTiers() {
    const weaponTiersApiUrl = "https://valorant-api.com/v1/contenttiers";

    return fetch(weaponTiersApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch tiers data");
            }

            return response.json();
        })
        .then((data) => {
            const tiersData = {};

            data.data.forEach((tier) => {
                tiersData[tier.uuid] = {
                    name: tier.displayName,
                    icon: tier.displayIcon,
                };
            });

            return tiersData;
        });
}
