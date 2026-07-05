import { AnimatePresence } from "motion/react";

import { createPortal } from "react-dom";
import { useState, useEffect, use } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import ModalWrapper from "../../ui/ModalWrapper";
import RigbyModal from "./RigbyModal";

import githubLogo from "@/assets/github.svg";
import yoPng from "@/assets/yo.png";
import rigby from "@/assets/rigby.jpg";

export default function Footer() {
    const [rigbyModal, setRigbyModal] = useState(false);

    return (
        <>
            <AnimatePresence>
                {rigbyModal && (
                    <ModalWrapper
                        isOpened={rigbyModal}
                        closeFunc={() => {
                            setRigbyModal(false);
                        }}
                    >
                        <RigbyModal
                            closeFunc={() => {
                                setRigbyModal(false);
                            }}
                        />
                    </ModalWrapper>
                )}
            </AnimatePresence>

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
                        onClick={() => {
                            setRigbyModal(true);
                        }}
                    >
                        <img src={yoPng} alt="Rigby icon" />
                    </button>
                </div>
            </footer>
        </>
    );
}
