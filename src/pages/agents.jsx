import Header from "../components/layout/header/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/footer/Footer";

import Input from "../components/ui/Input";

export default function AgentsPage() {
    return (
        <>
            <Header />

            <Main>
                <Input placeholder="Search in agents" />
            </Main>
        </>
    );
}
