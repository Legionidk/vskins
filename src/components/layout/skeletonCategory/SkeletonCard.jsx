import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function SkeletonCard() {
    return (
        <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.1, ease: "circOut" }}
            className="z-10 w-full rounded-[8px] overflow-hidden"
            key="skeleton-card"
        >
            <div
                className="w-full h-[135px] bg-[#211E1F] animate-pulse"
                id="skeleton-image"
            />

            <div
                className="w-full h-[46px] flex items-center px-[16px] py-[8px] bg-[#292727]"
                id="skeleton-title"
            >
                <div
                    className="h-[15px] w-[100px] bg-[#211E1F] rounded-[8px] animate-pulse"
                    id="skeleton-text"
                />
            </div>
        </motion.div>
    );
}
