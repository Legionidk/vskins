import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import rigby from "@/assets/rigby.jpg";

export default function RigbyModal({ closeFunc }) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div
            className="w-full max-w-[500px] h-fit flex flex-col items-center rounded-[16px] p-[8px] bg-[#211E1F]"
            id="rigby-modal"
        >
            {!isLoaded && (
                <div className="size-full aspect-[1/1] bg-[#292727] animate-pulse rounded-[8px]"></div>
            )}

            <img
                onLoad={() => {
                    setLoaded(true);
                }}
                src={rigby}
                alt="Rigby image"
                className={`rounded-[8px] ${!isLoaded && "hidden"}`}
            />
        </div>
    );
}
