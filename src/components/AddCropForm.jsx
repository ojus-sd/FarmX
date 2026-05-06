import { useMemo, useState } from "react";

const cleanText = (value) => value.trim().replace(/\s+/g, " ");

const AddCropForm = ({ onAddCrop }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    quantity: "",
    unit: "kg",
  });
  const [error, setError] = useState("");

  const isReadyToSubmit = useMemo(
    () =>
      Boolean(
        cleanText(formData.name) &&
          cleanText(formData.location) &&
          formData.price &&
          formData.quantity,
      ),
    [formData],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedCrop = {
      name: cleanText(formData.name),
      location: cleanText(formData.location),
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      unit: formData.unit,
    };

    if (
      !cleanedCrop.name ||
      !cleanedCrop.location ||
      !Number.isFinite(cleanedCrop.price) ||
      !Number.isFinite(cleanedCrop.quantity)
    ) {
      setError("Please complete every field with valid values.");
      return;
    }

    if (cleanedCrop.price <= 0) {
      setError("Price must be greater than zero.");
      return;
    }

    if (cleanedCrop.quantity <= 0) {
      setError("Volume must be greater than zero.");
      return;
    }

    onAddCrop({
      ...cleanedCrop,
      price: cleanedCrop.price.toFixed(2),
      quantity: String(cleanedCrop.quantity),
    });
    setFormData({
      name: "",
      location: "",
      price: "",
      quantity: "",
      unit: "kg",
    });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[#11150f] border border-[#33402a] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all placeholder:text-white/35 text-sm font-medium";
  const labelClasses =
    "block text-xs font-semibold text-[#a6b98d] uppercase tracking-wider mb-2";

  return (
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
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >
        <div>
          <label className={labelClasses} htmlFor="crop-name">Produce Name</label>
          <input
            id="crop-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Organic Wheat"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="crop-location">Origin Location</label>
          <input
            id="crop-location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Punjab Fields"
            className={inputClasses}
          />
        </div>

        <div>
            <label className={labelClasses} htmlFor="crop-price">Price (INR)</label>
            <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/45 text-sm font-medium">
              ₹
            </span>
              <input
                id="crop-price"
                type="number"
                name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              min="0"
              step="0.01"
              className={`${inputClasses} pl-8`}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className={labelClasses} htmlFor="crop-quantity">Volume</label>
            <input
              id="crop-quantity"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="100"
              min="0.01"
              step="any"
              className={inputClasses}
            />
          </div>
          <div className="w-32">
            <label className={labelClasses} htmlFor="crop-unit">Metric</label>
            <select
              id="crop-unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className={`${inputClasses} cursor-pointer appearance-none`}
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
            disabled={!isReadyToSubmit}
            className="bg-[#7f9b5b] hover:bg-[#6f8f5a] disabled:cursor-not-allowed disabled:opacity-55 text-[#0b1307] font-semibold py-3 px-8 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a6b98d] text-sm cursor-pointer"
          >
            Publish Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCropForm;
