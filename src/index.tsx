import "uno.css";
import "./css/style.css";

import { render } from "solid-js/web";
import App from "./components/App";

const el = document.querySelector("html")!;
el.className = localStorage.theme || "light";

const root = document.getElementById("app");
render(() => <App />, root);
