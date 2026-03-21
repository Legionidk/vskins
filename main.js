import { createCategory, createWeaponCard } from "./src/js/dom";
import { getWeapons } from "./src/js/api";

const weaponsData = getWeapons();

weaponsData.then((data) => {
    for (const [uuid, weaponData] of Object.entries(data)) {
        let category = document.body.querySelector(
            `div[data-category-uuid="${weaponData.categoryId}"]`,
        );
        if (category === null) {
            category = createCategory(
                weaponData.categoryText,
                weaponData.categoryId,
            );
            document.body.querySelector("main").append(category);
        }

        category
            .querySelector("#cards-wrapper")
            .append(createWeaponCard(uuid, weaponData));
    }

    document.body.querySelector("#load-spinner").classList.add("hidden");
    document.body.querySelector("main").classList.remove("hidden");
});

document.body
    .querySelector("#weapon-search-box")
    .addEventListener("input", (e) => {
        const cards = document.body.querySelectorAll("#card");
        const searchString = e.target.value.toLowerCase();
        const searchResults = [];

        for (const card of cards) {
            if (searchString === "") {
                card.closest("#category").classList.remove("hidden");
                card.classList.remove("hidden");
                continue;
            }

            if (!card.getAttribute("data-weapon-name").includes(searchString)) {
                card.closest("#category").classList.add("hidden");
                card.classList.add("hidden");
                continue;
            }

            searchResults.push(card);
        }

        for (card of searchResults) {
            card.classList.remove("hidden");
            card.closest("#category").classList.remove("hidden");
        }
    });

document.body.addEventListener("click", (e) => {
    if (e.target.closest("#card") !== null) {
        weaponsData.then((data) => {
            const weaponUuid = e.target
                .closest("#card")
                .getAttribute("data-weapon-uuid");
            const weaponData = data[weaponUuid];

            document.body.querySelector("#weapon-name").textContent =
                weaponData.name;
            document.body.querySelector("#weapon-category").textContent =
                weaponData.categoryText;
            document.body.querySelector("#weapon-cost-block").textContent =
                `Cost: ${weaponData.cost}`;
            document.body.querySelector("#weapon-image").src = weaponData.image;
            document.body.querySelector("#weapon-image").alt =
                `${weaponData.name} image`;

            if (weaponData.name !== "Melee") {
                const fireRateParagraph = document.body.querySelector(
                    "#fire-rate-block #block-info #value",
                );
                const firstShotParagraph = document.body.querySelector(
                    "#first-shot-block #block-info #value",
                );
                const magazineParagraph = document.body.querySelector(
                    "#magazine-block #block-info #value",
                );
                const reloadSpeedParagraph = document.body.querySelector(
                    "#reload-speed-block #block-info #value",
                );
                const equipSpeedParagraph = document.body.querySelector(
                    "#equip-speed-block #block-info #value",
                );
                const runSpeedParagraph = document.body.querySelector(
                    "#run-speed-block #block-info #value",
                );

                document.body.querySelector("#weapon-name").textContent =
                    weaponData.name;
                document.body.querySelector("#weapon-category").textContent =
                    weaponData.categoryText;
                document.body.querySelector("#weapon-cost-block").textContent =
                    `Cost: ${weaponData.cost}`;

                fireRateParagraph.textContent = weaponData.stats.fireRate;
                firstShotParagraph.textContent =
                    weaponData.stats.firstShotSpread;
                magazineParagraph.textContent = weaponData.stats.magazine;
                reloadSpeedParagraph.textContent = weaponData.stats.reloadSpeed;
                equipSpeedParagraph.textContent = weaponData.stats.equipSpeed;
                runSpeedParagraph.textContent =
                    weaponData.stats.runSpeedMultiplier;

                return;
            }

            document.body
                .querySelector("#weapon-info-wrapper")
                .classList.add("hidden");
        });

        document.body
            .querySelectorAll("#popup-container")[1]
            .classList.remove("hidden");
        return;
    }

    if (e.target.closest("#yo-button") !== null) {
        document.body
            .querySelectorAll("#popup-container")[0]
            .classList.remove("hidden");
        return;
    }

    if (e.target.closest("#background-popup") !== null) {
        e.target.closest("#popup-container").classList.add("hidden");
        document.body
            .querySelector("#weapon-info-wrapper")
            .classList.remove("hidden");
        return;
    }
});
