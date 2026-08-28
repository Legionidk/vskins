import * as v from "valibot";
import { WeaponApiSchema, WeaponApiType } from "../../schemas/weapon";

export default async function fetchWeapons(): Promise<WeaponApiType[]> {
    const response = await fetch("https://valorant-api.com/v1/weapons");

    if (response.status !== 200) {
        throw new Error(
            `[WEAPONS SERVICE] Error retrieving weapons data.\n${response.status}: ${response.statusText}.`,
        );
    }

    const weapons = await response.json();
    return v.parse(v.array(WeaponApiSchema), weapons.data);
}
