import { motion } from "motion/react";
import Card from "./Card";

export default function Category({
    categoryName = "Category name",
    modalFunc = () => {},
    cardsData = [],
    agentMode = false,
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="z-10 w-full flex flex-col gap-[10px]"
        >
            <p
                className="bg-[#292727] px-[16px] py-[8px] rounded-[8px] text-[18px] text-[#B8B8B8] font-medium uppercase tracking-widest"
                id="title"
            >
                {categoryName}
            </p>

            <div
                className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                id="cards-grid"
            >
                {cardsData.map((object) => (
                    <Card
                        title={object.cardTitle}
                        image={object.cardImage}
                        modalFunc={modalFunc}
                        modalData={object.data}
                        agentMode={agentMode}
                        key={object.cardId}
                    />
                ))}
            </div>
        </motion.div>
    );
}
