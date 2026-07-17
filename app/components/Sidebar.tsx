export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-8">
        🚀 AI Business Pilot
      </h2>

      <nav className="space-y-4 text-gray-300">
        <a href="/" className="block hover:text-blue-400">
          🏠 Dashboard
        </a>

        <a href="/agents/sales" className="block hover:text-blue-400">
          💼 Sales Agent
        </a>

        <a href="#" className="block hover:text-blue-400">
          💰 Finance Agent
        </a>

        <a href="#" className="block hover:text-blue-400">
          📢 Marketing Agent
        </a>

        <a href="#" className="block hover:text-blue-400">
          📄 Documents
        </a>

        <a href="#" className="block hover:text-blue-400">
          📊 Analytics
        </a>
        <a
  href="/agents/orchestrator"
  className="block hover:text-blue-400"
>
  🚀 AI Orchestrator
</a>

        <a href="#" className="block hover:text-blue-400">
          ⚙️ Settings
        </a>
      </nav>

      <div className="mt-12 text-gray-400 text-sm">
        <p>Built by</p>
        <p className="text-blue-400 font-semibold">
          Swathi Banda
        </p>
      </div>
    </aside>
  );
}