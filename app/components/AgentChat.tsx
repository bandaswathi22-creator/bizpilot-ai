"use client";

import { useState } from "react";

type AgentChatProps = {
  agentName: string;
};

export default function AgentChat({ agentName }: AgentChatProps) {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);


  const getResponse = () => {

    if (!question.trim()) {
      setResponse("⚠️ Please enter a business question.");
      return;
    }


    setLoading(true);


    setTimeout(() => {

      let answer = "";


      switch (agentName) {


        case "Sales Agent":

          answer = `
📈 Sales Intelligence Report

Question:
"${question}"

Recommendations:

✅ Identify your highest-value customer segments.
✅ Improve your sales funnel.
✅ Create a follow-up strategy.
✅ Track conversion metrics.
          `;

          break;



        case "Finance Agent":

          answer = `
💰 Finance Intelligence Report

Question:
"${question}"

Recommendations:

✅ Review cash flow.
✅ Analyze expenses.
✅ Forecast revenue.
✅ Improve profitability.
          `;

          break;



        case "Marketing Agent":

          answer = `
📢 Marketing Intelligence Report

Question:
"${question}"

Recommendations:

✅ Define your target audience.
✅ Create content campaigns.
✅ Optimize advertising.
✅ Measure marketing ROI.
          `;

          break;



        case "Document Agent":

          answer = `
📄 Document Intelligence Report

Request:
"${question}"

I can help create:

✅ Business proposals
✅ Executive summaries
✅ Reports
✅ Meeting notes
✅ Documentation
          `;

          break;



        case "Analytics Agent":

          answer = `
📊 Analytics Intelligence Report

Question:
"${question}"

Key metrics to monitor:

✅ Revenue growth
✅ Customer acquisition
✅ Conversion rate
✅ Retention rate
✅ Sales performance
          `;

          break;



        case "Support Agent":

          answer = `
🤖 Customer Support Intelligence

Request:
"${question}"

Recommended actions:

✅ Understand customer needs.
✅ Provide a clear solution.
✅ Follow up after resolution.
✅ Record feedback.
          `;

          break;



        default:

          answer = `
🤖 ${agentName}

Processing request:

"${question}"

AI recommendation generated.
          `;

      }


      setResponse(answer);
      setLoading(false);


    }, 1200);


  };



  return (

    <div
      className="
      bg-gray-900
      rounded-2xl
      p-6
      border
      border-gray-800
      "
    >


      <h2 className="text-2xl font-bold mb-5">
        🤖 Chat with {agentName}
      </h2>



      <textarea

        className="
        w-full
        bg-gray-800
        rounded-xl
        p-4
        text-white
        border
        border-gray-700
        "

        rows={5}

        placeholder={`Ask ${agentName} a business question...`}

        value={question}

        onChange={(e) => setQuestion(e.target.value)}

      />



      <button

        onClick={getResponse}

        className="
        mt-4
        bg-blue-600
        hover:bg-blue-700
        px-6
        py-3
        rounded-xl
        font-semibold
        "

      >

        {loading ? "🤖 Thinking..." : "Send Request"}

      </button>



      {response && (

        <div
          className="
          mt-6
          bg-gray-800
          rounded-xl
          p-5
          border
          border-blue-500
          whitespace-pre-line
          "
        >

          <h3 className="
            text-blue-400
            font-bold
            mb-3
          ">
            {agentName} Analysis
          </h3>


          {response}


        </div>

      )}



    </div>

  );
}