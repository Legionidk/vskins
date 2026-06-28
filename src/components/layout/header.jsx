import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "@/assets/asgard.svg";

function Burger({ buttonsData = [], closeFunc, unmountFunc, isOpened }) {
    return createPortal(
        <div
            className={`absolute top-[81px] inset-x-0 bottom-0 bg-black/50 backdrop-blur-xs transition-opacity duration-50 ease-in-out ${isOpened ? "opacity-100" : "opacity-0"}`}
            id="burger-menu-wrapper"
            onClick={closeFunc}
            onTransitionEnd={() => {
                if (!isOpened) {
                    unmountFunc();
                }
            }}
        >
            <div
                className="w-full h-fit flex flex-col items-end gap-[10px] bg-[#111111] p-[20px]"
                id="burger-menu"
                onClick={(e) => {
                    e.stopPropagation();
                }}
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
    const [isBurgerOpened, setBurgerOpened] = useState(false);
    const [isBurgerMounted, setBurgerMounted] = useState(false);

    const burgerButtonFunc = () => {
        if (isBurgerOpened) {
            setBurgerOpened(false);
            return;
        }

        setBurgerMounted(true);
    };

    useEffect(() => {
        if (isBurgerMounted) {
            requestAnimationFrame(() => {
                setBurgerOpened(true);
            });
        }
    }, [isBurgerMounted]);

    return (
        <>
            {isBurgerMounted && (
                <Burger
                    isOpened={isBurgerOpened}
                    closeFunc={() => {
                        setBurgerOpened(false);
                    }}
                    unmountFunc={() => {
                        setBurgerMounted(false);
                    }}
                />
            )}

            <header className="w-full h-[80px] flex items-center justify-between px-[20px] bg-[#111111] border-b-1 border-[#323232]">
                <img src={logo} alt="Asgard logo" className="h-[30px]" />
                <button id="burger-button" onClick={burgerButtonFunc}>
                    {isBurgerOpened ? (
                        <XMarkIcon className="h-[24px]" />
                    ) : (
                        <Bars3Icon className="h-[24px]" />
                    )}
                </button>
            </header>
        </>
    );
}
