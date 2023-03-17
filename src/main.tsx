import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "flowbite";
import { initAccordions, initDrawers, initFlowbite } from "flowbite";

initDrawers();
initFlowbite();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
