import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { agentName, question } = await req.json();


  let answer = "";


  switch(agentName) {


    case "Sales Agent":

      answer = `
💼 SALES INTELLIGENCE REPORT

Business Question:
"${question}"


Analysis:

Your growth opportunity is improving customer acquisition and conversion.


Recommended Actions:

1. Lead Generation
✅ Identify ideal customers
✅ Build targeted outreach campaigns
✅ Create referral opportunities


2. Sales Conversion
✅ Improve sales messaging
✅ Follow up with prospects quickly
✅ Track conversion rates


3. Revenue Growth
✅ Create premium offers
✅ Increase customer retention


Priority Score:
92/100


Expected Impact:
High potential for revenue growth.
`;

      break;



    case "Finance Agent":

      answer = `
💰 FINANCE INTELLIGENCE REPORT

Business Question:
"${question}"


Recommendations:

✅ Review monthly expenses
✅ Improve cash flow visibility
✅ Create revenue forecasts
✅ Track profit margins


Financial Health Score:
88/100


Expected Impact:
Better financial control and profitability.
`;

      break;



    case "Marketing Agent":

      answer = `
📢 MARKETING INTELLIGENCE REPORT

Business Question:
"${question}"


Strategy:

✅ Define customer segments
✅ Create valuable content
✅ Improve social presence
✅ Test advertising campaigns
✅ Measure marketing ROI


Marketing Score:
90/100


Expected Impact:
Higher customer awareness and growth.
`;

      break;



    case "Analytics Agent":

      answer = `
📊 ANALYTICS REPORT

Business Question:
"${question}"


Key Metrics:

✅ Revenue growth
✅ Customer acquisition cost
✅ Conversion rate
✅ Retention rate
✅ Monthly performance


Business Insight:

Data-driven decisions will improve performance.
`;

      break;



    case "Document Agent":

      answer = `
📄 DOCUMENT ASSISTANT

Request:
"${question}"


Available Documents:

✅ Business Proposal
✅ Investor Pitch
✅ Executive Summary
✅ Reports
✅ Meeting Notes


Ready to generate professional business documents.
`;

      break;



    case "Support Agent":

      answer = `
🤖 CUSTOMER SUPPORT REPORT

Customer Request:
"${question}"


Recommended Workflow:

✅ Understand customer issue
✅ Provide solution
✅ Follow up
✅ Record feedback


Support Quality Score:
95/100
`;

      break;



    default:

      answer = `
🚀 BizPilot AI

Your AI workforce is ready.

Request:
"${question}"
`;

  }


  return NextResponse.json({
    answer
  });

}