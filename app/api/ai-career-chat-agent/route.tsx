// import { inngest } from "@/inngest/client";
// import axios from "axios";
// import { NextResponse } from "next/server";

// export async function POST(req: any) {
//   const { userInput } = await req.json();

//   const resultIds = await inngest.send({
//     name: 'AiCareerAgent',
//     data: {
//       userInput: userInput
//     }
//   });
//   const runId = resultIds?.ids[0];
//   console.log('run', runId)

//   let runStatus;
//   while(true)
//   {
//     runStatus = await getRuns(runId);
//     if(runStatus?.data[0]?.status === 'Completed')
//       break;

//     await new Promise(resolve => setTimeout(resolve, 5000))
//   }
//   return NextResponse.json(runStatus.data?.[0].output?.output[0])
// }

//  async function getRuns(runId:string) {
//   const result = await axios.get(`${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,{
//     headers: {
//       Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`
//     }
//   })
//   return result.data
// }
// console.log('get', getRuns)
import { inngest } from "@/inngest/client";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json();

    if (!userInput) {
      return NextResponse.json({ error: "Missing userInput" }, { status: 400 });
    }

    // ✅ Send the event to Inngest
    const resultIds = await inngest.send({
      name: "AiCareerAgent",
      data: { userInput },
    });

    const runId = resultIds?.ids?.[0];
    if (!runId) {
      throw new Error("No run ID returned from Inngest");
    }

    console.log("🚀 Started run:", runId);

    // ✅ Poll for run completion (with timeout)
    let runStatus: any = null;
    const maxTries = 12; // = 1 minute max wait (12 * 5 seconds)
    for (let i = 0; i < maxTries; i++) {
      const runs = await getRuns(runId);
      const status = runs?.[0]?.status;

      if (status === "Completed") {
        runStatus = runs[0];
        break;
      }

      console.log(`⏳ Waiting for completion... [${i + 1}/${maxTries}]`);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    if (!runStatus) {
      throw new Error("Run did not complete within timeout period");
    }

    return NextResponse.json(runStatus.output?.output?.[0]);
  } catch (err) {
    console.error("❌ Error in ai-career-chat-agent route:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: String(err) },
      { status: 500 }
    );
  }
}

async function getRuns(runId: string) {
  try {
    const res = await axios.get(
      `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,
      {
        headers: {
          Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
        },
      }
    );

    // ✅ Return runs array directly
    return res.data?.data || [];
  } catch (err) {
    console.error("❌ Error fetching run data:", err);
    return [];
  }
}
