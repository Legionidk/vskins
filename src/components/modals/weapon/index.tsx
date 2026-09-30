import ModalTitle from "../Title";
import ModalBlock from "../Block";
import BlockInfo from "../BlockInfo";
import DamageTable from "./DamageTable";
import ImagesWrapper from "./imagesWrapper";

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
            className="flex flex-col w-dvw h-full max-w-[900px]"
            id="weapon-modal"
        >
            <ModalTitle
                title={modalData.name}
                subTitle={modalData.category}
                closeFunc={closeFunc}
            />

            <div
                className="flex flex-col overflow-auto h-full md:flex-row md:h-[600px] md:overflow-hidden"
                id="scroll-container"
            >
                <ImagesWrapper data={modalData.images} />

                <div
                    className="flex flex-col gap-[10px] p-[8px] bg-[#211E1F] w-full md:max-w-[400px] md:h-full md:overflow-y-auto"
                    id="info-wrapper"
                >
                    <ModalBlock title={modalData.cost} iconUrl={CreditsIcon} />

                    {modalData.generalData && (
                        <ModalBlock title="General">
                            {modalData.generalData.map((data) => (
                                <BlockInfo
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
                                <BlockInfo
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
                                <BlockInfo
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
