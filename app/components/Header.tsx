export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-gray-400">
          Welcome back, Swathi 👋
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-3">
        <p className="text-sm text-gray-400">Project</p>
        <p className="font-semibold text-blue-400">
          AI Business Pilot
        </p>
      </div>
    </header>
  );
}