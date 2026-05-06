import { NavLink } from "react-router-dom";

const Sidebar = ({ links }) => {
  return (
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
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center text-sm font-medium cursor-pointer ${
                isActive ?
                  "bg-[#1a1d16] text-[#f5ecdb] border border-[#33402a] shadow-sm"
                : "text-white/68 hover:bg-white/5 hover:text-white border border-transparent"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <NavLink
          to="/"
          className="flex items-center text-white/60 hover:text-[#a6b98d] text-sm font-medium transition-colors group cursor-pointer"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Exit Portal
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
