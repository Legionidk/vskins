interface modalAnimationWrapperType {
    centered: string;
    default: string;
}

const modalAnimationWrapperBase = "z-40 size-fit overflow-hidden";

export const modalWrapperStyle = "z-30 fixed top-0 flex size-full";

export const modalBackgroundStyle =
    "fixed top-0 size-full bg-black/50 backdrop-blur-xs";

export const modalAnimationWrapperStyles: modalAnimationWrapperType = {
    centered: `${modalAnimationWrapperBase} m-auto rounded-[16px]`,
    default: `${modalAnimationWrapperBase} mt-auto mx-auto rounded-t-[16px]`,
};
