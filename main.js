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
        return;
    }
});
