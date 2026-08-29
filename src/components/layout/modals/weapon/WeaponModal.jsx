import clsx from "clsx";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { InfoBlock, InfoPiece } from "../InfoBlock";
import DamageTable from "./DamageTable";

import creditsIcon from "@/assets/creditsIcon.webp";

export default function WeaponModal({
    data,
    closeFunc = () => {
        console.log("[WEAPON MODAL] Modal close function not provided");
    },
}) {
    const [isCurrencyLoaded, setCurrencyLoaded] = useState(false);

    return (
        <div
            className="w-full max-w-[760px] h-fit flex flex-col items-center overflow-hidden rounded-t-[16px] md:rounded-[16px]"
            id="weapon-modal"
        >
            <div
                className="w-full flex items-center justify-between p-[8px_16px] bg-[#211E1F]"
                id="title"
            >
                <div className="flex gap-[10px] text-[20px]" id="title">
                    <p className="uppercase font-medium tracking-widest">
                        {data.name}
                    </p>

                    <p className="text-[#B8B8B8]">{data.category}</p>
                </div>

                <button
                    className="cursor-pointer"
                    id="close-button"
                    onClick={closeFunc}
                >
                    <XMarkIcon className="size-[24px]" />
                </button>
            </div>

            <div
                className="w-full flex justify-center p-[25px_50px] bg-[#292727]"
                id="image-wrapper"
            >
                <img src={data.imageUrl} alt={`${data.name} image`} />
            </div>

            <div
                className="w-full flex flex-col items-center gap-[10px] p-[8px] bg-[#211E1F]"
                id="info-wrapper"
            >
                {data.cost !== null && (
                    <div
                        className="w-full flex items-center justify-center text-[20px] gap-[5px] py-[8px] rounded-[8px] bg-[#292727]"
                        id="cost-block"
                    >
                        {!isCurrencyLoaded && (
                            <div
                                className="size-[12px] bg-[#211E1F] rounded-[8px] animate-pulse"
                                id="skeleton-currency"
                            />
                        )}

                        <img
                            src={creditsIcon}
                            alt="Credits icon"
                            hidden={!isCurrencyLoaded}
                            className="size-[12px]"
                            onLoad={() => {
                                setCurrencyLoaded(true);
                            }}
                        />

                        <p>{data.cost}</p>
                    </div>
                )}

                {data.generalData && (
                    <InfoBlock title="General" id="general-block">
                        {data.generalData.map((generalStat) => (
                            <InfoPiece
                                title={generalStat.name}
                                value={generalStat.value}
                                key={generalStat.name + generalStat.value}
                            />
                        ))}
                    </InfoBlock>
                )}

                {data.primaryFireData && (
                    <InfoBlock title="Primary fire" id="primary-fire-block">
                        {data.primaryFireData.map((primaryFireStat) => (
                            <InfoPiece
                                title={primaryFireStat.name}
                                value={primaryFireStat.value}
                                key={
                                    primaryFireStat.name + primaryFireStat.value
                                }
                            />
                        ))}
                    </InfoBlock>
                )}

                {data.altFireData && (
                    <InfoBlock
                        title={`Alternative fire - ${data.altFireData.type}`}
                    >
                        {data.altFireData.data.map((altFireStat) => (
                            <InfoPiece
                                title={altFireStat.name}
                                value={altFireStat.value}
                                key={altFireStat.name + altFireStat.value}
                            />
                        ))}
                    </InfoBlock>
                )}

                {data.damageData && <DamageTable damageData={data.damageData} />}
            </div>
        </div>
    );
}
