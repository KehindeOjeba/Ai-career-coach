import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { inngest } from "@/inngest/client";
import axios from "axios";

// ✅ FIXED version without Clerk
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const resumeFile: any = formData.get("resumeFile");
    const recordId = formData.get("recordId");

    // ✅ Try to get email dynamically
    // Option 1: Email passed from frontend form
    let userEmail = formData.get("userEmail") as string | null;

    // Option 2: If not in form, check cookies (if you later store it there)
    if (!userEmail) {
      const cookieHeader = request.headers.get("cookie");
      const emailMatch = cookieHeader?.match(/user_email=([^;]+)/);
      if (emailMatch) userEmail = decodeURIComponent(emailMatch[1]);
    }

    // Option 3: Default fallback (for anonymous users)
    if (!userEmail) userEmail = "anonymous@guest.com";

    // ✅ Load PDF and convert to Base64
    const loader = new WebPDFLoader(resumeFile);
    const docs = await loader.load();
    const arrayBuffer = await resumeFile.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    // ✅ Send to Inngest
    const resultIds = await inngest.send({
      name: "AiResumeAgent",
      data: {
        recordId,
        base64ResumeFile: base64,
        pdfText: docs[0]?.pageContent,
        aiAgentType: "/ai-tools/ai-resume-analyzer",
        userEmail, // 👈 fixed and dynamic
      },
    });

    const runId = resultIds?.ids[0];
    let runStatus;

    while (true) {
      runStatus = await getRuns(runId);
      if (runStatus?.data[0]?.status === "Completed") break;
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    const run = runStatus?.data?.[0];

   if (!run || run.status !== "Completed" || !run.output) {
  return NextResponse.json({ error: "No output returned from agent" }, { status: 500 });
}


    return NextResponse.json(run.output);
  } catch (error) {
    console.error("Resume upload error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
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


//chatgpt
// import { NextRequest, NextResponse } from "next/server";
// import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// import { Buffer } from "buffer";
// import { inngest } from "@/inngest/client";
// import axios from "axios";


// export async function POST(request: NextRequest) {
//   try {
//     const FormData = await request.formData();
//     const resumeFile: any = FormData.get("resumeFile");
//     const recordId = FormData.get("recordId");
//     const user = await currentUser();

//     const arrayBuffer = await resumeFile.arrayBuffer();
//     const buffer: any = Buffer.from(arrayBuffer);

//     const loader = new PDFLoader(buffer);
//     const docs = await loader.load();

//     const base64 = buffer.toString("base64");

//     const resultIds = await inngest.send({
//       name: "AiResumeAgent",
//       data: {
//         recordId,
//         base64ResumeFile: base64,
//         pdfText: docs[0]?.pageContent,
//         aiAgentType: "/ai-tools/ai-resume-analyzer",
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//       },
//     });

//     const runId = resultIds?.ids[0];

//     let runStatus;
//     while (true) {
//       runStatus = await getRuns(runId);
//       if (runStatus?.data[0]?.status === "Completed") break;
//       await new Promise((resolve) => setTimeout(resolve, 5000));
//     }

//     return NextResponse.json(runStatus.data?.[0].output?.output[0]);
//   } catch (error) {
//     console.error("Resume upload error:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }

// export async function getRuns(runId: string) {
//   const result = await axios.get(
//     `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
//       },
//     }
//   );
//   return result.data;
// }
