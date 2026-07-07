import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import WeaponsPage from "../pages/Weapons";
import AgentsPage from "../pages/Agents";
import SkinsPage from "../pages/Skins";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<WeaponsPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/skins" element={<SkinsPage />} />
        </Routes>
    );
}
