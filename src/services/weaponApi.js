export default function getWeapons() {
    return fetch("https://valorant-api.com/v1/weapons")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error on fetching weapon data!");
            }

            return response.json();
        })
        .then((data) => {
            const weaponsData = {};

            for (const weapon of data.data) {
                const categoryId = weapon.category;

                if (categoryId in weaponsData) {
                    weaponsData[categoryId]["weapons"].push(weapon);
                    continue;
                }

                const categoryText =
                    weapon.displayName === "Melee"
                        ? weapon.category.split(":")[2]
                        : weapon.shopData.categoryText;

                weaponsData[categoryId] = {
                    categoryName: categoryText,
                    weapons: [weapon],
                };
            }

            return weaponsData;
        });
}
