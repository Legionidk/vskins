import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import type { ReactNode } from "react";

import transitionSettings from "../../animations/transition";

interface ModalWrapperProps {
    children: ReactNode;
    closeFunc: () => void;
}

export default function ModalWrapper({
    children,
    closeFunc,
}: ModalWrapperProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;
        closeFunc();
    };

    // Known bug: on gecko (tested on firefox, zen) opacity animation is broken,
    // but user wont notice cuz of small duration so i dont really care cuz idk how to fix it :)
    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionSettings}
            className="z-30 fixed inset-0 overflow-y-auto pt-[100px] bg-black/50 backdrop-blur-xs"
            key="modal-blur"
            id="modal-blur"
            onClick={onClickHandler}
        >
            <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
                transition={transitionSettings}
                className="min-h-full flex items-end justify-center"
                key="modal-wrapper"
                id="modal-wrapper"
                onClick={onClickHandler}
            >
                {children}
            </motion.div>
        </motion.div>,
        document.querySelector("#modal-root")!,
    );
}
