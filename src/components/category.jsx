import WeaponCard from "./weaponCard";

export default function Category(categoryUuid, categoryName, weaponsData) {
    return (
        <div
            className="flex flex-col gap-[5px] w-full"
            id="category"
            data-category-uuid={categoryUuid}
        >
            <p className="font-light text-sm xl:text-lg" id="title">
                {categoryName}
            </p>

            <div
                className="grid grid-cols-1 gap-[8px] sm:grid-cols-3 lg:grid-cols-4"
                id="cards-wrapper"
            >
                {weaponsData.map((weapon) => {
                    <WeaponCard weaponData={weapon} />;
                })}
            </div>
        </div>
    );
}
