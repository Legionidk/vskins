import ModalTitle from "../Title";
import ModalBlock from "../Block";
import StatInfo from "./StatInfo";
import DamageTable from "./DamageTable";
import ImagesWrapper from "./imageWrapper";
import CreditsIcon from "@/assets/creditsIcon.webp";
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
        <div
            className="flex flex-col w-dvw h-full max-w-[760px]"
            id="weapon-modal"
        >
            <ModalTitle
                title={modalData.name}
                subTitle={modalData.category}
                closeFunc={closeFunc}
            />

            <div className="overflow-auto h-full" id="scroll-container">
                <ImagesWrapper data={modalData.images} />

                <div
                    className="flex flex-col gap-[10px] p-[8px] bg-[#211E1F]"
                    id="info-wrapper"
                >
                    <ModalBlock title={modalData.cost} iconUrl={CreditsIcon} />

                    {modalData.generalData && (
                        <ModalBlock title="General">
                            {modalData.generalData.map((data) => (
                                <StatInfo
                                    key={`${data.name}:${data.value}`}
                                    name={data.name}
                                    value={`${data.value}`}
                                />
                            ))}
                        </ModalBlock>
                    )}

                    {modalData.primaryFireData && (
                        <ModalBlock title="Primary fire">
                            {modalData.primaryFireData.map((data) => (
                                <StatInfo
                                    key={`${data.name}:${data.value}`}
                                    name={data.name}
                                    value={`${data.value}`}
                                />
                            ))}
                        </ModalBlock>
                    )}

                    {modalData.altFireData && (
                        <ModalBlock
                            title={`Alternative fire (${modalData.altFireData.type})`}
                        >
                            {modalData.altFireData.data.map((data) => (
                                <StatInfo
                                    key={`${data.name}:${data.value}`}
                                    name={data.name}
                                    value={`${data.value}`}
                                />
                            ))}
                        </ModalBlock>
                    )}

                    {modalData.damageData && (
                        <ModalBlock title="Damage" padding={false}>
                            <DamageTable data={modalData.damageData} />
                        </ModalBlock>
                    )}
                </div>
            </div>
        </div>
    );
}
