import { motion } from "motion/react";
import { useState, useEffect } from "react";

import imagePlaceholder from "@/assets/imagePlaceholder.svg";

export default function Card({
    title = "Title",
    id = "card-id",
    image = imagePlaceholder,
    modalFunc = () => {},
    modalData = {},
}) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.15, ease: "circOut" }}
            className="z-10 cursor-pointer flex flex-col rounded-[8px] overflow-hidden ring-[#FF4248] hover:ring-2"
            key="card"
            data-card-id={id}
            onClick={() => {
                modalFunc(modalData);
            }}
        >
            <div
                className="flex items-center justify-center h-[135px] p-[25px_50px] bg-[#292727]"
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
                    className={`w-full h-full object-contain ${!isLoaded && "hidden"}`}
                />
            </div>

            <p
                className="px-[16px] py-[8px] text-[20px] bg-[#211E1F]"
                id="title"
            >
                {title}
            </p>
        </motion.div>
    );
}
