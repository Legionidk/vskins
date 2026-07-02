import Card from "./Card";

export default function Category({
    categoryName = "Category name",
    categoryId = "category-id",
    modalFunc = () => {},
    data = [],
}) {
    return (
        <div
            className="z-10 w-full flex flex-col gap-[10px]"
            id="category-wrapper"
            data-category-id={categoryId}
        >
            <p
                className="bg-[#292727] px-[16px] py-[8px] rounded-[8px] text-[18px] text-[#B8B8B8] font-medium uppercase tracking-widest"
                id="title"
            >
                {categoryName}
            </p>

            <div className="grid grid-cols-1 gap-[10px]" id="cards-grid">
                {data.map((object) => (
                    <Card
                        title={object.cardTitle}
                        id={object.id}
                        image={object.cardImage}
                        modalFunc={modalFunc}
                        modalData={object.data}
                        key={object.id}
                    />
                ))}
            </div>
        </div>
    );
}
