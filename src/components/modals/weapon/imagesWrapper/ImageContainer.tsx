import { useState } from "react";
import Loader from "@/components/Loader";

interface ImageProps {
    alt: string;
    url: string;
}

export default function Image({ alt, url }: ImageProps) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div
            className="flex flex-col items-center gap-[10px] w-full"
            id="image-container"
        >
            <img
                className="object-contain max-h-[100px]"
                src={url}
                alt={`${alt} image`}
                hidden={!isLoaded}
                onLoad={() => setLoaded(true)}
            />

            {!isLoaded && <Loader />}
        </div>
    );
}
