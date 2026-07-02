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
                        categoryId: weapon.category,
                        data: [
                            {
                                cardTitle: weapon.displayName,
                                cardImage: weapon.displayIcon,
                                id: weapon.uuid,
                                data: {
                                    uuid: weapon.uuid,
                                    name: weapon.displayName,
                                    category: null,
                                    image: weapon.displayIcon,
                                    cost: null,
                                    general: null,
                                    primaryFire: null,
                                    altFire: null,
                                    damage: null,
                                },
                            },
                        ],
                    });
                    continue;
                }

                if (!weapons.has(weapon.category)) {
                    weapons.set(weapon.category, {
                        categoryName: weapon.shopData.category,
                        categoryId: weapon.category,
                        data: [],
                    });
                }

                let altFireData = null;
                switch (weapon.weaponStats.altFireType) {
                    case "EWeaponAltFireDisplayType::ADS":
                        altFireData = weapon.weaponStats.adsStats;
                        altFireData.type = "ADS"
                        break;
                    case "EWeaponAltFireDisplayType::Shotgun":
                        altFireData = weapon.weaponStats.altShotgunStats;
                        altFireData.type = "Shotgun"
                        break;
                    case "EWeaponAltFireDisplayType::AirBurst":
                        altFireData = weapon.weaponStats.airBurstStats;
                        altFireData.type = "AirBurst"
                        break;
                }

                weapons.get(weapon.category).data.push({
                    cardTitle: weapon.displayName,
                    cardImage: weapon.displayIcon,
                    id: weapon.uuid,
                    data: {
                        name: weapon.displayName,
                        category: weapon.shopData.category,
                        image: weapon.displayIcon,
                        cost: weapon.shopData.cost,
                        general: {
                            magazine: weapon.weaponStats.magazineSize,
                            wallPenetration: weapon.weaponStats.wallPenetration.split(":")[2],
                            equipSpeed: weapon.weaponStats.equipTimeSeconds,
                            reloadSpeed: weapon.weaponStats.reloadTimeSeconds,
                        },
                        primaryFire: {
                            fireRate: weapon.weaponStats.fireRate,
                            shotSpread: weapon.weaponStats.firstBulletAccuracy,
                            runSpeedMult: weapon.weaponStats.runSpeedMultiplier,
                        },
                        altFire: altFireData,
                        damage: weapon.weaponStats.damageRanges,
                    },
                });
            }

            return [...weapons.values()];
        });
}
