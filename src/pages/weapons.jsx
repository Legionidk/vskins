import { Link } from "react-router-dom";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer/Footer";

export default function WeaponsPage() {
    return (
        <>
            <Header />
            <p>It's weapons page</p>
            <Link to="/agents">Agents page</Link>
            <Footer />
        </>
    );
}
