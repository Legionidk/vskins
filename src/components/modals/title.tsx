import { XMarkIcon } from "@heroicons/react/24/outline";

const styles = {
    wrapper: "w-full flex p-[8px_16px] bg-[#211E1F]",
    title: "text-[20px] uppercase font-medium tracking-widest",
    subTitle: "text-[20px] text-[#B8B8B8] ml-[10px]",
    closeButton: "cursor-pointer ml-auto",
};

interface ModalTitleProps {
    title: string;
    closeFunc: () => void;
    subTitle?: string;
}

export default function ModalTitle({
    title,
    closeFunc,
    subTitle,
}: ModalTitleProps) {
    return (
        <div className={styles.wrapper} id="title-warpper">
            <p className={styles.title}>{title}</p>

            {subTitle && <p className={styles.subTitle}>{subTitle}</p>}

            <button
                className={styles.closeButton}
                id="close-button"
                onClick={closeFunc}
            >
                <XMarkIcon className="size-[24px]" />
            </button>
        </div>
    );
}
