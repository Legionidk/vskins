import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import SkeletonCategory from "../components/layout/skeletonCategory/SkeletonCategory";
import Category from "../components/layout/category/Category";
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

    useEffect(() => {
        getWeapons().then((data) => {
            setWeaponsData(data);
            setLoaded(true);
        });
    }, []);

    return (
        <>
            {weaponModal && (
                <ModalWrapper
                    closeFunc={() => {
                        setWeaponModal(false);
                    }}
                >
                    {({ visibleFunc }) => (
                        <WeaponModal
                            data={weaponModal}
                            closeFunc={visibleFunc}
                        />
                    )}
                </ModalWrapper>
            )}

            <Header buttonsData={headerButtons} />

            <main className="z-0 flex flex-col items-center gap-[20px] w-full px-[20px] 2xl:w-[1300px]">
                <Input placeholder="Search in weapons" />

                {isLoaded ? (
                    weaponsData.map((category) => (
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
