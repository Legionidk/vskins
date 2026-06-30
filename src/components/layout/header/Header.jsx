import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Burger from "./Burger";
import logo from "@/assets/asgard.svg";

export default function Header({ buttonsData = [] }) {
    const [isBurgerOpened, setBurgerOpened] = useState(false);

    return (
        <>
            {isBurgerOpened && (
                <Burger
                    buttonsData={buttonsData}
                    closeFunc={() => {
                        setBurgerOpened(false);
                    }}
                />
            )}

            <header className="fixed top-0 w-full h-[80px] flex justify-between items-center px-[20px] bg-[#111111] border-b-1 border-[#323232]">
                <img src={logo} alt="Asgard logo" className="h-[30px]" />
                <button
                    id="burger-button"
                    onClick={() => {
                        setBurgerOpened(!isBurgerOpened);
                    }}
                >
                    <Bars3Icon className="size-[24px]" />
                </button>
            </header>
        </>
    );
}
