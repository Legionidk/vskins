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
                            : [
                                  {
                                      name: "Fire rate",
                                      measure: "RDS/SEC",
                                      value: weapon.weaponStats.fireRate,
                                  },
                                  {
                                      name: "1st shot spread",
                                      measure: "DEG (HIP/ADS)",
                                      value: weapon.weaponStats
                                          .firstBulletAccuracy,
                                  },
                                  {
                                      name: "Magazine",
                                      measure: "RDS",
                                      value: weapon.weaponStats.magazineSize,
                                  },
                                  {
                                      name: "Reload speed",
                                      measure: "SEC",
                                      value: weapon.weaponStats
                                          .reloadTimeSeconds,
                                  },
                                  {
                                      name: "Equip speed",
                                      measure: "SEC",
                                      value: weapon.weaponStats
                                          .equipTimeSeconds,
                                  },
                                  {
                                      name: "Run speed mult",
                                      measure: "M/SEC",
                                      value: weapon.weaponStats
                                          .runSpeedMultiplier,
                                  },
                                  weapon.weaponStats.damageRanges,
                              ],
                    damage:
                        weapon.displayName === "Melee"
                            ? null
                            : weapon.weaponStats.damageRanges,
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
