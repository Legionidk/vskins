import { useState } from "react";

interface ImageProps {
    alt: string;
    url: string;
}

export default function Image({ alt, url }: ImageProps) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div className="flex flex-col gap-[10px] w-full" id="image-container">
            <img
                className="object-contain max-h-[100px]"
                src={url}
                alt={`${alt} image`}
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
