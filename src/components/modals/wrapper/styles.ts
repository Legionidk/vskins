const modalAnimationWrapperBase = "z-40 overflow-hidden";

export const modalAnimationWrapperStyles: Record<
    "centered" | "default",
    string
> = {
    centered: `${modalAnimationWrapperBase} m-auto rounded-[16px]`,
    default: `${modalAnimationWrapperBase} mt-auto mx-auto rounded-t-[16px]`,
};

export const modalWrapperStyle = "z-30 fixed top-0 flex flex-col justify-end size-full";

export const modalBackgroundStyle =
    "fixed top-0 size-full bg-black/50 backdrop-blur-xs";
