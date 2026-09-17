interface modalWrapperType {
    centered: string;
    default: string;
}

export const modalBackgroundStyle =
    "z-30 fixed top-0 flex size-full bg-black/50 backdrop-blur-xs";

export const modalWrapperStyles: modalWrapperType = {
    centered: "size-fit m-auto rounded-[16px] overflow-hidden",
    default: "size-fit mt-auto mx-auto rounded-t-[16px] overflow-hidden",
};
