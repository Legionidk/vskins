import { AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import Header from "../components/layout/header/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/footer/Footer";
import Category from "../components/layout/category/Category";
import SkeletonCategory from "../components/layout/skeletonCategory/SkeletonCategory";
import AgentModal from "../components/layout/modals/agent/AgentModal";

import ModalWrapper from "../components/ui/ModalWrapper";
import Input from "../components/ui/Input";

import getAgents from "../services/agents";

export default function AgentsPage() {
    const [isLoaded, setLoaded] = useState(false);
    const [agentsData, setAgentsData] = useState([]);
    const [agentModal, setAgentModal] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAgents().then((data) => {
            setAgentsData(data);
            setLoaded(true);
        });
    }, []);

    return (
        <>
            <AnimatePresence>
                {agentModal && (
                    <ModalWrapper
                        closeFunc={() => {
                            setAgentModal(null);
                        }}
                    >
                        <AgentModal
                            data={agentModal}
                            closeFunc={() => {
                                setAgentModal(null);
                            }}
                        />
                    </ModalWrapper>
                )}
            </AnimatePresence>

            <Header />

            <Main>
                <Input
                    placeholder="Search agents"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />

                <AnimatePresence>
                    {isLoaded ? (
                        agentsData.map((category) => (
                            <Category
                                categoryName={category.name}
                                icon={category.iconUrl}
                                agentMode={true}
                                cardsData={category.cardsData}
                                modalFunc={setAgentModal}
                                key={category.id}
                            />
                        ))
                    ) : (
                        <SkeletonCategory />
                    )}
                </AnimatePresence>
            </Main>

            <Footer />
        </>
    );
}
