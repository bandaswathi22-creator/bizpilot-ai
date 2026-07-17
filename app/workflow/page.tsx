export default function Workflow() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        🚀 AI Workflow
      </h1>

      <div className="space-y-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          💼 Sales Agent → Finds customers
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          📢 Marketing Agent → Creates campaigns
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          💰 Finance Agent → Calculates budget
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          📄 Document Agent → Generates proposal
        </div>

        <div className="bg-blue-900 p-6 rounded-xl">
          🎯 Final Business Strategy Delivered
        </div>

      </div>

    </main>
  );
}