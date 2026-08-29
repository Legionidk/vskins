import { motion } from "motion/react";

import Card from "./Card";
import transitionSettings from "../../../animations/transition";

export default function Category({
    categoryName = "Category name",
    icon = null,
    agentMode = false,
    cardsData = [],
    modalFunc = () => {
        console.log("[CATEGORY] Modal window function not provided");
    },
}) {
    return (
        <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionSettings}
            className="z-10 w-full flex flex-col gap-[10px]"
            id="category"
        >
            <p
                className="flex items-center gap-[10px] bg-[#292727] p-[8px_16px] rounded-[8px] text-[18px] text-[#B8B8B8] font-medium uppercase tracking-widest"
                id="title"
            >
                {icon && (
                    <img
                        src={icon}
                        alt={`${categoryName.replace(" ", "-")}-icon`}
                        className="size-[20px]"
                    />
                )}

                {categoryName}
            </p>

            <div
                className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                id="cards-grid"
            >
                {cardsData.map((object) => (
                    <Card
                        title={object.name}
                        image={object.imageUrl}
                        agentMode={agentMode}
                        modalData={object.modalData}
                        modalFunc={modalFunc}
                        key={object.id}
                    />
                ))}
            </div>
        </motion.div>
    );
}
