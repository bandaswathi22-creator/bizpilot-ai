import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";

const agents = [
  {
    name: "Sales Agent",
    icon: "💼",
    status: "🟢 Active",
    link: "/agents/sales",
  },
  {
    name: "Finance Agent",
    icon: "💰",
    status: "🟢 Active",
    link: "/agents/finance",
  },
  {
    name: "Marketing Agent",
    icon: "📢",
    status: "🟢 Active",
    link: "/agents/marketing",
  },
  {
    name: "Document Agent",
    icon: "📄",
    status: "🟢 Active",
    link: "/agents/document",
  },
  {
    name: "Analytics Agent",
    icon: "📊",
    status: "🟢 Active",
    link: "/agents/analytics",
  },
  {
    name: "Support Agent",
    icon: "🤖",
    status: "🟢 Active",
    link: "/agents/support",
  },
];
export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <DashboardCard title="Revenue" value="$125K" />
          <DashboardCard title="AI Tasks" value="1,240" />
          <DashboardCard title="Customers" value="560" />
          <DashboardCard title="Growth" value="+24%" />
          <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8">
  <h2 className="text-3xl font-bold">
    📈 AI Business Health Score
  </h2>

  <div className="flex items-center mt-6">
    <div className="text-6xl font-bold text-green-400">
      92%
    </div>

    <div className="ml-8">
      <p>✅ Revenue Growth</p>
      <p>✅ Customer Satisfaction</p>
      <p>✅ Marketing Performance</p>
      <p>✅ Financial Stability</p>
    </div>
  </div>
</div>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          🤖 AI Workforce
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <div className="text-5xl mb-4">{agent.icon}</div>

              <h3 className="text-2xl font-semibold">
                {agent.name}
              </h3>

              <p className="text-green-400 my-3">
                {agent.status}
              </p>

              <a
                href={agent.link}
                className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Open Agent
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}