const searchBoxFunc = (e) => {
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
};

export default searchBoxFunc;
