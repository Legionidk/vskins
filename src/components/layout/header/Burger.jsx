import HeaderButton from "./HeaderButton";

export default function Burger({ buttonsData = [] }) {
    return (
        <div
            className="w-full h-fit flex flex-col items-end gap-[10px] p-[20px] border-t-1 border-[#323232] transition-all duration-50 ease-in-out"
            id="burger-menu"
        >
            {buttonsData.length === 0 ? (
                <p className="text-[18px] text-[#b8b8b8] font-light self-center">
                    There is no elements to render :(
                </p>
            ) : (
                buttonsData.map((button) => (
                    <HeaderButton
                        text={button.text}
                        status={button.status}
                        link={button.link}
                    />
                ))
            )}
        </div>
    );
}
