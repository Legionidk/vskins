import fetchWeapons from "./api";
import mapWeapons from "./mapper";

import CategoryData from "../../types/category";
import { WeaponModalData } from "../../types/weaponModal";

export default async function getWeapons(): Promise<
    CategoryData<WeaponModalData>[]
> {
    const fetchedWeapons = await fetchWeapons();
    return mapWeapons(fetchedWeapons);
}
