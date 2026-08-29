import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import transitionSettings from "../../animations/transition";

export default function ModalWrapper({ children, closeFunc }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    // Known bug: on gecko (tested on firefox, zen) opacity animation is broken,
    // but user wont notice cuz of small duration so i dont really care cuz idk how to fix it :)
    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionSettings}
            className="z-30 fixed inset-0 overflow-y-auto pt-[100px] bg-black/50 backdrop-blur-xs md:p-[20px_20px]"
            key="modal-blur"
            onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                closeFunc();
            }}
        >
            <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
                transition={transitionSettings}
                className="min-h-full flex items-end justify-center md:items-center"
                key="modal-wrapper"
                onClick={(e) => {
                    if (e.target !== e.currentTarget) return;
                    closeFunc();
                }}
            >
                {children}
            </motion.div>
        </motion.div>,
        document.querySelector("#modal-root"),
    );
}
