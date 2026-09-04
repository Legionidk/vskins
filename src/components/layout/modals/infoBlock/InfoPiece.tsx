interface InfoPieceProps {
    iconUrl?: string;
    title: string;
    value: string;
}

export default function InfoPiece({ title, iconUrl, value }: InfoPieceProps) {
    return (
        <div className="flex flex-col text-[18px]" id="info-piece">
            <p className="flex items-center gap-[5px] font-medium tracking-widest uppercase text-[#B8B8B8]">
                {iconUrl && (
                    <img
                        src={iconUrl}
                        alt={`${title} icon`}
                        className="size-[20px]"
                    />
                )}

                {title}
            </p>

            <p>{value}</p>
        </div>
    );
}
