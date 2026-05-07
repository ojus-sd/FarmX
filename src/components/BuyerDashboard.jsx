import { useState } from "react";

const BuyerDashboard = ({ crops, setPage }) => {
  const [filterLocation, setFilterLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [purchaseNotice, setPurchaseNotice] = useState("");

  const locations = [];

  for (let i = 0; i < crops.length; i++) {
    if (!locations.includes(crops[i].location)) {
      locations.push(crops[i].location);
    }
  }

  locations.sort();

  const filteredCrops = [];

  for (let i = 0; i < crops.length; i++) {
    const crop = crops[i];
    const query = searchQuery.trim().toLowerCase();
    const text = `${crop.name} ${crop.location}`.toLowerCase();

    if (
      (filterLocation === "" || crop.location === filterLocation) &&
      (query === "" || text.includes(query))
    ) {
      filteredCrops.push(crop);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#0d0b06] text-white flex-col md:flex-row">
      <div className="hidden md:flex">
        <aside className="w-64 bg-[#120f08]/95 border-r border-white/10 h-screen flex flex-col fixed left-0 top-0 z-20 backdrop-blur-md">
          <div className="h-20 flex items-center px-8 border-b border-white/5">
            <h1 className="text-2xl font-semibold text-[#f5ecdb] tracking-tighter">
              FarmX.
            </h1>
          </div>

          <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
            <div className="px-4 mb-4 text-xs font-semibold tracking-wider text-[#a6b98d] uppercase">
              Menu
            </div>
            <button className="px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center text-sm font-medium cursor-pointer text-left bg-[#1a1d16] text-[#f5ecdb] border border-[#33402a] shadow-sm">
              Global Marketplace
            </button>
          </nav>

          <div className="p-6">
            <button
              onClick={() => setPage("landing")}
              className="flex items-center text-white/60 hover:text-[#a6b98d] text-sm font-medium transition-colors group cursor-pointer"
            >
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              Exit Portal
            </button>
          </div>
        </aside>
      </div>

      <div className="flex-1 flex flex-col md:ml-64 bg-[radial-gradient(circle_at_top_left,rgba(126,153,91,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_30%)]">
        <header className="bg-[#0f0b06]/80 backdrop-blur-md border-b border-white/10 flex min-h-20 items-center gap-4 px-5 py-4 sticky top-0 z-10 sm:px-10">
          <h2 className="text-lg font-semibold text-[#f5ecdb] tracking-tight">
            Marketplace
          </h2>

          <nav className="ml-auto hidden items-center gap-2 sm:flex md:hidden">
            <button className="rounded-lg border border-[#33402a] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 cursor-pointer">
              Global Marketplace
            </button>
            <button
              onClick={() => setPage("landing")}
              className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/55 cursor-pointer"
            >
              Exit
            </button>
          </nav>

          <div className="ml-auto flex items-center space-x-3 sm:ml-0 md:ml-auto">
            <div className="h-2 w-2 rounded-full bg-brand-500"></div>
            <span className="hidden text-xs font-medium text-white/55 uppercase tracking-wider sm:inline">
              System Online
            </span>
          </div>
        </header>

        <main className="p-6 flex-1 overflow-auto lg:p-8">
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

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <select
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                      className="appearance-none px-4 py-2 pr-10 bg-[#11150f] border border-[#33402a] hover:border-[#7f9b5b] rounded-lg text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all cursor-pointer min-w-[160px]"
                    >
                      <option value="">All Regions</option>
                      {locations.map((location) => (
                        <option
                          key={location}
                          value={location}
                        >
                          {location}
                        </option>
                      ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/45">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
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

            {filteredCrops.length === 0 ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCrops.map((crop) => (
                  <div
                    key={crop.id}
                    className="bg-[#11150f] p-6 rounded-3xl border border-[#33402a] hover:border-[#7f9b5b] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col h-full group relative"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-[#f5ecdb] tracking-tight mb-1">
                          {crop.name}
                        </h3>
                        <p className="text-sm font-medium text-white/65 flex items-center">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#a6b98d] mr-2"></span>
                          {crop.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="block text-2xl font-semibold text-[#a6b98d] tracking-tight">
                          ₹{Number(crop.price).toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                          })}
                        </span>
                        <span className="text-xs font-semibold text-white/45 uppercase tracking-wider">
                          per {crop.unit}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 mt-2">
                      <div className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm font-medium text-white/85">
                        <span className="text-white/45 mr-2">Stock:</span>
                        {crop.quantity} {crop.unit}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setPurchaseNotice(
                          `Purchase request sent for ${crop.quantity} ${crop.unit} of ${crop.name}.`,
                        )
                      }
                      className="mt-8 w-full bg-white/5 border border-white/10 hover:bg-[#7f9b5b] hover:border-[#7f9b5b] hover:text-[#0b1307] text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#a6b98d] focus:ring-offset-1 focus:ring-offset-[#11150f] cursor-pointer"
                    >
                      Request Purchase
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BuyerDashboard;
