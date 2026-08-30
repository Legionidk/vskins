import clsx from "clsx";
import { useState } from "react";

import { InfoBlock, InfoPiece } from "../InfoBlock";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AgentModal({
    data,
    closeFunc = () => {
        console.log("[AGENT MODAL] Modal close function not provided");
    },
}) {
    const [isPortraitLoaded, setPortraitLoaded] = useState(false);

    return (
        <div
            className="w-full max-w-[900px] h-fit flex flex-col items-center overflow-hidden rounded-[16px]"
            id="agent-modal"
        >
            <div
                className="w-full flex items-center justify-between p-[8px_16px] bg-[#211E1F]"
                id="title"
            >
                <div className="flex gap-[10px] text-[20px]" id="title">
                    <p className="uppercase font-medium tracking-widest">
                        {data.name}
                    </p>

                    {data.devName !== data.name && (
                        <p className="text-[#B8B8B8]">{data.devName}</p>
                    )}
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
                className={clsx(
                    "h-[500px] w-full flex justify-center bg-[#292727] bg-center bg-contain bg-no-repeat",
                    !isPortraitLoaded && "animate-pulse",
                )}
                style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
                id="image-wrapper"
            >
                <img
                    src={data.portraitImageUrl}
                    alt={`${data.name} portrait`}
                    className="h-full object-cover"
                    id="portrait-image"
                    hidden={!isPortraitLoaded}
                    onLoad={() => {
                        setPortraitLoaded(true);
                    }}
                />
            </div>

            <div
                className="w-full flex flex-col items-center gap-[10px] p-[8px] bg-[#211E1F]"
                id="info-wrapper"
            >
                <InfoBlock title="Description">
                    <p className="text-[18px]">{data.description}</p>
                </InfoBlock>

                <InfoBlock title="Role">
                    <InfoPiece
                        title={data.role.name}
                        icon={data.role.iconUrl}
                        value={data.role.description}
                    />
                </InfoBlock>

                <InfoBlock title="Basic abilities">
                    {data.basicAbilities.map((ability) => (
                        <InfoPiece
                            title={ability.name}
                            icon={ability.iconUrl}
                            value={ability.description}
                            key={ability.name}
                        />
                    ))}
                </InfoBlock>

                <InfoBlock title="Signature ability">
                    {data.signatureAbilities.map((ability) => (
                        <InfoPiece
                            title={ability.name}
                            icon={ability.iconUrl}
                            value={ability.description}
                            key={ability.name}
                        />
                    ))}
                </InfoBlock>

                <InfoBlock title="Ultimate">
                    {data.ultimate.map((ability) => (
                        <InfoPiece
                            title={ability.name}
                            icon={ability.iconUrl}
                            value={ability.description}
                            key={ability.name}
                        />
                    ))}
                </InfoBlock>

                {data.passiveAbility.length !== 0 && (
                    <InfoBlock title="Passive ability">
                        {data.passiveAbility.map((ability) => (
                            <InfoPiece
                                title={ability.name}
                                value={ability.description}
                                key={ability.name}
                            />
                        ))}
                    </InfoBlock>
                )}
            </div>
        </div>
    );
}
