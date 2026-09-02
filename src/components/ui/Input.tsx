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

const activeLabel = `
    pointer-events-none absolute
    uppercase tracking-widest
    font-medium text-[14px]
    text-[#B8B8B8]
    top-[8px] left-[16px]  
`;

const inactiveLabel = `
    pointer-events-none absolute
    uppercase tracking-widest
    font-medium text-[18px]
    text-[#B8B8B8]
    top-1/2 left-[16px] -translate-y-1/2 
`;

export default function Input({
    placeholder = "Placeholder",
    onChange = () => {},
}: InputProps) {
    const inputId = useId();
    const [value, setValue] = useState("");
    const [focus, setFocus] = useState(false);

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
                onFocus={() => {
                    setFocus(true);
                }}
                onBlur={() => {
                    setFocus(false);
                }}
                value={value}
                placeholder=""
                className={`${transition} ${input}`}
                onChange={(e) => {
                    changeHandler(e.target.value);
                }}
                id={inputId}
            />

            <AnimatePresence>
                {!focus && !value && (
                    <motion.label
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={transitionSettings}
                        className={`${inactiveLabel}`}
                        htmlFor={inputId}
                        id={`${inputId}-inactive-label`}
                    >
                        {placeholder}
                    </motion.label>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {(focus || value) && (
                    <motion.label
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={transitionSettings}
                        className={activeLabel}
                        htmlFor={inputId}
                        id={`${inputId}-active-label`}
                    >
                        {placeholder}
                    </motion.label>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {value && (
                    <motion.button
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={transitionSettings}
                        onClick={clearHandler}
                        className={clsx(
                            "size-[24px] absolute bottom-[8px] right-[16px] cursor-pointer",
                        )}
                        id={`${inputId}-clear-button`}
                    >
                        <XMarkIcon />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
