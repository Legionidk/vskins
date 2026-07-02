import { useState } from "react";
import imagePlaceholder from "@/assets/imagePlaceholder.svg";

export default function Card({ title = "Title", image = imagePlaceholder }) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div
            className="z-10 flex flex-col rounded-[8px] overflow-hidden transition-all duration-75 ease-in-out ring-[#FF4248] hover:ring-2"
            id="card"
        >
            <div
                className="flex justify-center px-[50px] py-[25px] bg-[#292727]"
                id="image-wrapper"
            >
                {!isLoaded && (
                    <div
                        className="size-[85px] bg-[#211E1F] rounded-[8px] animate-pulse"
                        id="skeleton-image"
                    />
                )}

                <img
                    onLoad={() => {
                        setLoaded(true);
                    }}
                    src={image}
                    alt={`${title} image`}
                    className={`w-fit max-h-[85px] ${!isLoaded ? "hidden" : ""}`}
                />
            </div>

            <p
                className="px-[16px] py-[8px] text-[20px] bg-[#211E1F]"
                id="title"
            >
                {title}
            </p>
        </div>
    );
}
