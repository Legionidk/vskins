import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import "@/styles/global.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <HashRouter>
        <App />
    </HashRouter>,
);
