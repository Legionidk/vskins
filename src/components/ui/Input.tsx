import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useId } from "react";

import transitionSettings from "../../animations/transition";

interface InputProps {
    placeholder?: string;
    onChange?: (value: string) => void;
}

const transition = "transition-all duration-75 ease-in-out";

const input = `
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

const label = `
    pointer-events-none absolute
    uppercase tracking-widest
    font-medium text-[14px]
    text-[#B8B8B8]
    top-[8px] left-[16px]
    peer-focus:text-[14px]
    peer-focus:top-[8px]
    peer-focus:translate-y-0
    peer-placeholder-shown:text-[18px]
    peer-placeholder-shown:top-1/2
    peer-placeholder-shown:-translate-y-1/2
`;

export default function Input({
    placeholder = "Placeholder",
    onChange = () => {},
}: InputProps) {
    const inputId = useId();
    const [value, setValue] = useState("");

    const changeHandler = (value: string) => {
        setValue(value);
        onChange(value);
    };

    const clearHandler = () => {
        setValue("");
        onChange("");
    };

    return (
        <div className="relative w-full h-[64px]" id="input-wrapper">
            <input
                value={value}
                placeholder=""
                className={`${transition} ${input}`}
                onChange={(e) => {
                    changeHandler(e.target.value);
                }}
                id={inputId}
            />

            <label className={`${transition} ${label}`} htmlFor={inputId}>
                {placeholder}
            </label>

            <AnimatePresence>
                {value && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={transitionSettings}
                        onClick={clearHandler}
                    >
                        <XMarkIcon
                            className={clsx(
                                "size-[24px] absolute bottom-[8px] right-[16px] cursor-pointer",
                            )}
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
