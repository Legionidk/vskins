export default function ModalContainer({ popupType, children, closeFunc }) {
    return (
        <div
            className="flex justify-center items-center fixed w-full min-h-screen top-0 bg-black/50"
            id="popup-container"
            data-popup-type={popupType}
            onClick={closeFunc}
        >
            {children}
        </div>
    );
}
