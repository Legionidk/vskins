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

                let altFireData = {};
                switch (weapon.weaponStats.altFireType) {
                    case "EWeaponAltFireDisplayType::ADS":
                        altFireData.type = "ADS"
                        altFireData.data = [
                            {name: "Fire rate", value: `${weapon.weaponStats.adsStats.fireRate} rounds/sec`},
                            {name: "Shot spread", value: `${weapon.weaponStats.adsStats.firstBulletAccuracy} deg`},
                            {name: "Run speed mult", value: `${weapon.weaponStats.adsStats.runSpeedMultiplier} m/sec`},
                            {name: "Zoom mult", value: `${weapon.weaponStats.adsStats.zoomMultiplier}x`},
                        ]
                        break;
                    case "EWeaponAltFireDisplayType::Shotgun":
                        console.log(weapon.weaponStats.altShotgunStats)
                        altFireData.type = "Shotgun"
                        altFireData.data = [
                            {name: "Burst rate", value: `${weapon.weaponStats.altShotgunStats.burstRate} bursts/sec`},
                            {name: "Pellet count", value: weapon.weaponStats.altShotgunStats.shotgunPelletCount},
                        ]
                        break;
                    case "EWeaponAltFireDisplayType::AirBurst":
                        altFireData.type = "Air burst"
                        altFireData.data = [
                            {name: "Burst distance", value: `${weapon.weaponStats.airBurstStats.burstDistance}m`},
                            {name: "Pellet count", value: weapon.weaponStats.airBurstStats.shotgunPelletCount},
                        ]
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
                        general: [
                            {name: "Magazine", value: weapon.weaponStats.magazineSize},
                            {name: "Equip speed", value: `${weapon.weaponStats.equipTimeSeconds} sec`},
                            {name: "Reload speed", value: `${weapon.weaponStats.reloadTimeSeconds} sec`},
                            {name: "Wall penetration", value: weapon.weaponStats.wallPenetration.split(":")[2]},
                        ],
                        primaryFire: [
                            {name: "Fire rate", value: `${weapon.weaponStats.fireRate} rounds/sec`},
                            {name: "Shot spread", value: `${weapon.weaponStats.firstBulletAccuracy} deg`},
                            {name: "Run speed mult", value: `${weapon.weaponStats.runSpeedMultiplier} m/sec`},
                        ],
                        altFire: altFireData,
                        damage: weapon.weaponStats.damageRanges,
                    },
                });
            }

            return [...weapons.values()];
        });
}
