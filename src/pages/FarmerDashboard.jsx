import DashboardLayout from "../components/DashboardLayout";
import AddCropForm from "../components/AddCropForm";
import CropCard from "../components/CropCard";

const FarmerDashboard = ({ crops, setCrops }) => {
  const farmerLinks = [
    {
      label: "Inventory Management",
      path: "/farmer",
    },
  ];

  const handleAddCrop = (newCrop) => {
    setCrops((currentCrops) => {
      const id =
        currentCrops.length > 0
          ? Math.max(...currentCrops.map((crop) => crop.id)) + 1
          : 1;

      return [
        ...currentCrops,
        {
          id,
          ...newCrop,
        },
      ];
    });
  };

  return (
    <DashboardLayout
      title="Inventory Overview"
      sidebarLinks={farmerLinks}
    >
      {/* FIXED CONTAINER */}
      <div className="w-full py-8">
        
        <AddCropForm onAddCrop={handleAddCrop} />

        <div className="mb-8 flex items-center justify-between">
          
          <h2 className="text-2xl font-semibold text-[#f5ecdb] tracking-tight">
            Active Listings
          </h2>

          <span className="bg-[#1a1d16] text-[#a6b98d] border border-[#33402a] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            {crops.length} Items
          </span>

        </div>

        {crops.length === 0 ? (
          
          <div className="bg-[#11150f] border border-[#33402a] border-dashed p-16 text-center rounded-3xl">
            
            <div className="h-16 w-16 mx-auto mb-6 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <span className="text-2xl opacity-50">🌾</span>
            </div>

            <h3 className="text-xl font-semibold text-[#f5ecdb] mb-2">
              Inventory is empty
            </h3>

            <p className="text-white/65 max-w-sm mx-auto">
              You haven't listed any crops yet. Use the form above to add your
              first entry to the marketplace.
            </p>

          </div>

        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {crops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                isBuyer={false}
              />
            ))}

          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default FarmerDashboard;
