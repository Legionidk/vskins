export default function WeaponCard({ weaponData }) {
    return (
        <div
            id="card"
            data-weapon-uuid={weaponData.uuid}
            data-weapon-name={weaponData.displayName.toLowerCase()}
            className="rounded-[8px] overflow-hidden cursor-pointer hover:outline-2 hover:outline-[#FF4248]"
        >
            <div
                id="img-wrapper"
                className="flex flex-col justify-center items-center h-[150px] p-[30px] bg-[#211E1F] ease-out duration-100"
            >
                <img
                    id="weapon-img"
                    className="max-h-full max-w-full"
                    src={weaponData.displayIcon}
                    alt={`${weaponData.displayName} image`}
                />
            </div>

            <div
                id="title"
                className="bg-[#292727] px-[16px] py-[8px] xl:text-xl"
            >
                {weaponData.displayName}
            </div>
        </div>
    );
}
