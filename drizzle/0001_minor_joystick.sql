ALTER TABLE "historyTable" ALTER COLUMN "recordId" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "content" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "userEmail" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "createdAt" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "createdAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "aiAgentType" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "aiAgentType" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "historyTable" ALTER COLUMN "metaData" SET DATA TYPE varchar;