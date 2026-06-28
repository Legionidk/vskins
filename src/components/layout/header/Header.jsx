import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Burger from "./Burger";
import logo from "@/assets/asgard.svg";

export default function Header({ buttonsData=[] }) {
    const [isBurgerOpened, setBurgerOpened] = useState(false);

    return (
        <header className="fixed top-0 w-full h-fit flex flex-col items-center bg-[#111111] border-b-1 border-[#323232]">
            <div
                className="w-full h-[80px] flex items-center justify-between px-[20px]"
                id="header-content-wrapper"
            >
                <img src={logo} alt="Asgard logo" className="h-[30px]" />
                <button
                    id="burger-button"
                    onClick={() => {
                        setBurgerOpened(!isBurgerOpened);
                    }}
                >
                    {isBurgerOpened ? (
                        <XMarkIcon className="size-[24px]" />
                    ) : (
                        <Bars3Icon className="size-[24px]" />
                    )}
                </button>
            </div>

            <div
                className={`w-full overflow-hidden transition-all duration-50 ease-in-out ${isBurgerOpened ? "max-h-screen" : "max-h-0"}`}
            >
                <Burger buttonsData={buttonsData} />
            </div>
        </header>
    );
}
