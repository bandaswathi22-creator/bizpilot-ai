export default function Home() {
  const agents = [
    {
      name: "Sales Agent",
      icon: "💼",
      description: "Create proposals, manage leads, and improve sales.",
      status: "🟢 Active",
    },
    {
      name: "Finance Agent",
      icon: "💰",
      description: "Analyze expenses, invoices, and financial reports.",
      status: "🟢 Active",
    },
    {
      name: "Marketing Agent",
      icon: "📢",
      description: "Generate campaigns, posts, and marketing ideas.",
      status: "🟢 Active",
    },
    {
      name: "Document Agent",
      icon: "📄",
      description: "Read, summarize, and analyze documents.",
      status: "🟢 Active",
    },
    {
      name: "Analytics Agent",
      icon: "📊",
      description: "Discover business insights from your data.",
      status: "🟢 Active",
    },
    {
      name: "Support Agent",
      icon: "🤖",
      description: "Answer customer questions automatically.",
      status: "🟢 Active",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-4">
          🚀 AI Business Pilot
        </h1>

        <p className="text-gray-400 text-xl">
          Your intelligent AI workforce for business growth
        </p>

        <p className="text-blue-400 mt-3">
          Built by Swathi Banda
        </p>
      </div>


      {/* Business Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="text-gray-400">Revenue</h3>
          <p className="text-3xl font-bold">$125K</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="text-gray-400">AI Tasks</h3>
          <p className="text-3xl font-bold">1,240</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="text-gray-400">Customers</h3>
          <p className="text-3xl font-bold">560</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="text-gray-400">Growth</h3>
          <p className="text-3xl font-bold">+24%</p>
        </div>

      </div>


      {/* AI Agents */}
      <h2 className="text-3xl font-semibold mb-6">
        🤖 Your AI Workforce
      </h2>


      <div className="grid md:grid-cols-3 gap-6">

        {agents.map((agent) => (

          <div
            key={agent.name}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >

            <div className="text-5xl mb-4">
              {agent.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              {agent.name}
            </h3>

            <p className="text-green-400 mb-3">
              {agent.status}
            </p>

            <p className="text-gray-400 mb-5">
              {agent.description}
            </p>

            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Open Agent
            </button>

          </div>

        ))}

      </div>


    </main>
  );
}