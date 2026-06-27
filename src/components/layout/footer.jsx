import { createPortal } from "react-dom";
import { useState, useEffect, use } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import githubLogo from "@/assets/github.svg";
import yoPng from "@/assets/yo.png";
import rigby from "@/assets/rigby.jpg";

function RigbyModal({ closeFunc }) {
    const [isVisible, setVisible] = useState(false);
    const clickHandler = () => {
        setTimeout(() => {
            closeFunc();
        }, 50);

        setVisible(false);
    };

    useEffect(() => {
        setVisible(true);
    }, []);

    return createPortal(
        <div
            className={`absolute h-dvh w-full top-0 flex flex-col items-center justify-center px-[20px] bg-black/50 backdrop-blur-xs transition-opacity duration-50 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
            id="modal-blur"
            onClick={clickHandler}
        >
            <div
                className={`w-full max-w-[500px] h-fit flex flex-col items-center rounded-[16px] overflow-hidden transition-transform duration-50 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-5"}`}
                id="rigby-modal"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div
                    className="flex justify-between h-fit w-full px-[16px] py-[8px] bg-[#211E1F] text-[20px]"
                    id="title"
                >
                    <div className="flex gap-[5px]" id="name">
                        <p className="font-medium uppercase tracking-widest">
                            Rigby
                        </p>
                        <p className="text-[#b8b8b8]">•</p>
                        <p className="text-[#b8b8b8]">:&gt;</p>
                    </div>

                    <button
                        className="cursor-pointer"
                        id="close-button"
                        onClick={clickHandler}
                    >
                        <XMarkIcon className="h-[24px]" />
                    </button>
                </div>

                <img src={rigby} alt="Rigby image" />
            </div>
        </div>,
        document.querySelector("#modal-root"),
    );
}

export default function Footer() {
    const [rigbyModal, setRigbyModal] = useState(false);

    const rigbyModalFunc = () => {
        setRigbyModal(!rigbyModal);
    };

    return (
        <>
            {rigbyModal && <RigbyModal closeFunc={rigbyModalFunc} />}

            <footer className="w-full h-[60px] flex items-center justify-between px-[20px] mt-auto bg-[#111111] border-t-1 border-[#323232] text-[16px] font-light">
                <p>
                    Data provided by
                    <a
                        href="https://valorant-api.com/"
                        className="text-[#FF4248] ml-[5px] hover:underline"
                    >
                        valorant-api.com
                    </a>
                </p>

                <div
                    className="flex items-center gap-[10px]"
                    id="buttons-wrapper"
                >
                    <a
                        className="w-[40px] h-[40px] rounded-[8px] p-[8px] hover:bg-[#323232]"
                        href="https://github.com/Legionidk/vskins"
                    >
                        <img src={githubLogo} alt="GitHub logo" />
                    </a>

                    <button
                        className="w-[40px] h-[40px] rounded-[8px] p-[8px] cursor-pointer hover:bg-[#323232]"
                        id="rigby-button"
                        onClick={rigbyModalFunc}
                    >
                        <img src={yoPng} alt="Rigby icon" />
                    </button>
                </div>
            </footer>
        </>
    );
}
