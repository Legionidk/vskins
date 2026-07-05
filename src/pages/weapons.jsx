import { Link } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Category from "../components/layout/category/Category";
import SkeletonCategory from "../components/layout/skeletonCategory/SkeletonCategory";
import WeaponModal from "../components/layout/weaponModal/WeaponModal";

import ModalWrapper from "../components/ui/ModalWrapper";
import Input from "../components/ui/Input";

import getWeapons from "../services/weapons";

const headerButtons = [
    { text: "Weapons", status: "enabled", link: "/" },
    { text: "Agents", status: "disabled", link: "/agents" },
    { text: "Skins", status: "disabled", link: "/skins" },
];

export default function WeaponsPage() {
    const [isLoaded, setLoaded] = useState(false);
    const [weaponsData, setWeaponsData] = useState([]);
    const [weaponModal, setWeaponModal] = useState(null);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState(false);

    const filteredWeaponsData = useMemo(() => {
        if (!search.trim()) {
            return weaponsData;
        }

        return weaponsData
            .map((category) => ({
                ...category,
                data: category.data.filter((weapon) =>
                    weapon.cardTitle
                        .toLowerCase()
                        .includes(debouncedSearch.toLowerCase()),
                ),
            }))
            .filter((category) => category.data.length > 0);
    }, [weaponsData, debouncedSearch]);

    useEffect(() => {
        getWeapons().then((data) => {
            setWeaponsData(data);
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
            <AnimatePresence initial={false}>
                {weaponModal && (
                    <ModalWrapper
                        closeFunc={() => {
                            setWeaponModal(false);
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

            <Header buttonsData={headerButtons} />

            <main className="z-0 flex flex-col items-center gap-[20px] w-full px-[20px] 2xl:w-[1300px]">
                <Input
                    placeholder="Search in weapons"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />

                {isLoaded ? (
                    filteredWeaponsData.map((category) => (
                        <Category
                            categoryName={category.categoryName}
                            categoryId={category.categoryId}
                            data={category.data}
                            modalFunc={setWeaponModal}
                            key={category.categoryId}
                        />
                    ))
                ) : (
                    <SkeletonCategory />
                )}
            </main>

            <Footer />
        </>
    );
}
