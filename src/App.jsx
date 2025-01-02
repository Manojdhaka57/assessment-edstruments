import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
