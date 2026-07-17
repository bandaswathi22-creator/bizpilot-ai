import AgentChat from "@/app/components/AgentChat";

export default function SupportAgent() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-5xl font-bold">
        🛟 Support Agent
      </h1>

      <p className="text-gray-400 mt-3">
        Your AI Customer Support Assistant
      </p>

      <AgentChat agentName="Support Agent" />

      <a
        href="/"
        className="inline-block mt-8 bg-gray-700 px-5 py-3 rounded-lg"
      >
        ← Back to Dashboard
      </a>
    </main>
  );
}