import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <GlobalStyles />
    <App />
  </AuthProvider>
);
