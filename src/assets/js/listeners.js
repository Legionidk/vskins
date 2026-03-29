document.body.querySelector("#search-box").addEventListener("input", (e) => {
    const cards = document.querySelectorAll("#card");
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

document.querySelector("#burger-open-button").addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    document
        .querySelector("#popup-container[data-popup-type=burger]")
        .classList.remove("hidden");
});

document.querySelector("#burger-close-button").addEventListener("click", () => {
        document.body.classList.remove("overflow-hidden");
    document
        .querySelector("#popup-container[data-popup-type=burger]")
        .classList.add("hidden");
});

document.body.addEventListener("click", (e) => {
    if (e.target.id === "popup-container") {
        e.target.closest("#popup-container").classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        return;
    }

    if (e.target.closest("#yo-button") !== null) {
        document.body.classList.add("overflow-hidden");
        document
            .querySelector("#popup-container[data-popup-type=rigby]")
            .classList.remove("hidden");
        return;
    }
});
