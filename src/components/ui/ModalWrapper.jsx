import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function ModalWrapper({ children, isOpened, closeFunc }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return createPortal(
        <div
            className={`absolute inset-0 flex items-center justify-center px-[20px] py-[80px] bg-black/50 backdrop-blur-xs transition-opacity duration-50 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
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
            <div
                className={`transition-transform duration-50 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-5"}`}
                id="animation-wrapper"
            >
                {children({
                    visibleFunc: () => {
                        setVisible(false);
                    },
                })}
            </div>
        </div>,
        document.querySelector("#modal-root"),
    );
}
