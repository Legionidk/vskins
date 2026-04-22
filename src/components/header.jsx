import logo from "@/assets/asgard.svg";

function NavButton({ text = "Button", href = "/", active = true }) {
    const baseClasses = "px-[16px] py-[8px] text-lg xl:text-2xl";
    const states = {
        active: "rounded-[8px] cursor-pointer text-[#FDFDFD] hover:bg-[#292727]",
        disabled: "pointer-events-none text-[#FF4248]",
    };

    return (
        <a
            href={href}
            className={`${baseClasses} ${active ? states.active : states.disabled}`}
        >
            {text}
        </a>
    );
}

export default function Header() {
    const baseClasses =
        "flex items-center justify-between gap-[25px] w-full h-[48px] px-[50px] py-[10px] bg-[#111111] border-b-2 border-[#333333]";
    const responsiveClasses = "sm:justify-start sm:h-fit xl:px-[200px]";
    const buttonsWrapperClasses = "hidden flex gap-[10px] sm:flex";
    const buttons = [
        { text: "Weapons", href: "/", active: false },
        { text: "Skins", href: "/skins", active: true },
        { text: "Agents", href: "/agents", active: true },
    ];

    return (
        <header className={`${baseClasses} ${responsiveClasses}`}>
            <img
                src={logo}
                alt="Asgard logo"
                className="h-[20px]"
                id="asgard-logo"
            />

            <div className={buttonsWrapperClasses} id="buttons-wrapper">
                {buttons.map((button) => (
                    <NavButton
                        text={button.text}
                        href={button.href}
                        active={button.active}
                    />
                ))}
            </div>
        </header>
    );
}
