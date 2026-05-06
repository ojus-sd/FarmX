import { NavLink } from "react-router-dom";

const Topbar = ({ title, sidebarLinks = [] }) => {
  return (
    <header className="bg-[#0f0b06]/80 backdrop-blur-md border-b border-white/10 flex min-h-20 items-center gap-4 px-5 py-4 sticky top-0 z-10 sm:px-10">
      <h2 className="text-lg font-semibold text-[#f5ecdb] tracking-tight">
        {title}
      </h2>

      <nav className="ml-auto hidden items-center gap-2 sm:flex md:hidden">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="rounded-lg border border-[#33402a] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/70"
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/"
          className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/55"
        >
          Exit
        </NavLink>
      </nav>

      <div className="ml-auto flex items-center space-x-3 sm:ml-0 md:ml-auto">
        <div className="h-2 w-2 rounded-full bg-brand-500"></div>
        <span className="hidden text-xs font-medium text-white/55 uppercase tracking-wider sm:inline">
          System Online
        </span>
      </div>
    </header>
  );
};

export default Topbar;
