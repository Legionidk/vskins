export function InfoPiece({
    title = "Title",
    value = "Value",
    id = "piece-id",
}) {
    return (
        <div className="flex flex-col text-[18px]" id={id}>
            <p className="font-medium tracking-widest uppercase text-[#B8B8B8] -mb-[2px]">
                {title}
            </p>
            <p>{value}</p>
        </div>
    );
}

export function InfoBlock({ title = "Title", children, id = "info-block" }) {
    return (
        <div
            className="w-full flex flex-col items-center rounded-[8px] border-2 border-[#292727]"
            id={id}
        >
            <div
                className="w-full flex justify-center py-[8px] text-[20px] bg-[#292727]"
                id="title"
            >
                {title}
            </div>

            <div className="w-full grid grid-cols-2 gap-[10px] px-[16px] py-[8px] sm:grid-cols-3 lg:flex lg:justify-between" id="info">
                {children}
            </div>
        </div>
    );
}
