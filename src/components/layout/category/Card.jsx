import { motion } from "motion/react";
import { useState, useEffect } from "react";

import imagePlaceholder from "@/assets/imagePlaceholder.svg";

export default function Card({
    title = "Title",
    id = "card-id",
    image = imagePlaceholder,
    modalFunc = () => {},
    modalData = {},
    agentMode = false,
}) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            whileHover={{ boxShadow: "0 0 0 2px #FF4248" }}
            transition={{ duration: 0.15, ease: "circOut" }}
            className="z-10 select-none cursor-pointer flex flex-col rounded-[8px] overflow-hidden"
            key="card"
            data-card-id={id}
            onClick={() => {
                modalFunc(modalData);
            }}
        >
            <div
                className={`flex items-center justify-center bg-[#292727] ${agentMode ? "h-fit pt-[25px]" : "h-[135px] p-[25px_50px]"} ${!isLoaded && "animate-pulse"}`}
                id="image-wrapper"
            >
                <img
                    onLoad={() => {
                        setLoaded(true);
                    }}
                    src={image}
                    alt={`${title} image`}
                    hidden={!isLoaded}
                    className={`object-contain ${agentMode ? "size-[150px]" : "size-full"}`}
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
