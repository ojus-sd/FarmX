import { useState } from "react";

const FarmerDashboard = ({ crops, setCrops, setPage }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [error, setError] = useState("");

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
              Inventory Management
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
            Inventory Overview
          </h2>

          <nav className="ml-auto hidden items-center gap-2 sm:flex md:hidden">
            <button className="rounded-lg border border-[#33402a] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 cursor-pointer">
              Inventory Management
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
          <div className="w-full py-8">
            <div className="bg-[#11150f] p-8 rounded-3xl border border-[#33402a] mb-12 shadow-[0_16px_48px_rgba(0,0,0,0.24)]">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#f5ecdb] tracking-tight">
                  New Inventory Entry
                </h3>
                <p className="text-sm text-white/65 mt-1 font-light">
                  Add a new crop to your marketplace listings.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const newName = name.trim().replace(/\s+/g, " ");
                  const newLocation = location.trim().replace(/\s+/g, " ");
                  const newPrice = Number(price);
                  const newQuantity = Number(quantity);

                  if (
                    newName === "" ||
                    newLocation === "" ||
                    newPrice <= 0 ||
                    newQuantity <= 0
                  ) {
                    setError("Please complete every field with valid values.");
                    return;
                  }

                  setCrops([
                    ...crops,
                    {
                      id: crops.length + 1,
                      name: newName,
                      location: newLocation,
                      price: newPrice.toFixed(2),
                      quantity: String(newQuantity),
                      unit: unit,
                    },
                  ]);

                  setName("");
                  setLocation("");
                  setPrice("");
                  setQuantity("");
                  setUnit("kg");
                  setError("");
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
              >
                <div>
                  <label className="block text-xs font-semibold text-[#a6b98d] uppercase tracking-wider mb-2" htmlFor="crop-name">
                    Produce Name
                  </label>
                  <input
                    id="crop-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError("");
                    }}
                    placeholder="e.g. Organic Wheat"
                    className="w-full px-4 py-3 bg-[#11150f] border border-[#33402a] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#a6b98d] uppercase tracking-wider mb-2" htmlFor="crop-location">
                    Origin Location
                  </label>
                  <input
                    id="crop-location"
                    type="text"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setError("");
                    }}
                    placeholder="e.g. Punjab Fields"
                    className="w-full px-4 py-3 bg-[#11150f] border border-[#33402a] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#a6b98d] uppercase tracking-wider mb-2" htmlFor="crop-price">
                    Price (INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/45 text-sm font-medium">
                      ₹
                    </span>
                    <input
                      id="crop-price"
                      type="number"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                        setError("");
                      }}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-3 pl-8 bg-[#11150f] border border-[#33402a] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-[#a6b98d] uppercase tracking-wider mb-2" htmlFor="crop-quantity">
                      Volume
                    </label>
                    <input
                      id="crop-quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                        setError("");
                      }}
                      placeholder="100"
                      min="0.01"
                      step="any"
                      className="w-full px-4 py-3 bg-[#11150f] border border-[#33402a] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35 text-sm font-medium"
                    />
                  </div>

                  <div className="w-32">
                    <label className="block text-xs font-semibold text-[#a6b98d] uppercase tracking-wider mb-2" htmlFor="crop-unit">
                      Metric
                    </label>
                    <select
                      id="crop-unit"
                      value={unit}
                      onChange={(e) => {
                        setUnit(e.target.value);
                        setError("");
                      }}
                      className="w-full px-4 py-3 bg-[#11150f] border border-[#33402a] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35 text-sm font-medium cursor-pointer appearance-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a6b98d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="kg">KG</option>
                      <option value="lbs">LBS</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  {error && (
                    <p className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!name.trim() || !location.trim() || !price || !quantity}
                    className="bg-[#7f9b5b] hover:bg-[#6f8f5a] disabled:cursor-not-allowed disabled:opacity-55 text-[#0b1307] font-semibold py-3 px-8 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a6b98d] text-sm cursor-pointer"
                  >
                    Publish Listing
                  </button>
                </div>
              </form>
            </div>

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

export default FarmerDashboard;
