import clsx from "clsx";
import type { ReactNode } from "react";

interface InfoBlockProps {
    title: string;
    adaptive?: boolean;
    children: ReactNode;
}

export default function InfoBlock({
    title,
    adaptive = true,
    children,
}: InfoBlockProps) {
    return (
        <div
            className="w-full flex flex-col items-center rounded-[8px] border-2 border-[#292727]"
            id={`${title.replace(" ", "-")}-info-block`}
        >
            <div
                className="w-full py-[8px] text-[20px] text-center bg-[#292727]"
                id="title"
            >
                {title}
            </div>

            <div
                className={clsx(
                    "w-full grid grid-cols-1 gap-[15px] p-[10px]",
                    adaptive && "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                )}
                id="info"
            >
                {children}
            </div>
        </div>
    );
}
