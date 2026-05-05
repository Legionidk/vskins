import { useState, useEffect } from "react";

import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

import SearchBox from "@/components/ui/searchbox";
import Category from "@/components/ui/category";
import Loader from "@/components/ui/loader";

import getWeapons from "@/services/weaponApi";
import searchBoxFunc from "@/lib/searchBox.js";

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
                <SearchBox searchFunc={searchBoxFunc} />

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
