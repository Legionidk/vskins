import { motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

import { opacityAnimation, yAnimation } from "@/animations";
import { modalBackgroundStyle, modalWrapperStyles } from "./styles";

interface ModalWrapperProps {
    children: ReactNode;
    closeFunc: () => void;
    centered?: boolean;
}

export default function ModalWrapper({
    children,
    closeFunc,
    centered = false,
}: ModalWrapperProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <motion.div
            {...opacityAnimation}
            onClick={closeFunc}
            className={modalBackgroundStyle}
            id="modal-background"
        >
            <motion.div
                {...yAnimation}
                className={
                    centered
                        ? modalWrapperStyles.centered
                        : modalWrapperStyles.default
                }
                id="modal-wrapper"
            >
                {children}
            </motion.div>
        </motion.div>,
        document.querySelector("#modal-root")!,
    );
}
