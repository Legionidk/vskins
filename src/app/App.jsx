import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import WeaponsPage from "../pages/weapons";
import AgentsPage from "../pages/agents";
import SkinsPage from "../pages/skins";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<WeaponsPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/skins" element={<SkinsPage />} />
        </Routes>
    );
}
