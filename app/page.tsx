export default function Home() {
  const agents = [
    {
      name: "Sales Agent",
      icon: "💼",
      description: "Create proposals, manage leads, and improve sales.",
    },
    {
      name: "Finance Agent",
      icon: "💰",
      description: "Analyze expenses, invoices, and financial reports.",
    },
    {
      name: "Marketing Agent",
      icon: "📢",
      description: "Generate campaigns, posts, and marketing ideas.",
    },
    {
      name: "Document Agent",
      icon: "📄",
      description: "Read, summarize, and analyze documents.",
    },
    {
      name: "Analytics Agent",
      icon: "📊",
      description: "Discover business insights from your data.",
    },
    {
      name: "Support Agent",
      icon: "🤖",
      description: "Answer customer questions automatically.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">
        🤖 BizPilot AI
      </h1>

      <p className="text-gray-400 text-xl mb-10">
        Your AI-powered business assistant team
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <div className="text-4xl mb-4">
              {agent.icon}
            </div>

            <h2 className="text-2xl font-semibold mb-2">
              {agent.name}
            </h2>

            <p className="text-gray-400">
              {agent.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
