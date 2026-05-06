const RoleSelectionCard = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 text-left text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-12 w-12 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <span className="text-sm font-semibold tracking-[0.35em] text-white uppercase">
              {icon.charAt(0)}
            </span>
          </div>

          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Portal
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/75 flex-grow">
          {description}
        </p>

        <div className="mt-7 flex items-center text-sm font-medium text-white/90 transition-transform duration-300 group-hover:translate-x-1">
          Continue <span className="ml-2">→</span>
        </div>
      </div>
    </button>
  );
};

export default RoleSelectionCard;
