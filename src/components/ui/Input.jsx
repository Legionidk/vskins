import { useRef } from "react";
import { useState, useEffect } from "react";

const transitionClasses = "transition-all duration-50 ease-in-out";

const inputClasses = {
    base: "size-full text-[18px] px-[16px] pt-[29px] pb-[8px] rounded-[8px] bg-[#323131] hover:not-focus:bg-[#373636]",
    focus: "focus:bg-[#292727] focus:outline-2 focus:outline-[#F0F0F0]",
};

const labelClasses = {
    base: "pointer-events-none absolute uppercase tracking-widest font-medium text-[#B8B8B8] left-[16px]",
    idle: "text-[18px] top-1/2 -translate-y-1/2 group-focus-within:text-[14px] group-focus-within:top-[8px] group-focus-within:translate-y-0",
    focus: "text-[14px] top-[8px] translate-y-0",
};

export default function Input({
    placeholder = "Placeholder",
    onChange = () => {},
}) {
    const [inputValue, setInputValue] = useState(null);

    return (
        <div className="group relative w-full h-[64px]" id="input-wrapper">
            <label
                className={`${transitionClasses} ${labelClasses.base} ${inputValue ? labelClasses.focus : labelClasses.idle}`}
            >
                {placeholder}
            </label>

            <input
                className={`${transitionClasses} ${inputClasses.base} ${inputClasses.focus}`}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    onChange(e);
                }}
            />
        </div>
    );
}
