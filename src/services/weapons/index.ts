import { fetchWeapons, fetchDefaultSkin } from "./api";
import mapWeapons from "./mapper";

import CategoryData from "../../types/category";
import { WeaponModalData } from "../../types/weaponModal";

export default async function getWeapons(): Promise<
    CategoryData<WeaponModalData>[]
> {
    const fetchedWeapons = await fetchWeapons();

    const defaultSkinsData: Record<string, string> = {};

    for (const weapon of fetchedWeapons) {
        const defaultSkin = await fetchDefaultSkin(weapon.defaultSkinUuid);
        defaultSkinsData[weapon.uuid] = defaultSkin.chromas[0].fullRender;
    }

    return mapWeapons(fetchedWeapons, defaultSkinsData);
}
