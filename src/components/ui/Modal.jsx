import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Modal({ children, isOpened, closeFunc }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return createPortal(
        <div
            className={`absolute inset-0 px-[20px] py-[80px] bg-black/50 backdrop-blur-xs transition-opacity duration-50 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
            id="modal-blur"
            onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                setVisible(false);
            }}
            onTransitionEnd={() => {
                if (!isVisible) {
                    closeFunc();
                }
            }}
        >
            {children}
        </div>,
        document.querySelector("#modal-root"),
    );
}
