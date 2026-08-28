import { WeaponApiType } from "../../schemas/weapon";

import CategoryData from "../../types/category";
import { WeaponModalData } from "../../types/weaponModal";

export default function mapWeapons(
    weaponsData: WeaponApiType[],
): CategoryData<WeaponModalData>[] {
    const weapons = new Map<string, CategoryData<WeaponModalData>>();

    for (const weapon of weaponsData) {
        let category = weapons.get(weapon.category);

        if (!category) {
            category = {
                id: weapon.category,
                name: weapon.shopData.category,
                cardsData: [],
            };

            weapons.set(weapon.category, category);
        }

        if (weapon.displayName === "Melee") {
            category.cardsData.push({
                id: weapon.uuid,
                name: weapon.displayName,
                imageUrl: weapon.displayIcon,
                modalData: {
                    id: weapon.uuid,
                    name: weapon.displayName,
                    category: null,
                    imageUrl: weapon.displayIcon,
                    cost: null,
                    generalData: null,
                    primaryFireData: null,
                    altFireData: null,
                    damageData: null,
                },
            });

            continue;
        }

        let altFireData = null;
        switch (weapon.weaponStats.altFireType) {
            case "EWeaponAltFireDisplayType::ADS":
                altFireData = {
                    type: "ADS",
                    data: [
                        {
                            name: "Fire rate",
                            value: `${weapon.weaponStats.adsStats.fireRate} rounds/sec`,
                        },
                        {
                            name: "Shot spread",
                            value: `${weapon.weaponStats.adsStats.firstBulletAccuracy} deg`,
                        },
                        {
                            name: "Run speed mult",
                            value: `${weapon.weaponStats.adsStats.runSpeedMultiplier} m/sec`,
                        },
                        {
                            name: "Zoom mult",
                            value: `${weapon.weaponStats.adsStats.zoomMultiplier}x`,
                        },
                    ],
                };

                break;

            case "EWeaponAltFireDisplayType::Shotgun":
                altFireData = {
                    type: "Shotgun",
                    data: [
                        {
                            name: "Fire rate",
                            value: `${weapon.weaponStats.altShotgunStats.burstRate} bursts/sec`,
                        },
                        {
                            name: "Shot spread",
                            value: weapon.weaponStats.altShotgunStats
                                .shotgunPelletCount,
                        },
                    ],
                };

                break;

            case "EWeaponAltFireDisplayType::AirBurst":
                altFireData = {
                    type: "Air burst",
                    data: [
                        {
                            name: "Burst distance",
                            value: `${weapon.weaponStats.airBurstStats.burstDistance}m`,
                        },
                        {
                            name: "Shot spread",
                            value: weapon.weaponStats.airBurstStats
                                .shotgunPelletCount,
                        },
                    ],
                };
        }

        category.cardsData.push({
            id: `weapon-card-${weapon.uuid}`,
            name: weapon.displayName,
            imageUrl: weapon.displayIcon,
            modalData: {
                id: `weapon-modal-${weapon.uuid}`,
                name: weapon.displayName,
                category: weapon.shopData.category,
                imageUrl: weapon.displayIcon,
                cost: weapon.shopData.cost,
                generalData: [
                    {
                        name: "Magazine",
                        value: weapon.weaponStats.magazineSize,
                    },
                    {
                        name: "Equip speed",
                        value: `${weapon.weaponStats.equipTimeSeconds} sec`,
                    },
                    {
                        name: "Reload speed",
                        value: `${weapon.weaponStats.reloadTimeSeconds} sec`,
                    },
                    {
                        name: "Wall penetration",
                        value: weapon.weaponStats.wallPenetration.split(":")[2],
                    },
                ],
                primaryFireData: [
                    {
                        name: "Fire rate",
                        value: `${weapon.weaponStats.fireRate} rounds/sec`,
                    },
                    {
                        name: "Shot spread",
                        value: `${weapon.weaponStats.firstBulletAccuracy} deg`,
                    },
                    {
                        name: "Run speed mult",
                        value: `${weapon.weaponStats.runSpeedMultiplier} m/sec`,
                    },
                ],
                altFireData: altFireData,
                damageData: weapon.weaponStats.damageRanges.map((damage) => {
                    return {
                        rangeStart: damage.rangeStartMeters,
                        rangeEnd: damage.rangeEndMeters,
                        headDamage: Math.trunc(damage.headDamage),
                        bodyDamage: Math.trunc(damage.bodyDamage),
                        legsDamage: Math.trunc(damage.legDamage),
                    };
                }),
            },
        });
    }

    return [...weapons.values()];
}
