"use client";

import { useState } from "react";

type AgentChatProps = {
  agentName: string;
};

export default function AgentChat({ agentName }: AgentChatProps) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const getResponse = () => {
    if (!question.trim()) {
      setResponse("⚠️ Please enter a business question.");
      return;
    }

    let answer = "";

    switch (agentName) {
      case "Sales Agent":
        answer = `📈 Sales Strategy for "${question}"

• Identify your ideal customers.
• Build a structured sales funnel.
• Follow up with every lead within 24 hours.
• Offer limited-time promotions.
• Track weekly conversion rates.`;
        break;

      case "Finance Agent":
        answer = `💰 Financial Advice for "${question}"

• Estimate startup costs carefully.
• Create a monthly budget.
• Maintain healthy cash flow.
• Reduce unnecessary expenses.
• Monitor profitability every month.`;
        break;

      case "Marketing Agent":
        answer = `📢 Marketing Plan for "${question}"

• Build a social media campaign.
• Create engaging video content.
• Run targeted Google and Meta ads.
• Start an email newsletter.
• Measure campaign performance weekly.`;
        break;

      case "Document Agent":
        answer = `📄 Document Assistant

Based on "${question}", I can generate:

• Business Proposal
• Executive Summary
• Investor Pitch
• Meeting Notes
• Project Documentation`;
        break;

      case "Analytics Agent":
        answer = `📊 Business Analytics for "${question}"

Track these KPIs:

• Revenue Growth
• Customer Acquisition
• Conversion Rate
• Customer Retention
• Monthly Sales Performance`;
        break;

      case "Support Agent":
        answer = `🤖 Customer Support

For your request:

"${question}"

Recommended actions:

• Acknowledge the customer.
• Offer a clear solution.
• Follow up after resolution.
• Record customer feedback.`;
        break;

      default:
        answer = `AI Business Pilot is processing your request: "${question}"`;
    }

    setResponse(answer);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Chat with {agentName}
      </h2>

      <textarea
        className="w-full bg-gray-800 rounded-lg p-4 text-white"
        rows={4}
        placeholder="Ask your AI agent anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={getResponse}
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
      >
        Send
      </button>

      {response && (
        <div className="mt-6 bg-gray-800 rounded-lg p-4 whitespace-pre-line border border-blue-500">
          <h3 className="font-bold text-blue-400 mb-2">
            🤖 {agentName} Response
          </h3>
          {response}
        </div>
      )}
    </div>
  );
}