import { inngest } from "@/inngest/client";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { roadmapId, userInput, userEmail } = await req.json(); // 👈 userEmail now comes from frontend

  try {
    const resultIds = await inngest.send({
      name: "AiRoadmapAgent",
      data: {
        userInput,
        roadmapId,
        userEmail: userEmail || "guest@unknown.com", // 👈 fallback if not provided
      },
    });

    const runId = resultIds?.ids?.[0];
    console.log("run", runId);

    let runStatus;
    // Polling to check run status
    while (true) {
      runStatus = await getRuns(runId);
      const status = runStatus?.data?.[0]?.status;
      if (status === "Completed" || status === "Cancelled") {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    const run = runStatus?.data?.[0];
    if (!run || run.status !== "Completed" || !run.output) {
      return NextResponse.json(
        { error: "No output returned from agent" },
        { status: 500 }
      );
    }

    return NextResponse.json(run.output);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

async function getRuns(runId: string) {
  const result = await axios.get(
    `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,
    {
      headers: {
        Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
      },
    }
  );
  return result.data;
}
