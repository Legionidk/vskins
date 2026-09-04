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
                agentMode ? "h-[175px] pt-[25px]" : "h-[135px] p-[25px_50px]",
                !isLoaded && "animate-pulse",
            )}
            id="image-wrapper"
        >
            <img
                src={imageUrl}
                alt={`${alt} image`}
                className={clsx(
                    "object-contain",
                    agentMode ? "size-[150px]" : "size-full",
                    !isLoaded && "hidden",
                )}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </div>
    );
}
