import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "../components/layout/header/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/footer/Footer";
import Category from "../components/layout/Category";
import SkeletonCategory from "../components/layout/skeletonCategory/SkeletonCategory";
import AgentModal from "../components/layout/modals/agent/AgentModal";

import ModalWrapper from "../components/ui/ModalWrapper";
import Input from "../components/ui/Input/Input";

import getAgents from "../services/agents";

export default function AgentsPage() {
    const [isLoaded, setLoaded] = useState(false);
    const [agentsData, setAgentsData] = useState([]);
    const [agentModal, setAgentModal] = useState(null);
    const [search, setSearch] = useState("");

    const filteredAgents = useMemo(() => {
        if (!search.trim()) {
            return agentsData;
        }

        return agentsData
            .map((category) => ({
                ...category,
                cardsData: category.cardsData.filter((agent) =>
                    agent.name.toLowerCase().includes(search.toLowerCase()),
                ),
            }))
            .filter((category) => category.cardsData.length > 0);
    }, [search, agentsData]);

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
                    placeholder="Search in agents"
                    onChange={(value) => {
                        setSearch(value);
                    }}
                />

                <AnimatePresence>
                    {isLoaded ? (
                        filteredAgents.map((category) => (
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
