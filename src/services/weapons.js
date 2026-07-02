export default function getWeapons() {
    return fetch("https://valorant-api.com/v1/weapons")
        .then((res) => {
            if (!res.ok) {
                console.log(
                    `[WEAPONS SERVICE]\nAPI status is not ok: ${request.status}\nReturned empty array`,
                );
                return [];
            }

            return res.json();
        })
        .then((data) => {
            const weapons = new Map();

            for (const weapon of data.data) {
                if (weapon.displayName === "Melee") {
                    weapons.set(weapon.category, {
                        categoryName: "Melee",
                        weapons: [weapon],
                    });
                    continue;
                }

                if (!weapons.has(weapon.category)) {
                    weapons.set(weapon.category, {
                        categoryName: weapon.shopData.category,
                        weapons: [],
                    });
                }

                weapons.get(weapon.category).weapons.push(weapon);
            }

            return [...weapons.values()];
        });
}
