import { motion, AnimatePresence } from "motion/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useId } from "react";

import transitionSettings from "@/animations/transition";
import { transition, input, activeLabel, inactiveLabel } from "./styles";
import {
    inactiveLabelAnimations,
    activeLabelAnimations,
    clearButtonAnimations,
} from "./animations";

interface InputProps {
    placeholder?: string;
    onChange?: (value: string) => void;
}

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
                        {...inactiveLabelAnimations}
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
                        {...activeLabelAnimations}
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
                        {...clearButtonAnimations}
                        transition={transitionSettings}
                        onClick={clearHandler}
                        className="size-[24px] absolute bottom-[8px] right-[16px] cursor-pointer"
                        id={`${inputId}-clear-button`}
                    >
                        <XMarkIcon />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
