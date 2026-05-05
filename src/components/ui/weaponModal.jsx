import { useEffect } from "react";
import { createPortal } from "react-dom";

import ModalContainer from "../layout/modalContainer";

function Title({ title, weaponCategory }) {
    return (
        <div
            className="flex items-center justify-between w-full px-[16px] py-[8px] text-lg xl:text-2xl"
            id="title"
        >
            <p id="weapon-name">{title}</p>
            <p className="text-[#FDFDFD]/75 font-light" id="weapon-category">
                {weaponCategory}
            </p>
        </div>
    );
}

function ImgWrapper({ src, altName }) {
    return (
        <div
            className="h-[150px] bg-[#211E1F] flex justify-center items-center px-[20px] py-[10px] xl:h-[300px] xl:px-[40px] xl:py-[20px]"
            id="img-wrapper"
        >
            <img
                className="max-h-full max-w-full"
                src={src}
                alt={`${altName} image`}
                id="weapon-image"
            />
        </div>
    );
}

function CostBlock({ cost }) {
    return (
        <div
            className="py-[5px] bg-[#211E1F] rounded-[8px] flex justify-center w-full col-span-2 font-light sm:col-span-3 xl:text-xl"
            id="weapon-cost-block"
        >
            {`Cost: ${cost}`}
        </div>
    );
}

function StatBlock({ weaponStat }) {
    return (
        <div
            className="bg-[#211E1F] rounded-[8px] w-full border-2 border-[#211E1F] overflow-hidden"
            id={`${weaponStat.name.split(" ").join("-")}-block`}
        >
            <p
                className="font-light flex justify-center py-[5px] xl:text-xl"
                id="block-title"
            >
                {weaponStat.name}
            </p>
            <div
                className="flex flex-col justify-center items-center py-4 bg-[#292727] sm:flex-row sm:gap-[8px]"
                id="block-info"
            >
                <p className="text-lg xl:text-2xl" id="value">
                    {weaponStat.value}
                </p>
                <p className="font-light text-[#FDFDFD]/75">
                    {weaponStat.measure}
                </p>
            </div>
        </div>
    );
}

function DamageTable() {
    return (
        <table
            className="col-span-2 text-center border-2 border-[#211E1F] rounded-[8px] border-separate border-spacing-0 sm:col-span-3"
            id="damage-table"
        >
            <thead className="bg-[#211E1F]">
                <tr>
                    <td
                        className="font-light py-[5px] xl:text-xl"
                        colSpan="9999"
                    >
                        Damage
                    </td>
                </tr>
            </thead>
            <tbody className="text-sm">
                <tr id="damage-range-tr">
                    <td className="border-b-2 border-[#211E1F] py-1"></td>
                </tr>
                <tr id="damage-head-tr">
                    <td className="text-sm border-b-2 border-[#211E1F] py-[5px] sm:text-lg xl:text-2xl">
                        Head
                    </td>
                </tr>
                <tr id="damage-body-tr">
                    <td className="text-sm border-b-2 border-[#211E1F] py-[5px] sm:text-lg xl:text-2xl">
                        Body
                    </td>
                </tr>
                <tr id="damage-legs-tr">
                    <td className="text-sm py-[5px] sm:text-lg xl:text-2xl">
                        Legs
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default function WeaponModal({ weaponData, weaponCategory, closeFunc }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <ModalContainer closeFunc={closeFunc}>
            <div
                className="fixed rounded-[18px] bg-[#292727] w-[260px] h-fit z-1 overflow-hidden m-auto sm:w-[540px] md:w-[668px] lg:w-[768px]"
                id="popup"
            >
                <Title
                    title={weaponData.name}
                    weaponCategory={weaponCategory}
                />

                <ImgWrapper src={weaponData.image} altName={weaponData.name} />

                <div
                    className="grid grid-cols-2 p-[8px] gap-[8px] sm:grid-cols-3"
                    id="weapon-info-wrapper"
                >
                    <CostBlock cost={weaponData.cost} />

                    {weaponData.stats.map((weaponStat) => {
                        return (
                            <StatBlock
                                weaponStat={weaponStat}
                                key={weaponStat.name}
                            />
                        );
                    })}

                    <DamageTable />
                </div>
            </div>
        </ModalContainer>,
        document.querySelector("#modal-root"),
    );
}
