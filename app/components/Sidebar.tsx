import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", href: "/" },
    { name: "Sales Agent", icon: "💼", href: "/agents/sales" },
    { name: "Finance Agent", icon: "💰", href: "/agents/finance" },
    { name: "Marketing Agent", icon: "📢", href: "/agents/marketing" },
    { name: "Document Agent", icon: "📄", href: "/agents/document" },
    { name: "Analytics", icon: "📊", href: "/agents/analytics" },
    { name: "AI Orchestrator", icon: "🚀", href: "/agents/orchestrator" },
    { name: "Settings", icon: "⚙️", href: "/settings" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gray-950 border-r border-gray-800 p-6 flex flex-col">

      {/* Brand */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          🚀 BizPilot AI
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Intelligent Business Workforce
        </p>
      </div>


      {/* AI Status */}
      <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl p-4">
        <p className="text-green-400 font-semibold">
          🟢 AI System Online
        </p>

        <p className="text-xs text-gray-400 mt-1">
          6 agents active
        </p>
      </div>


      {/* Navigation */}
      <nav className="mt-8 space-y-2 flex-1">

        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-gray-300
              hover:bg-blue-900
              hover:text-white
              transition
            "
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </Link>
        ))}

      </nav>


      {/* Footer */}
      <div className="border-t border-gray-800 pt-5 text-sm text-gray-400">

        <p>
          Built by
        </p>

        <p className="text-blue-400 font-semibold">
          Swathi Banda
        </p>

      </div>

    </aside>
  );
}