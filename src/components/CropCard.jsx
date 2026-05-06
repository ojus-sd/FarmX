const CropCard = ({ crop, isBuyer, onBuy }) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(Number(crop.price));

  return (
    <div className="bg-[#11150f] p-6 rounded-3xl border border-[#33402a] hover:border-[#7f9b5b] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col h-full group relative">
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
            ₹{formattedPrice}
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

      {isBuyer && (
        <button
          onClick={() => onBuy(crop)}
          className="mt-8 w-full bg-white/5 border border-white/10 hover:bg-[#7f9b5b] hover:border-[#7f9b5b] hover:text-[#0b1307] text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#a6b98d] focus:ring-offset-1 focus:ring-offset-[#11150f] cursor-pointer"
        >
          Request Purchase
        </button>
      )}
    </div>
  );
};

export default CropCard;
