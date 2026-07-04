import { useState } from "react";
import { HandRaisedIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { InfoBlock, InfoPiece } from "./InfoBlock";
import creditsIcon from "@/assets/creditsIcon.webp";

export default function WeaponModal({ data, closeFunc = () => {} }) {
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [isCurrencyLoaded, setCurrencyLoaded] = useState(false);

    return (
        <div
            className="w-full max-w-[760px] h-fit flex flex-col items-center overflow-hidden sm:rounded-[16px]"
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
                        <InfoPiece
                            title="Magazine"
                            value={data.general.magazine}
                            id="magazine"
                        />

                        <InfoPiece
                            title="Wall penetration"
                            value={data.general.wallPenetration}
                            id="wall-penetration"
                        />

                        <InfoPiece
                            title="Equip speed"
                            value={`${data.general.equipSpeed} sec`}
                            id="equip-speed"
                        />

                        <InfoPiece
                            title="Reload speed"
                            value={`${data.general.reloadSpeed} sec`}
                            id="reload-speed"
                        />
                    </InfoBlock>
                )}

                {data.primaryFire && (
                    <InfoBlock title="Primary fire" id="primary-fire-block">
                        <InfoPiece
                            title="Fire rate"
                            value={`${data.primaryFire.fireRate} rounds/sec`}
                            id="fire-rate"
                        />

                        <InfoPiece
                            title="Shot spread"
                            value={`${data.primaryFire.shotSpread} deg`}
                            id="shot-spread"
                        />

                        <InfoPiece
                            title="Run speed mult."
                            value={`${data.primaryFire.runSpeedMult} m/sec`}
                            id="run-speed-mult"
                        />
                    </InfoBlock>
                )}

                {data.altFire && data.altFire.type === "ADS" && (
                    <InfoBlock title="Alternative fire - aim down sights">
                        <InfoPiece
                            title="Fire rate"
                            value={`${data.altFire.fireRate} rounds/sec`}
                            id="alt-fire-fire-rate"
                        />

                        <InfoPiece
                            title="Shot spread"
                            value={`${data.altFire.firstBulletAccuracy} deg`}
                            id="alt-fire-shot-spread"
                        />

                        <InfoPiece
                            title="Run speed mult."
                            value={`${data.altFire.runSpeedMultiplier} m/sec`}
                            id="alt-fire-run-speed-mult"
                        />

                        <InfoPiece
                            title="Zoom mult."
                            value={`${data.altFire.zoomMultiplier}x`}
                            id="alt-fire-run-zoom-mult"
                        />
                    </InfoBlock>
                )}

                {data.altFire && data.altFire.type === "Shotgun" && (
                    <InfoBlock title="Alternative fire">
                        <InfoPiece
                            title="Alt fire type"
                            value="Shotgun"
                            id="alt-fire-type"
                        />

                        <InfoPiece
                            title="Burst rate"
                            value={`${data.altFire.burstRate} bursts/sec`}
                            id="alt-fire-burst-rate"
                        />

                        <InfoPiece
                            title="Pellet count"
                            value={`${data.altFire.shotgunPelletCount}`}
                            id="alt-fire-pellet-count"
                        />
                    </InfoBlock>
                )}

                {data.altFire && data.altFire.type === "AirBurst" && (
                    <InfoBlock title="Alternative fire">
                        <InfoPiece
                            title="Alt fire type"
                            value="Air burst"
                            id="alt-fire-type"
                        />

                        <InfoPiece
                            title="Burst distance"
                            value={`${data.altFire.burstDistance}m`}
                            id="alt-fire-burst-distance"
                        />

                        <InfoPiece
                            title="Pellet count"
                            value={data.altFire.shotgunPelletCount}
                            id="alt-fire-pellet-count"
                        />
                    </InfoBlock>
                )}
            </div>
        </div>
    );
}
