import { useNavigate } from "react-router-dom";
import RoleSelectionCard from "../components/RoleSelectionCard";

const RoleSelection = ({ setRole }) => {
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === "farmer") {
      navigate("/farmer");
    } else {
      navigate("/buyer");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0b06] text-white flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full">
        <div className="mb-16 text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Select your portal
          </h1>
          <p className="text-white/70 text-lg font-light">
            Choose how you will interact with the FarmX ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <RoleSelectionCard
            icon="Yield"
            title="Farmer Portal"
            description="Manage your inventory, list new crops, and connect directly with local buyers."
            onClick={() => handleRoleSelect("farmer")}
          />
          <RoleSelectionCard
            icon="Market"
            title="Buyer Portal"
            description="Access fresh, locally sourced agricultural products with full transparency."
            onClick={() => handleRoleSelect("buyer")}
          />
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
