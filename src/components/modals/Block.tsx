import { ReactNode } from "react";

const blockStyle = "w-full rounded-[8px] overflow-hidden";
const titleStyle =
    "flex items-center justify-center gap-[5px] p-[8px_16px] text-[20px] bg-[#292727]";

interface ModalBlock {
    children?: ReactNode;
    title: string | number;
    iconUrl?: string;
}

export default function ModalBlock({
    children = null,
    title,
    iconUrl,
}: ModalBlock) {
    return (
        <div className={blockStyle} id="modal-info-block">
            <p className={titleStyle} id="title">
                {iconUrl && <img className="size-[12px]" src={iconUrl} />}
                {title}
            </p>

            {children}
        </div>
    );
}
