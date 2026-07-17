export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">

      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          BizPilot AI Dashboard 🚀
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back, Swathi 👋 Your AI workforce is ready.
        </p>
      </div>


      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* AI Status */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-3">

          <p className="text-sm text-gray-400">
            AI Status
          </p>

          <p className="font-semibold text-green-400">
            🟢 Online
          </p>

        </div>


        {/* Project */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-800 rounded-xl px-5 py-3">

          <p className="text-sm text-gray-300">
            Platform
          </p>

          <p className="font-semibold text-white">
            BizPilot AI
          </p>

        </div>

      </div>

    </header>
  );
}