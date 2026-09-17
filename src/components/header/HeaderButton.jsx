import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function HeaderButton({
    text = "Button",
    status = "enabled",
    link = "/",
}) {
    const statuses = {
        enabled: "text-[#F0F0F0] hover:bg-[#323232]",
        disabled: "text-[#B8B8B8]/50 pointer-events-none",
    };

    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                clsx(
                    "px-[16px] py-[8px] rounded-[8px]",
                    isActive
                        ? "text-[#FF4248] hover:bg-[#323232]"
                        : statuses[status],
                )
            }
        >
            <p className="uppercase font-medium tracking-widest text-[18px]">
                {text}
            </p>
        </NavLink>
    );
}
