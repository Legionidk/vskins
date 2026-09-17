import * as v from "valibot";
import { WeaponApiSchema, WeaponApiType } from "../../types/schemas/weapon";
import { skinApiSchema, skinApiType } from "@/types/schemas/skin";

export async function fetchWeapons(): Promise<WeaponApiType[]> {
    const response = await fetch("https://valorant-api.com/v1/weapons");

    if (response.status !== 200) {
        throw new Error(
            `[WEAPONS SERVICE] Error retrieving weapons data.\n${response.status}: ${response.statusText}.`,
        );
    }

    const weapons = await response.json();
    return v.parse(v.array(WeaponApiSchema), weapons.data);
}

export async function fetchDefaultSkin(
    defaultSkinUuid: string,
): Promise<skinApiType> {
    const response = await fetch(
        `https://valorant-api.com/v1/weapons/skins/${defaultSkinUuid}`,
    );

    if (response.status !== 200) {
        throw new Error(
            `[WEAPONS SERVICE] Error retrieving default skin data.\n${response.status}: ${response.statusText}.`,
        );
    }

    const skin = await response.json();
    return v.parse(skinApiSchema, skin.data);
}
