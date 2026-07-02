import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

import SkeletonCategory from "../components/ui/SkeletonCategory";
import Input from "../components/ui/Input";

import getWeapons from "../services/weapons";

const headerButtons = [
    { text: "Weapons", status: "enabled", link: "/" },
    { text: "Agents", status: "disabled", link: "/agents" },
    { text: "Skins", status: "disabled", link: "/skins" },
];

export default function WeaponsPage() {
    const [weaponsData, setWeaponsData] = useState([]);

    useEffect(() => {
        getWeapons().then((data) => {
            console.log(data);
            setWeaponsData(data);
        });
    }, []);

    return (
        <>
            <Header buttonsData={headerButtons} />

            <main className="z-0 flex flex-col items-center gap-[20px] w-full px-[20px]">
                <Input placeholder="Search in weapons" />

                {weaponsData.length === 0 ? (
                    <SkeletonCategory />
                ) : (
                    <p>Under construction</p>
                )}
            </main>

            <Footer />
        </>
    );
}
