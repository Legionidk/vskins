import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "motion/react";

import HeaderButton from "./HeaderButton";
import Burger from "./Burger";
import logo from "@/assets/asgard.svg";

const buttons = [
    { text: "Weapons", status: "enabled", link: "/" },
    { text: "Agents", status: "enabled", link: "/agents" },
    { text: "Skins", status: "enabled", link: "/skins" },
];

export default function Header() {
    const [isBurgerOpened, setBurgerOpened] = useState(false);

    return (
        <>
            <AnimatePresence initial={false}>
                {isBurgerOpened && (
                    <Burger
                        buttonsData={buttons}
                        closeFunc={() => {
                            setBurgerOpened(false);
                        }}
                    />
                )}
            </AnimatePresence>

            <header className="z-20 sticky top-0 w-full h-[80px] flex justify-between items-center gap-[30px] px-[20px] bg-[#111111] border-b-1 border-[#323232] lg:justify-start">
                <img src={logo} alt="Asgard logo" className="h-[30px]" />

                <div className="hidden gap-[5px] lg:flex" id="buttons-wrapper">
                    {buttons.map((button) => (
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
