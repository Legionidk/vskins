import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function ModalWrapper({ children, isOpened, closeFunc }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <div
            className={`z-30 fixed inset-0 overflow-y-auto px-[20px] py-[80px] bg-black/50 backdrop-blur-xs transition-opacity duration-75 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
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
                className="min-h-full flex items-center justify-center"
                id="modal-wrapper"
                onClick={(e) => {
                    if (e.target !== e.currentTarget) return;
                    setVisible(false);
                }}
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
