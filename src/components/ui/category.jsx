import Card from "./Card";

export default function Category({ categoryId, categoryName, cardsData }) {
    return (
        <div
            className="flex flex-col gap-[10px] w-full"
            id={categoryId}
        >
            <p className="font-light text-sm xl:text-lg" id="title">
                {categoryName}
            </p>

            <div
                className="grid grid-cols-1 gap-[8px] sm:grid-cols-3 lg:grid-cols-4"
                id="cards-wrapper"
            >
                {cardsData.map((data) => (
                    <WeaponCard key={data.uuid} data={data} />
                ))}
            </div>
        </div>
    );
}
