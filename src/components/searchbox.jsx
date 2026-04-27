const searchFunc = (e) => {
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

export default function SearchBox() {
    return (
        <input
            onChange={searchFunc}
            type="text"
            className="rounded-[8px] px-[16px] py-[8px] w-full bg-[#292727] font-light focus:bg-[#211E1F] focus:outline-none border-2 border-[#292727] xl:text-xl"
            id="search-box"
            placeholder="Type weapon name here..."
        />
    );
}
