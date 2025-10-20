import { db } from "@/configs/db";
import { HistoryTable } from "@/configs/schema";
import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, recordId, aiAgentType, userEmail } = body;

    // ✅ Safe defaults
    const safeRecordId = recordId || crypto.randomUUID();
    const safeAgent = aiAgentType || "unknown";
    const safeEmail = userEmail || "guest@unknown.com";

    // ✅ Handle content safely (convert array/object to JSON string if needed)
    const safeContent =
      typeof content === "string"
        ? content
        : JSON.stringify(content ?? []);

    // ✅ Insert record
    const result = await db.insert(HistoryTable).values({
      recordId: safeRecordId,
      content: safeContent,
      userEmail: safeEmail,
      createdAt: new Date().toISOString(),
      aiAgentType: safeAgent,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("❌ Error in POST /api/history:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { content, recordId } = await req.json();
    const safeContent =
      typeof content === "string" ? content : JSON.stringify(content ?? []);

    const result = await db
      .update(HistoryTable)
      .set({ content: safeContent })
      .where(eq(HistoryTable.recordId, recordId));

    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ Error in PUT /api/history:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const recordId = searchParams.get("recordId");
  const userEmail = searchParams.get("userEmail") || "guest@unknown.com";

  try {
    if (recordId) {
      const result = await db
        .select()
        .from(HistoryTable)
        .where(eq(HistoryTable.recordId, recordId));
      return NextResponse.json(result[0] || {});
    }

    const result = await db
      .select()
      .from(HistoryTable)
      .where(eq(HistoryTable.userEmail, userEmail))
      .orderBy(desc(HistoryTable.id));

    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ Error in GET /api/history:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
