import { useState } from "react";
import { HandRaisedIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { InfoBlock, InfoPiece } from "./InfoBlock";
import DamageTable from "./DamageTable";

import creditsIcon from "@/assets/creditsIcon.webp";

export default function WeaponModal({ data, closeFunc = () => {} }) {
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [isCurrencyLoaded, setCurrencyLoaded] = useState(false);

    return (
        <div
            className="w-full max-w-[760px] h-fit flex flex-col items-center overflow-hidden rounded-[16px]"
            id="weapon-modal"
        >
            <div
                className="w-full flex items-center justify-between px-[16px] py-[8px] bg-[#211E1F]"
                id="title"
            >
                <div className="flex gap-[10px] text-[20px]" id="title">
                    <p className="uppercase font-medium tracking-widest">
                        {data.name}
                    </p>
                    <p className="text-[#B8B8B8]">{data.category}</p>
                </div>

                <button className="cursor-pointer" onClick={closeFunc}>
                    <XMarkIcon className="size-[24px]" />
                </button>
            </div>

            <div
                className="w-full flex justify-center px-[50px] py-[25px] bg-[#292727]"
                id="image-wrapper"
            >
                {!isImageLoaded && (
                    <div
                        className="size-[100px] bg-[#211E1F] rounded-[8px] animate-pulse"
                        id="skeleton-image"
                    />
                )}

                <img
                    onLoad={() => {
                        setImageLoaded(true);
                    }}
                    src={data.image}
                    alt={`${data.name} image`}
                    className={`${!isImageLoaded && "hidden"}`}
                />
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
                                id="skeleton-currency"
                                className="size-[12px] bg-[#211E1F] rounded-[8px] animate-pulse"
                            ></div>
                        )}

                        <img
                            onLoad={() => {
                                setCurrencyLoaded(true);
                            }}
                            src={creditsIcon}
                            alt="Credits icon"
                            className={`size-[12px] ${!isCurrencyLoaded && "hidden"}`}
                        />
                        <p>{data.cost}</p>
                    </div>
                )}

                {data.general && (
                    <InfoBlock title="General" id="general-block">
                        {data.general.map((generalStat) => (
                            <InfoPiece
                                title={generalStat.name}
                                value={generalStat.value}
                                key={generalStat.name + generalStat.value}
                            />
                        ))}
                    </InfoBlock>
                )}

                {data.primaryFire && (
                    <InfoBlock title="Primary fire" id="primary-fire-block">
                        {data.primaryFire.map((primaryFireStat) => (
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

                {data.altFire && (
                    <InfoBlock
                        title={`Alternative fire - ${data.altFire.type}`}
                    >
                        {data.altFire.data.map((altFireStat) => (
                            <InfoPiece
                                title={altFireStat.name}
                                value={altFireStat.value}
                                key={altFireStat.name + altFireStat.value}
                            />
                        ))}
                    </InfoBlock>
                )}

                {data.damage && <DamageTable damageData={data.damage} />}
            </div>
        </div>
    );
}
