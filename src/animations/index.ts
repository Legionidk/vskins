import type { Transition, Variants } from "motion/react";

export const transitionSettings: Transition = {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
};

export const opacityAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: transitionSettings,
};

export const yAnimation = {
    initial: { y: "100dvh" },
    animate: { y: 0 },
    exit: { y: "100dvh" },
    transition: transitionSettings,
};
