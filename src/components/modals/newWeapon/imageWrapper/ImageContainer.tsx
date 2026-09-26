import { useState } from "react";

const titleStyle = "text-[16px] text-[#B8B8B8]";
const imageContainerStyle = "flex flex-col gap-[10px] w-full";

interface ImageProps {
    title: string;
    url: string;
}

export default function Image({ title, url }: ImageProps) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div className={imageContainerStyle} id="image-container">
            <span className={titleStyle} id="title">
                {title}
            </span>

            <img
                className="object-contain max-h-[100px]"
                src={url}
                alt={`${title} image`}
                hidden={!isLoaded}
                onLoad={() => setLoaded(true)}
            />

            {!isLoaded && (
                <div
                    className="animate-pulse w-full h-[100px] bg-[#211E1F] rounded-[16px]"
                    id="load-placeholder"
                />
            )}
        </div>
    );
}
