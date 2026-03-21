export function getWeapons() {
    return fetch("https://valorant-api.com/v1/weapons")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on fetching weapon data!");
            }

            return response.json();
        })
        .then((data) => {
            const weaponsData = {};
            for (const weapon of data.data) {
                weaponsData[weapon.uuid] = {
                    name: weapon.displayName,
                    image: weapon.displayIcon,
                    categoryId: weapon.category,
                    categoryText:
                        weapon.displayName === "Melee"
                            ? weapon.category.split(":")[2]
                            : weapon.shopData.categoryText,
                    cost:
                        weapon.displayName === "Melee"
                            ? null
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
            }

            return weaponsData;
        });
}
