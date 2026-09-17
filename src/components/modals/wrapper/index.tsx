import { motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import type { ReactNode } from "react";

import { opacityAnimation, yAnimation } from "@/animations";
import {
    modalBackgroundStyle,
    modalWrapperStyle,
    modalAnimationWrapperStyles,
} from "./styles";

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
            className={clsx(modalWrapperStyle, !centered && "pt-[100px]")}
            id="modal-wrapper"
        >
            <motion.div
                {...yAnimation}
                className={
                    centered
                        ? modalAnimationWrapperStyles.centered
                        : modalAnimationWrapperStyles.default
                }
                id="modal-animation-wrapper"
            >
                {children}
            </motion.div>

            <motion.div
                {...opacityAnimation}
                onClick={closeFunc}
                className={modalBackgroundStyle}
                id="modal-background"
            />
        </motion.div>,
        document.querySelector("#modal-root")!,
    );
}
