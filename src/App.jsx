import Navbar from "./components/Navbar.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
import { Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  const { theme } = useThemeStore();

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
