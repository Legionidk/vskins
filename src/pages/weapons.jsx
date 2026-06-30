import { Link } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

import SkeletonCategory from "../components/ui/skeleton/CategorySkeleton";
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

            <main className="z-0 flex flex-col items-center gap-[20px] w-full px-[20px]">
                <Input placeholder="Search in weapons" />

                <SkeletonCategory />
            </main>

            <Footer />
        </>
    );
}
