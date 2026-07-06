const transitionClasses = "transition-all duration-75 ease-in-out";

const inputClasses = {
    base: "peer size-full text-[18px] p-[29px_16px_8px] rounded-[8px] bg-[#323131] ring-[#F0F0F0] hover:not-focus:bg-[#373636]",
    focused: "focus:bg-[#292727] focus:ring-2 focus:outline-none",
};

const labelClasses = {
    base: "pointer-events-none absolute uppercase tracking-widest font-medium text-[14px] text-[#B8B8B8] top-[8px] left-[16px]",
    focused:
        "peer-focus:text-[14px] peer-focus:top-[8px] peer-focus:translate-y-0",
    placeholderShown:
        "peer-placeholder-shown:text-[18px] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2",
};

export default function Input({
    placeholder = "Placeholder",
    onChange = () => {
        console.log("[INPUT] On change function is not provided");
    },
}) {
    return (
        <div className="relative w-full h-[64px]" id="input-wrapper">
            <input
                placeholder=""
                className={`${transitionClasses} ${inputClasses.base} ${inputClasses.focused}`}
                onChange={(e) => {
                    onChange(e);
                }}
            />

            <label
                className={`${transitionClasses} ${labelClasses.base} ${labelClasses.focused} ${labelClasses.placeholderShown}`}
            >
                {placeholder}
            </label>
        </div>
    );
}
