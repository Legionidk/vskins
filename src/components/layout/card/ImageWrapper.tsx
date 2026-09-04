import clsx from "clsx";
import { useState } from "react";

interface ImageWrapperProps {
    alt: string;
    imageUrl: string;
    agentMode?: boolean;
}

export default function ImageWrapper({
    alt,
    imageUrl,
    agentMode = false,
}: ImageWrapperProps) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div
            className={clsx(
                "flex items-center justify-center bg-[#292727]",
                "transition-[padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                agentMode
                    ? "h-[175px] pt-[25px] group-hover:pt-[10px]"
                    : "h-[135px] p-[25px_50px] group-hover:p-[15px_25px]",
                !isLoaded && "animate-pulse",
            )}
            id="image-wrapper"
        >
            <img
                src={imageUrl}
                alt={`${alt} image`}
                className={clsx(
                    "object-contain size-full",
                    !isLoaded && "hidden",
                )}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </div>
    );
}
