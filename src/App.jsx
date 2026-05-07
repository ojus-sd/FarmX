import { useState } from "react";
import Landing from "./components/Landing";
import RoleSelection from "./components/RoleSelection";
import FarmerDashboard from "./components/FarmerDashboard";
import BuyerDashboard from "./components/BuyerDashboard";
import { cropsData } from "./crops";

function App() {
  const [page, setPage] = useState("landing");
  const [role, setRole] = useState("");
  const [crops, setCrops] = useState(cropsData);

  return (
    <div>
      {page === "landing" && (
        <Landing
          setPage={setPage}
          setRole={setRole}
        />
      )}

      {page === "role-selection" && (
        <RoleSelection
          setPage={setPage}
          setRole={setRole}
        />
      )}

      {page === "farmer" && role === "farmer" && (
        <FarmerDashboard
          crops={crops}
          setCrops={setCrops}
          setPage={setPage}
        />
      )}

      {page === "farmer" && role !== "farmer" && (
        <RoleSelection
          setPage={setPage}
          setRole={setRole}
        />
      )}

      {page === "buyer" && role === "buyer" && (
        <BuyerDashboard
          crops={crops}
          setPage={setPage}
        />
      )}

      {page === "buyer" && role !== "buyer" && (
        <RoleSelection
          setPage={setPage}
          setRole={setRole}
        />
      )}
    </div>
  );
}

export default App;
