import ModalTitle from "../Title";
import ModalBlock from "../Block";
import ImagesWrapper from "./imageWrapper";
import CreditsIcon from "@/assets/creditsIcon.webp"
import { WeaponModalData } from "@/types/weaponModal";

interface WeaponModalProps {
    modalData: WeaponModalData;
    closeFunc: () => void;
}

export default function WeaponModal({
    modalData,
    closeFunc,
}: WeaponModalProps) {
    return (
        <div className="w-dvw max-w-[760px]" id="weapon-modal">
            <ModalTitle
                title={modalData.name}
                subTitle={modalData.category}
                closeFunc={closeFunc}
            />

            <ImagesWrapper data={modalData.images} />

            <div className="flex p-[8px] bg-[#211E1F]" id="info-wrapper">
                <ModalBlock title={modalData.cost} iconUrl={CreditsIcon} />
            </div>
        </div>
    );
}
