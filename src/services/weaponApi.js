export default function getWeapons() {
    return fetch("https://valorant-api.com/v1/weapons")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on fetching weapon data!");
            }

            return response.json();
        })
        .then((data) => {
            const map = new Map();

            for (const weapon of data.data) {
                const categoryId = weapon.category;
                const categoryName =
                    weapon.displayName === "Melee"
                        ? "Melee"
                        : weapon.shopData.categoryText;
                const weaponObject = {
                    uuid: weapon.uuid,
                    name: weapon.displayName,
                    image: weapon.displayIcon,
                    cost:
                        weapon.displayName === "Melee"
                            ? 0
                            : weapon.shopData.cost,
                    stats:
                        weapon.displayName === "Melee"
                            ? null
                            : {
                                  fireRate: weapon.weaponStats.fireRate,
                                  firstShotSpread:
                                      weapon.weaponStats.firstBulletAccuracy,
                                  magazine: weapon.weaponStats.magazineSize,
                                  reloadSpeed:
                                      weapon.weaponStats.reloadTimeSeconds,
                                  equipSpeed:
                                      weapon.weaponStats.equipTimeSeconds,
                                  runSpeedMultiplier:
                                      weapon.weaponStats.runSpeedMultiplier,
                                  damage: weapon.weaponStats.damageRanges,
                              },
                };

                if (!map.has(categoryId)) {
                    map.set(categoryId, {
                        categoryId,
                        categoryName,
                        weapons: [],
                    });
                }

                map.get(categoryId).weapons.push(weaponObject);
            }

            return [...map.values()];
        });
}
