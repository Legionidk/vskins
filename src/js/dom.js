export function createCategory(name, id) {
    const category = document.createElement("div");
    const title = document.createElement("p");
    const cardsWrapper = document.createElement("div");

    category.id = `category`;
    category.dataset.categoryUuid = id;
    title.id = "title";
    cardsWrapper.id = "cards-wrapper";

    category.classList.add("flex", "flex-col", "gap-1", "w-full");
    title.classList.add("font-light", "lg:text-lg");
    cardsWrapper.classList.add(
        "grid",
        "grid-cols-2",
        "gap-2",
        "md:grid-cols-3",
        "xl:grid-cols-4",
        "2xl:grid-cols-5",
    );

    category.append(title, cardsWrapper);
    title.textContent = name;

    return category;
}

export function createWeaponCard(weaponUuid, weaponData) {
    const card = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");

    card.id = "card";
    card.dataset.weaponUuid = weaponUuid;
    imgWrapper.id = "img-wrapper";
    img.id = "weapon-img";
    title.id = "title";

    card.classList.add(
        "rounded-lg",
        "overflow-hidden",
        "cursor-pointer",
        "hover:outline-2",
        "hover:outline-[#FF4248]",
    );
    imgWrapper.classList.add(
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "h-37",
        "p-8",
        "bg-[#211E1F]",
        "ease-out",
        "duration-100",
    );
    img.classList.add("max-h-full", "max-w-full");
    title.classList.add(
        "bg-[#292727]",
        "px-4",
        "py-2",
        "text-lg",
        "lg:text-xl",
    );

    img.src = weaponData.image;
    img.alt = `${weaponData.name} image`;
    title.textContent = weaponData.name;

    imgWrapper.append(img);
    card.append(imgWrapper, title);

    return card;
}
