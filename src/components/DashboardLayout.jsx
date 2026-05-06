import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Dashboard layout component that wraps page content
// Manages the overall grid structure (sidebar left, content right)
const DashboardLayout = ({ children, title, sidebarLinks }) => {
  return (
    <div className="flex min-h-screen bg-[#0d0b06] text-white flex-col md:flex-row">
      {/* Fixed sidebar - hidden on mobile, visible on md and up */}
      <div className="hidden md:flex">
        <Sidebar links={sidebarLinks} />
      </div>

      {/* Main content area, offset by sidebar width on md and up */}
      <div className="flex-1 flex flex-col md:ml-64 bg-[radial-gradient(circle_at_top_left,rgba(126,153,91,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_30%)]">
        <Topbar title={title} sidebarLinks={sidebarLinks} />
        <main className="p-6 flex-1 overflow-auto lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
