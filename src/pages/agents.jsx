import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "../components/header/Header";
import Main from "../components/Main";
import Footer from "../components/footer/Footer";
import Category from "../components/Category";
import SkeletonCategory from "../components/skeletonCategory/SkeletonCategory";
import AgentModal from "../components/modals/agent/AgentModal";

import ModalWrapper from "../components/ModalWrapper";
import Input from "../components/Input/Input";

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
                                name={category.name}
                                iconUrl={category.iconUrl}
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
