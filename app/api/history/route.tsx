import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/configs/db";
import { HistoryTable } from "@/configs/schema";
import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { content, recordId, aiAgentType } = await req.json();
  const user = await currentUser();

  try {
    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "User email not found" }, { status: 400 });
    }

    const result = await db.insert(HistoryTable).values({
      recordId,
      content,
      userEmail: user.primaryEmailAddress.emailAddress,
      createdAt: new Date().toISOString(),
      aiAgentType,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { content, recordId } = await req.json();

  try {
    const result = await db
      .update(HistoryTable)
      .set({ content })
      .where(eq(HistoryTable.recordId, recordId));

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const recordId = searchParams.get("recordId");
  const user = await currentUser();

  try {
    if (recordId) {
      const result = await db
        .select()
        .from(HistoryTable)
        .where(eq(HistoryTable.recordId, recordId));
      return NextResponse.json(result[0] || {});
    }

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "User email not found" }, { status: 400 });
    }

    const result = await db
      .select()
      .from(HistoryTable)
      .where(eq(HistoryTable.userEmail, user.primaryEmailAddress.emailAddress))
      .orderBy(desc(HistoryTable.id));

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


// import { currentUser } from "@clerk/nextjs/server";
// import { db } from "@/configs/db";
// import { HistoryTable } from "@/configs/schema";
// import { NextResponse } from "next/server";
// import { desc, eq } from "drizzle-orm";
// import { err } from "inngest/types";
// export async function POST(req:any) {
//    const {content, recordId, aiAgentType} = await req.json();
//    const user = await currentUser();
//    try{
//     //insert record
//     const result = await db.insert(HistoryTable).values({
//         recordId: recordId,
//         content: content,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         createdAt: (new Date()).toString(),
//         aiAgentType: aiAgentType
//     });
//     return NextResponse.json(result)
//    } catch(error){
//         return NextResponse.json(error)
//    }
// }

// export async function PUT(req:any) {
//     const { content, recordId} = await req.json();
//     try{ 
//         //Insert record
//         const result = await db.update(HistoryTable).set({
//             content: content,
//         }).where(eq(HistoryTable.recordId, recordId))
//         return NextResponse.json(result)
//     }
//     catch (error){
// NextResponse.json(error)
//     }
    
// }

// export async function GET(request:any) {
  
//     const { searchParams } = new URL(request.url);
//     const recordId = searchParams.get('recordId');
//       const user = await currentUser();

//    try {
//     if (recordId) {
//         const result = await db.select().from(HistoryTable).where(eq(HistoryTable.recordId, recordId));
//       return NextResponse.json(result[0])  
//     }
//     else{
//            const result = await db.select().from(HistoryTable).where(eq(HistoryTable.userEmail, user?.primaryEmailAddress?.emailAddress))
//            .orderBy(desc(HistoryTable.id))
//       return NextResponse.json(result)  
//     }
//        return NextResponse.json({})
//     }

   
//    catch(error){
//     return NextResponse.json(error)
//    }
// }
