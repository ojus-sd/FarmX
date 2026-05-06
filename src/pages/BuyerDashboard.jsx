import { useMemo, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import CropCard from "../components/CropCard";
import FilterDropdown from "../components/FilterDropdown";

const BuyerDashboard = ({ crops }) => {
  const [filterLocation, setFilterLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [purchaseNotice, setPurchaseNotice] = useState("");

  const buyerLinks = [{ label: "Global Marketplace", path: "/buyer" }];

  const uniqueLocations = useMemo(
    () => [...new Set(crops.map((crop) => crop.location))].sort(),
    [crops],
  );

  const filteredCrops = useMemo(
    () =>
      crops.filter((crop) => {
        const query = searchQuery.trim().toLowerCase();
        const matchesLocation =
          filterLocation ? crop.location === filterLocation : true;
        const matchesSearch = query
          ? `${crop.name} ${crop.location}`.toLowerCase().includes(query)
          : true;
        return matchesLocation && matchesSearch;
      }),
    [crops, filterLocation, searchQuery],
  );

  const handleBuy = (crop) => {
    setPurchaseNotice(
      `Purchase request sent for ${crop.quantity} ${crop.unit} of ${crop.name}.`,
    );
  };

  return (
    <DashboardLayout title="Marketplace" sidebarLinks={buyerLinks}>
      <div className="max-w-6xl mx-auto py-8">
        <div className="bg-[#11150f] px-8 py-6 rounded-3xl border border-[#33402a] mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-[0_16px_48px_rgba(0,0,0,0.22)]">
          <div>
            <h3 className="text-xl font-semibold text-[#f5ecdb] tracking-tight">
              Available Produce
            </h3>
            <p className="text-sm text-white/65 mt-1">
              Browse fresh inventory from local farmers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-white/45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search produce..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-64 bg-[#11150f] border border-[#33402a] hover:border-[#7f9b5b] rounded-lg text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35"
              />
            </div>

            {/* Region Filter */}
            <FilterDropdown
              options={uniqueLocations}
              value={filterLocation}
              onChange={setFilterLocation}
            />
          </div>
        </div>

        {purchaseNotice && (
          <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl border border-[#7f9b5b]/40 bg-[#7f9b5b]/12 px-5 py-4 text-sm font-medium text-[#f5ecdb]">
            <span>{purchaseNotice}</span>
            <button
              onClick={() => setPurchaseNotice("")}
              className="text-xs uppercase tracking-wider text-[#a6b98d] hover:text-white"
            >
              Dismiss
            </button>
          </div>
        )}

        {filteredCrops.length === 0 ?
          <div className="bg-[#11150f] border border-[#33402a] border-dashed p-16 text-center rounded-3xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <span className="text-2xl opacity-50">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-[#f5ecdb] mb-2">
              No produce found
            </h3>
            <p className="text-white/65 max-w-sm mx-auto text-sm">
              There are currently no listings available in this region. Try
              adjusting your filters.
            </p>
            {(filterLocation || searchQuery) && (
              <button
                onClick={() => {
                  setFilterLocation("");
                  setSearchQuery("");
                }}
                className="mt-6 text-[#a6b98d] font-medium text-sm hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCrops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                isBuyer={true}
                onBuy={handleBuy}
              />
            ))}
          </div>
        }
      </div>
    </DashboardLayout>
  );
};

export default BuyerDashboard;
