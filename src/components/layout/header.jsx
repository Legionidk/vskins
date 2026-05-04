import logo from "@/assets/asgard.svg";

function NavButton({ text = "Button", href = "/", state = "idle" }) {
    console.log(state);
    const baseClasses = "px-[16px] py-[8px] text-lg xl:text-2xl";
    const states = {
        idle: "rounded-[8px] cursor-pointer text-[#FDFDFD] hover:bg-[#292727]",
        active: "pointer-events-none text-[#FF4248]",
        disabled: "pointer-events-none text-[#FDFDFD]/50",
    };

    return (
        <a href={href} className={`${baseClasses} ${states[state]}`}>
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
        { text: "Weapons", href: "/", state: "active" },
        { text: "Skins", href: "/skins", state: "disabled" },
        { text: "Agents", href: "/agents", state: "disabled" },
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
                        key={`${button.text}-button`}
                        text={button.text}
                        href={button.href}
                        state={button.state}
                    />
                ))}
            </div>
        </header>
    );
}
