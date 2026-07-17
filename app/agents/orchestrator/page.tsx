"use client";

import { useState } from "react";

export default function OrchestratorPage() {
  const [goal, setGoal] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">
        🚀 AI Business Orchestrator
      </h1>

      <p className="text-gray-400 text-xl mb-8">
        Coordinate multiple AI agents to solve a complete business problem.
      </p>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

        <label className="block text-lg mb-3">
          Business Goal
        </label>

        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full bg-gray-800 rounded-lg p-4"
          rows={4}
          placeholder="Example: Launch an online clothing store..."
        />

        <button
          onClick={() => setShowResult(true)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Launch AI Workforce
        </button>

      </div>

      {showResult && (
        <div className="mt-10 space-y-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold">💼 Sales Agent</h2>
            <p className="mt-3 text-gray-300">
              Recommend targeting high-value customers, creating promotional offers,
              and building a structured sales pipeline for: <strong>{goal}</strong>.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold">📢 Marketing Agent</h2>
            <p className="mt-3 text-gray-300">
              Launch social media campaigns, optimize SEO, create email marketing,
              and partner with influencers.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold">💰 Finance Agent</h2>
            <p className="mt-3 text-gray-300">
              Prepare a startup budget, monitor cash flow, estimate revenue,
              and identify cost-saving opportunities.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold">📄 Document Agent</h2>
            <p className="mt-3 text-gray-300">
              Generate a business proposal, investor pitch, and executive summary.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold">📊 Analytics Agent</h2>
            <p className="mt-3 text-gray-300">
              Track KPIs including customer acquisition, conversion rate,
              monthly revenue, and retention.
            </p>
          </div>

          <div className="bg-blue-900 p-6 rounded-xl border border-blue-500">
            <h2 className="text-2xl font-bold">
              🎯 Final AI Business Strategy
            </h2>

            <p className="mt-3">
              AI Business Pilot coordinated all specialized agents and produced
              a unified strategy to accomplish your business goal:
            </p>

            <p className="mt-4 font-semibold text-xl">
              "{goal}"
            </p>
          </div>

        </div>
      )}

    </main>
  );
}