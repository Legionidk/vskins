import { Link } from "react-router-dom";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

const headerButtons = [
    { text: "Weapons", status: "enabled", link: "/" },
    { text: "Agents", status: "disabled", link: "/agents" },
    { text: "Skins", status: "disabled", link: "/skins" },
];

export default function WeaponsPage() {
    return (
        <>
            <Header buttonsData={headerButtons} />
            <p className="mt-[81px]">It's weapons page</p>
            <Link to="/agents">Agents page</Link>
            <Footer />
        </>
    );
}
