export const transition = "transition-all duration-75 ease-in-out";

export const input = `
    peer size-full
    text-[18px]
    p-[29px_16px_8px]
    rounded-[8px]
    bg-[#323131]
    ring-[#F0F0F0]
    focus:bg-[#292727]
    focus:ring-2
    focus:outline-none
    hover:not-focus:bg-[#373636]
`;

export const activeLabel = `
    pointer-events-none absolute
    uppercase tracking-widest
    font-medium text-[14px]
    text-[#B8B8B8]
    top-[8px] left-[16px]  
`;

export const inactiveLabel = `
    pointer-events-none absolute
    uppercase tracking-widest
    font-medium text-[18px]
    text-[#B8B8B8]
    top-1/2 left-[16px] -translate-y-1/2 
`;
