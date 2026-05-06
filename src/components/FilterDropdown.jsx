const FilterDropdown = ({ options, value, onChange, label }) => {
  return (
    <div className="flex items-center space-x-4">
      {label && (
        <label className="text-xs font-semibold text-[#a6b98d] uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none px-4 py-2 pr-10 bg-[#11150f] border border-[#33402a] hover:border-[#7f9b5b] rounded-lg text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-[#a6b98d] focus:border-[#a6b98d] transition-all cursor-pointer min-w-[160px]"
        >
          <option value="">All Regions</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Custom arrow to replace native select arrow */}
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
  );
};

export default FilterDropdown;
