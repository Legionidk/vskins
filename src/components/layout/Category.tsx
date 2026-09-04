import { motion } from "motion/react";

import Card from "./card";
import CardData from "@/types/card";
import transitionSettings from "@/animations/transition";

interface CategoryProps<TModalData> {
    name: string;
    iconUrl?: string;
    agentMode?: boolean;
    cardsData: CardData<TModalData>[];
    modalFunc: (modalData: TModalData) => void;
}

export default function Category<TModalData>({
    name,
    iconUrl,
    agentMode = false,
    cardsData,
    modalFunc = () => {},
}: CategoryProps<TModalData>) {
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
                {iconUrl && (
                    <img
                        src={iconUrl}
                        alt={`${name}-icon`}
                        className="size-[20px]"
                    />
                )}

                {name}
            </p>

            <div
                className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                id="cards-grid"
            >
                {cardsData.map((object) => (
                    <Card<TModalData>
                        title={object.name}
                        imageUrl={object.imageUrl}
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
