import { data, Link } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "../components/layout/header/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/footer/Footer";
import Category from "../components/layout/category/Category";
import SkeletonCategory from "../components/layout/skeletonCategory/SkeletonCategory";

import ModalWrapper from "../components/ui/ModalWrapper";
import Input from "../components/ui/Input";

import getAgents from "../services/agents";

export default function AgentsPage() {
    const [isLoaded, setLoaded] = useState(false);
    const [agentsData, setAgentsData] = useState([]);
    const [agentModal, setAgentModal] = useState(null);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const filteredAgentsData = useMemo(() => {
        if (!search.trim) {
            return agentsData;
        }

        return agentsData
            .map((category) => ({
                ...category,
                cardsData: category.cardsData.filter((agent) =>
                    agent.cardTitle
                        .toLowerCase()
                        .includes(debouncedSearch.toLowerCase()),
                ),
            }))
            .filter((category) => category.cardsData.length > 0);
    }, [agentsData, debouncedSearch]);

    useEffect(() => {
        getAgents().then((data) => {
            setAgentsData(data);
            setLoaded(true);
        });
    }, []);

    useEffect(() => {
        const debouncedTimer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => {
            clearTimeout(debouncedTimer);
        };
    }, [search]);

    return (
        <>
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
                        filteredAgentsData.map((category) => (
                            <Category
                                categoryName={category.categoryName}
                                agentMode={true}
                                cardsData={category.cardsData}
                                key={category.categoryId}
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
