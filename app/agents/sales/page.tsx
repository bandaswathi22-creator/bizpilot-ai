import Link from "next/link";
import AgentChat from "@/app/components/AgentChat";

export default function SalesAgent() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          💼 Sales Intelligence Agent
        </h1>

        <p className="text-gray-400 text-lg mt-3">
          Your AI-powered sales consultant for leads, customers,
          and revenue growth.
        </p>

      </div>


      {/* Status */}
      <div className="
        bg-gray-900
        border
        border-gray-800
        rounded-2xl
        p-6
        mb-8
      ">

        <h2 className="text-2xl font-bold">
          Agent Status
        </h2>

        <p className="text-green-400 mt-3">
          🟢 Online and Ready
        </p>

      </div>


      {/* Capabilities */}
      <div className="
        bg-gray-900
        border
        border-gray-800
        rounded-2xl
        p-6
        mb-8
      ">

        <h2 className="text-2xl font-bold mb-4">
          Capabilities
        </h2>


        <ul className="space-y-2 text-gray-300">

          <li>
            ✅ Lead analysis
          </li>

          <li>
            ✅ Customer insights
          </li>

          <li>
            ✅ Sales strategy recommendations
          </li>

          <li>
            ✅ Revenue opportunity detection
          </li>

        </ul>

      </div>



      {/* AI Chat */}
      <div className="
        bg-gray-900
        border
        border-gray-800
        rounded-2xl
        p-6
      ">

        <h2 className="text-2xl font-bold mb-5">
          🤖 Ask Your Sales AI
        </h2>

        <AgentChat agentName="Sales Agent" />

      </div>



      <Link
        href="/"
        className="
          inline-block
          mt-8
          bg-gray-700
          hover:bg-gray-600
          px-5
          py-3
          rounded-lg
        "
      >
        ← Back to Dashboard
      </Link>


    </main>
  );
}