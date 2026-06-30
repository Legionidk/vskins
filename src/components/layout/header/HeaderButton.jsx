import { NavLink } from "react-router-dom";

export default function HeaderButton({
    text = "Button",
    status = "active",
    link = "/",
}) {
    const statuses = {
        enabled: "text-[#F0F0F0] hover:bg-[#323232]",
        disabled: "text-[#B8B8B8]/50 pointer-events-none",
    };

    return (
        <NavLink
            className={({ isActive }) =>
                `px-[16px] py-[8px] rounded-[8px] ${isActive ? "text-[#FF4248] hover:bg-[#323232]" : statuses[status]}`
            }
            to={link}
        >
            <p className="uppercase font-medium tracking-widest text-[18px]">
                {text}
            </p>
        </NavLink>
    );
}
