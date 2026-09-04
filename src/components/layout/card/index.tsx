import { motion } from "motion/react";

import ImageWrapper from "./ImageWrapper";
import transitionSettings from "@/animations/transition";

interface CardProps<TModalData> {
    title: string;
    imageUrl: string;
    agentMode?: boolean;
    modalData: TModalData;
    modalFunc: (modalData: TModalData) => void;
}

export default function Card<TModalData>({
    title,
    imageUrl,
    agentMode = false,
    modalData,
    modalFunc,
}: CardProps<TModalData>) {
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
            <ImageWrapper
                alt={title}
                imageUrl={imageUrl}
                agentMode={agentMode}
            />

            <p
                className="px-[16px] py-[8px] text-[20px] bg-[#211E1F]"
                id="title"
            >
                {title}
            </p>
        </motion.div>
    );
}
