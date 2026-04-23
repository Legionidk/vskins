import { useState, useEffect } from "react";
import Header from "@/components/header";
import Main from "@/components/main";
import Category from "@/components/category";
import Loader from "@/components/loader";
import Footer from "@/components/footer";
import getWeapons from "@/services/weaponApi";

export default function App() {
    const [weapons, setWeapons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeapons().then((data) => {
            setWeapons(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <Header />
            <Main>
                {loading ? (
                    <Loader />
                ) : (
                    weapons.map((weaponCategory) => {
                        return (
                            <Category
                                key={weaponCategory.categoryId}
                                categoryId={weaponCategory.categoryId}
                                categoryName={weaponCategory.categoryName}
                                weaponsData={weaponCategory.weapons}
                            />
                        );
                    })
                )}
            </Main>
            <Footer />
        </>
    );
}
