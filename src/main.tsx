import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400-italic.css";
import "lenis/dist/lenis.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
