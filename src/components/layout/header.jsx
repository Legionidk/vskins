import { createPortal } from "react-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "@/assets/asgard.svg";

function Burger({ buttonsData = [], closeFunc }) {
    return createPortal(
        <div
            className="absolute top-[81px] inset-x-0 bottom-0 bg-black/50 backdrop-blur-xs"
            id="burger-menu-wrapper"
            onClick={closeFunc}
        >
            <div
                className="w-full h-fit flex flex-col items-end gap-[10px] bg-[#111111] p-[20px]"
                id="burger-menu"
            >
                {buttonsData.length === 0 ? (
                    <p className="text-[18px] text-[#b8b8b8] font-light self-center">
                        There is no elements to render :(
                    </p>
                ) : (
                    <p>Under construction.</p>
                )}
            </div>
        </div>,
        document.querySelector("#modal-root"),
    );
}

export default function Header() {
    const [isBurger, setBurger] = useState(false);

    const burgerButtonFunc = () => {
        setBurger(!isBurger);
    };

    return (
        <>
            {isBurger && <Burger closeFunc={burgerButtonFunc} />}

            <header className="w-full h-[80px] flex items-center justify-between px-[20px] bg-[#111111] border-b-1 border-[#323232]">
                <img src={logo} alt="Asgard logo" className="h-[30px]" />
                <button id="burger-button" onClick={burgerButtonFunc}>
                    {isBurger ? (
                        <XMarkIcon className="h-[24px]" />
                    ) : (
                        <Bars3Icon className="h-[24px]" />
                    )}
                </button>
            </header>
        </>
    );
}
