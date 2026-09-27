import clsx from "clsx";
import { ReactNode } from "react";

const blockStyle =
    "w-full rounded-[8px] overflow-hidden border-[#292727] border-[2px]";
const titleStyle =
    "flex items-center justify-center gap-[5px] p-[8px_16px] text-[20px] bg-[#292727]";

interface ModalBlock {
    children?: ReactNode;
    title: string | number;
    iconUrl?: string;
    padding?: boolean;
}

export default function ModalBlock({
    children,
    title,
    iconUrl,
    padding = true,
}: ModalBlock) {
    const infoWrapperStyle = clsx(
        "flex flex-col gap-[5px]",
        padding && "p-[10px]",
    );

    return (
        <div className={blockStyle} id="modal-info-block">
            <p className={titleStyle} id="title">
                {iconUrl && <img className="size-[12px]" src={iconUrl} />}
                {title}
            </p>

            {children && (
                <div className={infoWrapperStyle} id="info-wrapper">
                    {children}
                </div>
            )}
        </div>
    );
}
