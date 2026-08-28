import * as v from "valibot";

const BaseWeaponStatsSchema = {
    fireRate: v.number(),
    magazineSize: v.number(),
    runSpeedMultiplier: v.number(),
    equipTimeSeconds: v.number(),
    reloadTimeSeconds: v.number(),
    firstBulletAccuracy: v.number(),
    wallPenetration: v.string(),
    damageRanges: v.array(
        v.object({
            rangeStartMeters: v.number(),
            rangeEndMeters: v.number(),
            headDamage: v.number(),
            bodyDamage: v.number(),
            legDamage: v.number(),
        }),
    ),
};

const WeaponStatsSchema = v.variant("altFireType", [
    v.object({
        ...BaseWeaponStatsSchema,
        altFireType: v.literal("EWeaponAltFireDisplayType::ADS"),
        altShotgunStats: v.null(),
        airBurstStats: v.null(),
        adsStats: v.object({
            zoomMultiplier: v.number(),
            fireRate: v.number(),
            runSpeedMultiplier: v.number(),
            firstBulletAccuracy: v.number(),
        }),
    }),

    v.object({
        ...BaseWeaponStatsSchema,
        altFireType: v.literal("EWeaponAltFireDisplayType::Shotgun"),
        adsStats: v.null(),
        airBurstStats: v.null(),
        altShotgunStats: v.object({
            shotgunPelletCount: v.number(),
            burstRate: v.number(),
        }),
    }),

    v.object({
        ...BaseWeaponStatsSchema,
        altFireType: v.literal("EWeaponAltFireDisplayType::AirBurst"),
        adsStats: v.null(),
        altShotgunStats: v.null(),
        airBurstStats: v.object({
            shotgunPelletCount: v.number(),
            burstDistance: v.number(),
        }),
    }),

    v.object({
        ...BaseWeaponStatsSchema,
        altFireType: v.null(),
        adsStats: v.null(),
        altShotgunStats: v.null(),
        airBurstStats: v.null(),
    }),
]);

export const WeaponApiSchema = v.variant("displayName", [
    v.object({
        uuid: v.string(),
        displayName: v.string(),
        displayIcon: v.string(),
        category: v.string(),
        weaponStats: WeaponStatsSchema,
        shopData: v.object({
            cost: v.number(),
            category: v.string(),
        }),
    }),

    v.object({
        uuid: v.string(),
        displayName: v.literal("Melee"),
        displayIcon: v.string(),
        category: v.string(),
        weaponStats: v.null(),
        shopData: v.null(),
    }),
]);

export type WeaponApiType = v.InferOutput<typeof WeaponApiSchema>;
