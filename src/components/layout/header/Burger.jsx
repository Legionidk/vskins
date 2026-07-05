import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { motion } from "motion/react";

import HeaderButton from "./HeaderButton";

export default function Burger({ buttonsData = [], closeFunc }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <motion.div
            initial={{ translateX: 10, opacity: 0 }}
            animate={{ translateX: 0, opacity: 100 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            exit={{ translateX: 10, opacity: 0 }}
            className="z-30 fixed top-0 w-full min-h-dvh flex flex-col items-center bg-[#111111]"
            key="burger-menu"
        >
            <div
                className="w-full h-[80px] flex items-center justify-between px-[20px] border-b-1 border-[#323232]"
                id="header"
            >
                <p className="uppercase tracking-widest font-medium text-[20px]">
                    Menu
                </p>
                <button
                    className="size-[24px]"
                    id="close-button"
                    onClick={closeFunc}
                >
                    <XMarkIcon />
                </button>
            </div>

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
