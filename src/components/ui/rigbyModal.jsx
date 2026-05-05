import { createPortal } from "react-dom";
import { useEffect } from "react";

import rigbyImage from "@/assets/rigby.jpg";
import ModalContainer from "../layout/modalContainer";

export default function RigbyModal({ rigbyCloseFunc }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <ModalContainer closeFunc={rigbyCloseFunc}>
            <div className="rounded-[16px] bg-[#211E1F] p-[8px] z-1 fixed" id="modal">
                <img
                    src={rigbyImage}
                    alt="Rigby"
                    className="rounded-[8px] h-[300px] w-[300px]"
                    id="rigby-image"
                />
            </div>
        </ModalContainer>,
        document.querySelector("#modal-root"),
    );
}
