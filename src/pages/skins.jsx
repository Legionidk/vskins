import Header from "../components/header/Header";
import Main from "../components/Main";
import Footer from "../components/footer/Footer";

import Input from "../components/Input/Input";

export default function SkinsPage() {
    return (
        <>
            <Header />

            <Main>
                <Input placeholder="Search in skins" />
            </Main>
        </>
    );
}
