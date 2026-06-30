import { Link } from "react-router-dom";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Input from "../components/ui/Input";

const headerButtons = [
    { text: "Weapons", status: "enabled", link: "/" },
    { text: "Agents", status: "disabled", link: "/agents" },
    { text: "Skins", status: "disabled", link: "/skins" },
];

export default function WeaponsPage() {
    return (
        <>
            <Header buttonsData={headerButtons} />

            <main className="flex flex-col items-center gap-[20px] w-full px-[20px] mt-[101px]">
                <Input placeholder="Search in weapons" />
            </main>

            <Footer />
        </>
    );
}
