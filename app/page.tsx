import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";

const agents = [
  {
    name: "Sales Agent",
    icon: "💼",
    status: "Active",
    description: "Finds leads and improves sales performance.",
    link: "/agents/sales",
  },
  {
    name: "Finance Agent",
    icon: "💰",
    status: "Active",
    description: "Tracks financial insights and reports.",
    link: "/agents/finance",
  },
  {
    name: "Marketing Agent",
    icon: "📢",
    status: "Active",
    description: "Creates campaigns and growth strategies.",
    link: "/agents/marketing",
  },
  {
    name: "Document Agent",
    icon: "📄",
    status: "Active",
    description: "Analyzes and manages business documents.",
    link: "/agents/document",
  },
  {
    name: "Analytics Agent",
    icon: "📊",
    status: "Active",
    description: "Transforms data into decisions.",
    link: "/agents/analytics",
  },
  {
    name: "Support Agent",
    icon: "🤖",
    status: "Active",
    description: "Handles customer assistance.",
    link: "/agents/support",
  },
];


export default function Home() {

  return (

    <div className="flex min-h-screen bg-gray-950 text-white">

      <Sidebar />


      <main className="flex-1 p-10">

        <Header />


        {/* Hero */}

        <section className="
          rounded-3xl
          p-10
          bg-gradient-to-r
          from-blue-900
          via-indigo-900
          to-purple-900
          mb-10
        ">

          <h1 className="text-5xl font-bold">
            Your AI Workforce For Business Growth 🚀
          </h1>


          <p className="text-gray-200 text-xl max-w-3xl mt-5">
            BizPilot AI deploys intelligent agents that help your business
            automate operations, analyze data, and make smarter decisions.
          </p>


          <Link
            href="/agents/orchestrator"
            className="
              inline-block
              mt-8
              bg-blue-500
              hover:bg-blue-600
              px-7
              py-3
              rounded-xl
              font-semibold
            "
          >
            Launch AI Orchestrator 🚀
          </Link>

        </section>



        {/* KPI */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <DashboardCard
            title="Revenue"
            value="$125K"
          />

          <DashboardCard
            title="AI Tasks Completed"
            value="1,240"
          />

          <DashboardCard
            title="Customers"
            value="560"
          />

          <DashboardCard
            title="Growth"
            value="+24%"
          />

        </div>



        {/* Intelligence Panel */}

        <section className="
          bg-gray-900
          border
          border-gray-800
          rounded-2xl
          p-8
          mb-10
        ">

          <h2 className="text-3xl font-bold">
            🧠 Business Intelligence Center
          </h2>


          <div className="grid md:grid-cols-3 gap-6 mt-6">


            <div>
              <p className="text-gray-400">
                AI Recommendation
              </p>

              <p className="mt-2">
                Increase customer engagement campaigns.
              </p>
            </div>


            <div>
              <p className="text-gray-400">
                Risk Detection
              </p>

              <p className="mt-2 text-green-400">
                No critical issues detected.
              </p>
            </div>


            <div>
              <p className="text-gray-400">
                Optimization
              </p>

              <p className="mt-2">
                18% workflow improvement available.
              </p>
            </div>


          </div>

        </section>




        {/* Agents */}


        <h2 className="text-3xl font-bold mb-6">
          🤖 AI Workforce
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          {agents.map((agent)=>(

            <div
              key={agent.name}
              className="
                bg-gray-900
                border
                border-gray-800
                rounded-2xl
                p-6
                hover:border-blue-500
                transition
              "
            >

              <div className="text-5xl">
                {agent.icon}
              </div>


              <h3 className="text-2xl font-bold mt-4">
                {agent.name}
              </h3>


              <p className="text-green-400 mt-2">
                🟢 {agent.status}
              </p>


              <p className="text-gray-400 mt-3">
                {agent.description}
              </p>


              <Link
                href={agent.link}
                className="
                  inline-block
                  mt-5
                  bg-blue-600
                  px-5
                  py-2
                  rounded-lg
                  hover:bg-blue-700
                "
              >
                Open Agent
              </Link>


            </div>

          ))}


        </div>


      </main>

    </div>

  );
}