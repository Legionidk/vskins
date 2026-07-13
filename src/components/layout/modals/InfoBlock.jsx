export function InfoPiece({ title = "Title", icon = null, value = "Value" }) {
    return (
        <div className="flex flex-col text-[18px]" id="info-piece">
            <p className="flex items-center gap-[5px] font-medium tracking-widest uppercase text-[#B8B8B8]">
                {icon && (
                    <img
                        src={icon}
                        alt={`${title.replace(" ", "-")}-icon`}
                        className="size-[20px]"
                    />
                )}

                {title}
            </p>

            <p>{value}</p>
        </div>
    );
}

export function InfoBlock({ title = "Title",  children }) {
    return (
        <div
            className="w-full flex flex-col items-center rounded-[8px] border-2 border-[#292727]"
            id="info-block"
        >
            <div
                className="w-full py-[8px] text-[20px] text-center bg-[#292727]"
                id="title"
            >
                {title}
            </div>

            <div
                className="w-full grid grid-cols-1 gap-[15px] p-[10px] sm:grid-cols-2 lg:grid-cols-4"
                id="info"
            >
                {children}
            </div>
        </div>
    );
}
