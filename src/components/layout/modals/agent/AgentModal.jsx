import clsx from "clsx";
import { useState } from "react";

import InfoBlock from "../infoBlock";
import InfoPiece from "../infoBlock/InfoPiece";
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
            className="w-full max-w-[900px] h-fit flex flex-col items-center overflow-hidden rounded-t-[16px] md:rounded-[16px] md:h-[700px]"
            id="agent-modal"
        >
            <div
                className="w-full flex items-center justify-between p-[8px_16px] bg-[#211E1F] border-b-2 border-[#292727]"
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

            {/* someday that hardcoded `h-[654px]` is going to break everything
            but for now i dont care. */}
            <div
                className="flex flex-col md:flex-row md:h-[654px]"
                id="adaptive-wrapper"
            >
                <div
                    className={clsx(
                        "h-[500px] w-full flex justify-center bg-[#292727] bg-center bg-contain bg-no-repeat md:h-full",
                        !isPortraitLoaded && "animate-pulse",
                    )}
                    style={{
                        backgroundImage: `url(${data.backgroundImageUrl})`,
                    }}
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
                    className="w-full flex flex-col items-center gap-[10px] p-[8px] bg-[#211E1F] md:overflow-y-scroll"
                    id="info-wrapper"
                >
                    <InfoBlock title="Description" adaptive={false}>
                        <p className="text-[18px]">{data.description}</p>
                    </InfoBlock>

                    <InfoBlock title="Role" adaptive={false}>
                        <InfoPiece
                            title={data.role.name}
                            icon={data.role.iconUrl}
                            value={data.role.description}
                            maxSpan={true}
                        />
                    </InfoBlock>

                    <InfoBlock title="Basic abilities" adaptive={false}>
                        {data.basicAbilities.map((ability) => (
                            <InfoPiece
                                title={ability.name}
                                icon={ability.iconUrl}
                                value={ability.description}
                                key={ability.name}
                            />
                        ))}
                    </InfoBlock>

                    <InfoBlock title="Signature ability" adaptive={false}>
                        {data.signatureAbilities.map((ability) => (
                            <InfoPiece
                                title={ability.name}
                                icon={ability.iconUrl}
                                value={ability.description}
                                maxSpan={true}
                                key={ability.name}
                            />
                        ))}
                    </InfoBlock>

                    <InfoBlock title="Ultimate" adaptive={false}>
                        {data.ultimate.map((ability) => (
                            <InfoPiece
                                title={ability.name}
                                icon={ability.iconUrl}
                                value={ability.description}
                                maxSpan={true}
                                key={ability.name}
                            />
                        ))}
                    </InfoBlock>

                    {data.passiveAbility.length !== 0 && (
                        <InfoBlock title="Passive ability" adaptive={false}>
                            {data.passiveAbility.map((ability) => (
                                <InfoPiece
                                    title={ability.name}
                                    value={ability.description}
                                    maxSpan={true}
                                    key={ability.name}
                                />
                            ))}
                        </InfoBlock>
                    )}
                </div>
            </div>
        </div>
    );
}
