import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";

import imagePlaceholder from "@/assets/imagePlaceholder.svg";
import transitionSettings from "../../../animations/transition";

export default function Card({
    title = "Card title",
    image = imagePlaceholder,
    agentMode = false,
    modalData = null,
    modalFunc = () => {
        console.log("[CARD] Modal window function not provided");
    },
}) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ boxShadow: "0 0 0 2px #FF4248" }}
            transition={transitionSettings}
            className="z-10 select-none cursor-pointer flex flex-col rounded-[8px] overflow-hidden"
            id="card"
            onClick={() => {
                modalFunc(modalData);
            }}
        >
            <div
                className={clsx(
                    "flex items-center justify-center bg-[#292727]",
                    agentMode
                        ? "h-[175px] pt-[25px]"
                        : "h-[135px] p-[25px_50px]",
                    !isLoaded && "animate-pulse",
                )}
                id="image-wrapper"
            >
                <img
                    src={image}
                    alt={`${title} image`}
                    hidden={!isLoaded}
                    className={clsx(
                        "object-contain",
                        agentMode ? "size-[150px]" : "size-full",
                    )}
                    onLoad={() => {
                        setLoaded(true);
                    }}
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
