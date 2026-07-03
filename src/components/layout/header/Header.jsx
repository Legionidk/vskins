import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import HeaderButton from "./HeaderButton";
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

            <header className="z-20 sticky top-0 w-full h-[80px] flex justify-between items-center gap-[30px] px-[20px] bg-[#111111] border-b-1 border-[#323232] lg:justify-start">
                <img src={logo} alt="Asgard logo" className="h-[30px]" />

                <div className="hidden gap-[5px] lg:flex" id="buttons-wrapper">
                    {buttonsData.map((button) => (
                        <HeaderButton
                            text={button.text}
                            status={button.status}
                            link={button.link}
                            key={button.link}
                        />
                    ))}
                </div>

                <button
                    id="burger-button"
                    className="lg:hidden"
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
