import { createCategory, createWeaponCard } from "./src/assets/js/dom";
import { getWeapons } from "./src/assets/js/api";

const weaponsData = getWeapons();

weaponsData.then((data) => {
    for (const [uuid, weaponData] of Object.entries(data)) {
        let category = document.querySelector(
            `div[data-category-uuid="${weaponData.categoryId}"]`,
        );
        if (category === null) {
            category = createCategory(
                weaponData.categoryText,
                weaponData.categoryId,
            );
            document.querySelector("main").append(category);
        }

        category
            .querySelector("#cards-wrapper")
            .append(createWeaponCard(uuid, weaponData));
    }

    document.querySelector("#load-spinner").classList.add("hidden");
    document.querySelector("main").classList.remove("hidden");
});

document.querySelector("main").addEventListener("click", (e) => {
    if (e.target.closest("#card") !== null) {
        const weaponUuid = e.target.closest("#card").dataset.weaponUuid;
        const popup = document.querySelector(
            "#popup-container[data-popup-type=weapon]",
        );

        weaponsData.then((data) => {
            const weaponData = data[weaponUuid];

            // title
            popup.querySelector("#weapon-name").textContent = weaponData.name;
            popup.querySelector("#weapon-category").textContent =
                weaponData.categoryText;

            // weapon image
            popup.querySelector("#weapon-image").src = weaponData.image;
            popup.querySelector("#weapon-image").alt =
                `${weaponData.name} image`;

            // weapon info
            popup.querySelector("#weapon-info-wrapper").hidden =
                weaponData.stats === null;

            if (weaponData.name === "Melee") return;

            popup.querySelector("#weapon-cost-block ").textContent =
                `Cost: ${weaponData.cost}`;
            popup.querySelector("#fire-rate-block #value").textContent =
                weaponData.stats.fireRate;
            popup.querySelector("#first-shot-block #value").textContent =
                weaponData.stats.firstShotSpread;
            popup.querySelector("#magazine-block #value").textContent =
                weaponData.stats.magazine;
            popup.querySelector("#reload-speed-block #value").textContent =
                weaponData.stats.reloadSpeed;
            popup.querySelector("#equip-speed-block #value").textContent =
                weaponData.stats.equipSpeed;
            popup.querySelector("#run-speed-block #value").textContent =
                weaponData.stats.runSpeedMultiplier;

            // damage table
            for (const row of document.querySelector("#damage-table").rows) {
                while (row.cells.length !== 1) {
                    row.deleteCell(-1);
                }
            }

            for (const damageInfo of weaponData.stats.damage) {
                const rangeTd = document.createElement("td");
                rangeTd.classList.add(
                    "border-b-2",
                    "border-[#211E1F]",
                    "py-[5px]",
                    "sm:text-lg",
                    "xl:text-2xl",
                );

                const headTd = rangeTd.cloneNode();
                headTd.classList.add(
                    "text-[#FDFDFD]/75",
                    "font-light",
                    "sm:text-base", "xl:text-lg"
                );

                const bodyTd = headTd.cloneNode();
                const legsTd = headTd.cloneNode();
                legsTd.classList.remove(
                    "border-b-2",
                    "border-[#211E1F]",
                    "sm:text-base",
                );

                rangeTd.textContent = `${damageInfo.rangeStartMeters}-${damageInfo.rangeEndMeters}m`;
                headTd.textContent = ~~damageInfo.headDamage;
                bodyTd.textContent = ~~damageInfo.bodyDamage;
                legsTd.textContent = ~~damageInfo.legDamage;

                document.querySelector("#damage-range-tr").append(rangeTd);
                document.querySelector("#damage-head-tr").append(headTd);
                document.querySelector("#damage-body-tr").append(bodyTd);
                document.querySelector("#damage-legs-tr").append(legsTd);
            }
        });

        document.body.classList.add("overflow-hidden");
        popup.classList.remove("hidden");
    }
});
