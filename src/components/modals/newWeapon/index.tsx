import ModalTitle from "..";
import ImagesWrapper from "./imageWrapper";
import { WeaponModalData } from "@/types/weaponModal";

const modalWrapperStyle = "w-dvw max-w-[760px]";

interface WeaponModalProps {
    modalData: WeaponModalData;
    closeFunc: () => void;
}

export default function WeaponModal({
    modalData,
    closeFunc,
}: WeaponModalProps) {
    return (
        <div className={modalWrapperStyle} id="weapon-modal">
            <ModalTitle
                title={modalData.name}
                subTitle={modalData.category}
                closeFunc={closeFunc}
            />

            <ImagesWrapper data={modalData.images} />
        </div>
    );
}
