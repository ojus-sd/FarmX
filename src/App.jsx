import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import Pages
import Landing from "./pages/Landing";
import RoleSelection from "./pages/RoleSelection";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";

// Import Data
import { initialCrops } from "./data/crops";

const ROLE_STORAGE_KEY = "farmx.selectedRole";
const CROPS_STORAGE_KEY = "farmx.crops";

const readStoredValue = (key, fallback) => {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch {
    return fallback;
  }
};

function App() {
  const [role, setRole] = useState(() => readStoredValue(ROLE_STORAGE_KEY, null));
  const [crops, setCrops] = useState(() =>
    readStoredValue(CROPS_STORAGE_KEY, initialCrops),
  );

  const appState = useMemo(
    () => ({
      role,
      crops,
    }),
    [role, crops],
  );

  useEffect(() => {
    window.localStorage.setItem(ROLE_STORAGE_KEY, JSON.stringify(role));
  }, [role]);

  useEffect(() => {
    window.localStorage.setItem(CROPS_STORAGE_KEY, JSON.stringify(crops));
  }, [crops]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          {/* Default Landing Page */}
          <Route path="/" element={<Landing setRole={setRole} />} />

          {/* Role Selection Page - passes setRole to update state */}
          <Route
            path="/role-selection"
            element={<RoleSelection setRole={setRole} />}
          />

          {/* Farmer Dashboard - passes crops state and setter */}
          <Route
            path="/farmer"
            element={
              appState.role === "farmer" ?
                <FarmerDashboard crops={crops} setCrops={setCrops} />
              : <Navigate to="/role-selection" replace />
            }
          />

          {/* Buyer Dashboard - passes crops state (read-only for buyers) */}
          <Route
            path="/buyer"
            element={
              appState.role === "buyer" ?
                <BuyerDashboard crops={crops} />
              : <Navigate to="/role-selection" replace />
            }
          />

          {/* Catch-all route redirects to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
