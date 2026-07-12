import { motion } from "motion/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

import HeaderButton from "./HeaderButton";

export default function Burger({ buttonsData = [] }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="z-30 fixed top-[80px] w-full min-h-dvh flex flex-col items-center bg-[#111111]"
            key="burger-menu"
        >
            <div
                className="size-full flex flex-col items-end gap-[10px] p-[20px]"
                id="buttons-wrapper"
            >
                {buttonsData.length === 0 ? (
                    <p className="text-[18px] text-[#b8b8b8] font-light self-center">
                        There is no elements to render :(
                    </p>
                ) : (
                    buttonsData.map((button) => (
                        <HeaderButton
                            text={button.text}
                            status={button.status}
                            link={button.link}
                            key={button.link}
                        />
                    ))
                )}
            </div>
        </motion.div>,
        document.querySelector("#modal-root"),
    );
}
