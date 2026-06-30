import { useState, useEffect } from "react";

export default function SkeletonCard() {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div
            className={`z-10 w-full flex flex-col items-center rounded-[8px] overflow-hidden transition-all duration-50 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            id="skeleton-card"
        >
            <div
                className="w-full h-[135px] flex items-center justify-center px-[50px] py-[25px] bg-[#211E1F] animate-pulse"
                id="skeleton-image"
            />

            <div
                className="w-full h-[46px] flex items-center px-[16px] py-[8px] text-[20px] bg-[#292727]"
                id="skeleton-title"
            >
                <div
                    className="h-[15px] w-[100px] bg-[#211E1F] rounded-[8px] animate-pulse"
                    id="skeleton-text"
                />
            </div>
        </div>
    );
}
