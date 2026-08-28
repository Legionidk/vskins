interface WeaponStatsData {
    name: string;
    value: string | number;
}

interface AltFireData {
    type: string;
    data: WeaponStatsData[];
}

interface WeaponDamageData {
    rangeStart: number;
    rangeEnd: number;
    headDamage: number;
    bodyDamage: number;
    legsDamage: number;
}

export interface WeaponModalData {
    id: string;
    name: string;
    category: string | null;
    imageUrl: string;
    cost: number | null;
    generalData: WeaponStatsData[] | null;
    primaryFireData: WeaponStatsData[] | null;
    altFireData: AltFireData | null;
    damageData: WeaponDamageData[] | null;
}
