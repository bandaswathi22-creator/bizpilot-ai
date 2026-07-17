"use client";

import { useState } from "react";

type AgentChatProps = {
  agentName: string;
};

export default function AgentChat({ agentName }: AgentChatProps) {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);


  async function sendQuestion() {

    if (!question.trim()) {
      setResponse("⚠️ Please enter a question.");
      return;
    }


    setLoading(true);
    setResponse("");


    try {

      const res = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          agentName,
          question,
        }),

      });


      const data = await res.json();


      console.log("AI RESPONSE:", data);


      setResponse(
        data.answer || "⚠️ No response received."
      );


    } catch (error) {

      console.error(error);

      setResponse(
        "❌ Connection error."
      );

    }


    setLoading(false);

  }



  return (

    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">

      <h2 className="text-2xl font-bold mb-4 text-white">
        🤖 Chat with {agentName}
      </h2>


      <textarea

        className="
          w-full
          bg-gray-800
          text-white
          rounded-lg
          p-4
          border
          border-gray-700
        "

        rows={4}

        placeholder="Ask your AI agent..."

        value={question}

        onChange={(e)=>setQuestion(e.target.value)}

      />


      <button

        type="button"

        onClick={sendQuestion}

        disabled={loading}

        className="
          mt-4
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-3
          rounded-lg
          font-bold
        "

      >

        {loading ? "🤖 Thinking..." : "🚀 Send to AI"}

      </button>



      {response && (

        <div className="
          mt-6
          bg-gray-800
          text-white
          rounded-lg
          p-5
          border
          border-blue-500
          whitespace-pre-line
        ">

          <strong className="text-blue-400">
            {agentName} Response:
          </strong>

          <br />
          <br />

          {response}

        </div>

      )}

    </div>

  );

}