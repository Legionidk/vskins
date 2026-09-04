import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "../components/layout/header/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/footer/Footer";
import Category from "../components/layout/Category";
import SkeletonCategory from "../components/layout/skeletonCategory/SkeletonCategory";
import WeaponModal from "../components/layout/modals/weapon/WeaponModal";

import ModalWrapper from "../components/ui/ModalWrapper";
import Input from "../components/ui/Input/Input";

import getWeapons from "../services/weapons";

export default function WeaponsPage() {
    const [isLoaded, setLoaded] = useState(false);
    const [weaponsData, setWeaponsData] = useState([]);
    const [weaponModal, setWeaponModal] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getWeapons().then((data) => {
            setWeaponsData(data);
            setLoaded(true);
        });
    }, []);

    const filteredWeaponsData = useMemo(() => {
        if (!search.trim()) {
            return weaponsData;
        }

        return weaponsData
            .map((category) => ({
                ...category,
                cardsData: category.cardsData.filter((weapon) =>
                    weapon.name.toLowerCase().includes(search.toLowerCase()),
                ),
            }))
            .filter((category) => category.cardsData.length > 0);
    }, [weaponsData, search]);

    return (
        <>
            <AnimatePresence initial={false}>
                {weaponModal && (
                    <ModalWrapper
                        closeFunc={() => {
                            setWeaponModal(null);
                        }}
                    >
                        <WeaponModal
                            data={weaponModal}
                            closeFunc={() => {
                                setWeaponModal(null);
                            }}
                        />
                    </ModalWrapper>
                )}
            </AnimatePresence>

            <Header />

            <Main>
                <Input
                    placeholder="Search in weapons"
                    onChange={(value) => {
                        setSearch(value);
                    }}
                />

                <AnimatePresence>
                    {isLoaded ? (
                        filteredWeaponsData.map((category) => (
                            <Category
                                name={category.name}
                                cardsData={category.cardsData}
                                modalFunc={setWeaponModal}
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
