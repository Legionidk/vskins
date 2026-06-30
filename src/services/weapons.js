export default async function getWeapons() {
    const request = await fetch("https://valorant-api.com/v1/weapons");
    if (!request.ok) {
        return `[WEAPONS SERVICE]\nAPI status is not ok: ${request.status}`;
    }

    const response = await request.json();
    const data = new Map();

    for (const weapon of response.data) {
        if (weapon.displayName === "Melee") {
            data.set(weapon.category, {
                categoryName: "Melee",
                weapons: [weapon],
            });
            continue;
        }

        if (!data.has(weapon.category)) {
            data.set(weapon.category, {
                categoryName: weapon.shopData.category,
                weapons: [],
            });
        }

        data.get(weapon.category).weapons.push(weapon);
    }

    return [...data.values()];
}
