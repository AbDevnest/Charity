import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiGrid, FiMail, FiPhone, FiUsers, FiLogOut } from "react-icons/fi";

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const navLinks = [
    { path: "/admin", label: "Dashboard", icon: FiGrid },
    { path: "/admin/subscribers", label: "Subscribers", icon: FiMail },
    { path: "/admin/contacts", label: "Contacts", icon: FiPhone },
    { path: "/admin/visitors", label: "Visitors", icon: FiUsers },
  ];

  return (
    <aside className="w-64 bg-[#0F172A] text-[#E2E8F0] flex flex-col h-screen overflow-hidden sticky top-0">
      {/* Logo */}
      <div className="p-4 border-b border-[#334155]">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/main-logo.webp"
            alt="CharityCare - Charity Organization Logo"
            className="h-[42px]"
            width={200}
            height={42}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navLinks.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;

          return (
            <Link
              key={path}
              to={path}
              className={`
                flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 relative
                ${
                  isActive
                    ? "bg-[#2563EB] text-[#E2E8F0]"
                    : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#E2E8F0]"
                }
              `}
            >
              {/* Active Indicator */}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r bg-[#3B82F6]" />
              )}

              <Icon
                size={20}
                className={isActive ? "text-[#E2E8F0]" : "text-[#CBD5E1]"}
              />
              <span className={isOpen ? "block" : "hidden"}>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[#334155]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-2.5 w-full rounded-lg transition-all duration-200 text-[#94A3B8] hover:bg-[#DC2626] hover:text-[#E2E8F0]"
        >
          <FiLogOut size={20} />
          <span className={isOpen ? "block" : "hidden"}>Logout</span>
        </button>
      </div>
    </aside>
  );
}
