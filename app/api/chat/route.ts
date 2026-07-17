import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { agentName, question } = await req.json();


    let answer = "";


    switch(agentName) {


      case "Sales Agent":

        answer = `
📈 Sales Agent Report

Your question:
"${question}"

Recommended strategy:

✅ Identify your ideal customers.
✅ Improve your sales funnel.
✅ Follow up with leads faster.
✅ Create strong offers.
✅ Track conversion rates weekly.

Business Goal:
Increase qualified leads and revenue growth.
        `;

        break;



      case "Finance Agent":

        answer = `
💰 Finance Agent Report

Your question:
"${question}"

Financial recommendations:

✅ Review monthly expenses.
✅ Improve cash flow management.
✅ Create revenue forecasts.
✅ Monitor profitability.
✅ Build emergency reserves.

Business Goal:
Create a financially healthy company.
        `;

        break;



      case "Marketing Agent":

        answer = `
📢 Marketing Agent Report

Your question:
"${question}"

Marketing strategy:

✅ Define your target audience.
✅ Create valuable content.
✅ Improve social media presence.
✅ Test advertising campaigns.
✅ Measure marketing ROI.

Business Goal:
Increase brand awareness and customer acquisition.
        `;

        break;



      case "Analytics Agent":

        answer = `
📊 Analytics Agent Report

Your question:
"${question}"

Important metrics:

✅ Revenue growth
✅ Customer acquisition cost
✅ Conversion rate
✅ Customer retention
✅ Monthly performance trends

Business Goal:
Make smarter decisions using data.
        `;

        break;



      case "Document Agent":

        answer = `
📄 Document Agent

Your request:
"${question}"

I can help prepare:

✅ Business proposals
✅ Investor summaries
✅ Reports
✅ Meeting notes
✅ Project documentation

Business Goal:
Save time creating professional documents.
        `;

        break;



      case "Support Agent":

        answer = `
🤖 Support Agent

Customer request:
"${question}"

Recommended actions:

✅ Understand customer needs.
✅ Provide a clear solution.
✅ Follow up quickly.
✅ Collect feedback.

Business Goal:
Improve customer satisfaction.
        `;

        break;



      default:

        answer = `
🚀 BizPilot AI Assistant

Request:
"${question}"

Your AI business workspace is ready.
        `;

    }


    return NextResponse.json({
      answer,
    });


  } catch (error) {


    return NextResponse.json(
      {
        error: "Demo AI failed",
      },
      {
        status: 500,
      }
    );


  }

}