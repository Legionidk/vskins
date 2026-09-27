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

    const imageWrapperStyle = clsx(
        "flex items-center justify-center bg-[#292727]",
        agentMode ? "h-[175px] pt-[25px]" : "h-[135px] p-[25px_25px]",
        !isLoaded && "animate-pulse",
    );

    const imageStyle = clsx(
        "object-contain size-full",
        "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "group-hover:scale-110",
        !isLoaded && "hidden",
    );

    return (
        <div className={imageWrapperStyle} id="image-wrapper">
            <img
                src={imageUrl}
                alt={`${alt} image`}
                className={imageStyle}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </div>
    );
}
