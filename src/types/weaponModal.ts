interface WeaponStatsData {
    name: string;
    value: string | number;
}

interface AltFireData {
    type: string;
    data: WeaponStatsData[];
}

export interface WeaponDamageData {
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
    imageUrl: string; // TODO: delete this when updated weapon modal will be ready
    cost: number | null;
    images: {
        render: string
        buyMenu: string
        killFeed: string
    }
    generalData: WeaponStatsData[] | null;
    primaryFireData: WeaponStatsData[] | null;
    altFireData: AltFireData | null;
    damageData: WeaponDamageData[] | null;
}
