import { useRef } from "react";
import { useState, useEffect } from "react";

const inputWrapperClasses = {
    base: "h-[64px] w-full flex flex-col justify-center px-[16px] py-[8px] rounded-[8px] transition-all duration-50 cursor-pointer",
    idle: "bg-[#323131] hover:bg-[#373636]",
    focused: "outline-2 outline-[#F0F0F0] bg-[#292727]",
};

export default function Input({
    placeholder = "Placeholder",
    onChange = () => {},
}) {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState(null);
    const [isFocused, setFocused] = useState(false);

    return (
        <div
            className={`${inputWrapperClasses.base} ${isFocused ? inputWrapperClasses.focused : inputWrapperClasses.idle}`}
            id="input-wrapper"
            onClick={() => {
                inputRef.current.focus();
            }}
        >
            <p
                className={`select-none uppercase tracking-widest text-[#B8B8B8] font-medium transition-all ease-in-out duration-50 ${isFocused || inputValue ? "text-[14px]" : "text-[18px]"}`}
                id="placeholder"
            >
                {placeholder}
            </p>

            <input
                ref={inputRef}
                onFocus={() => {
                    setFocused(true);
                }}
                onBlur={() => {
                    setFocused(false);
                }}
                onChange={(e) => {
                    setInputValue(e.currentTarget.value);
                    onChange(e);
                }}
                className={`pointer-events-none outline-none transition-all duration-50 ease-in-out ${isFocused || inputValue ? "h-[24px]" : "h-0"}`}
            />
        </div>
    );
}
