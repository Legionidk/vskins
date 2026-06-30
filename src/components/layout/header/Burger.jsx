import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import HeaderButton from "./HeaderButton";

export default function Burger({ buttonsData = [], closeFunc }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <div
            className={`z-30 fixed top-0 w-full min-h-dvh flex flex-col items-center bg-[#111111] transition-all duration-50 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            id="burger-menu"
            onTransitionEnd={() => {
                if (!isVisible) {
                    closeFunc();
                }
            }}
        >
            <div
                className="w-full h-[80px] flex items-center justify-between px-[20px] border-b-1 border-[#323232]"
                id="header"
            >
                <p className="uppercase tracking-widest font-medium text-[20px]">
                    Menu
                </p>
                <button
                    className="size-[24px]"
                    id="close-button"
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    <XMarkIcon />
                </button>
            </div>

            <div
                className="size-full flex flex-col items-end gap-[10px] p-[20px]"
                id="buttons-wrapper"
            >
                {buttonsData.length === 0 ? (
                    <p className="text-[18px] text-[#b8b8b8] font-light self-center">
                        There is no elements to render :(
                    </p>
                ) : (
                    buttonsData.map((button) => (
                        <HeaderButton
                            text={button.text}
                            status={button.status}
                            link={button.link}
                            key={button.link}
                        />
                    ))
                )}
            </div>
        </div>,
        document.querySelector("#modal-root"),
    );
}
