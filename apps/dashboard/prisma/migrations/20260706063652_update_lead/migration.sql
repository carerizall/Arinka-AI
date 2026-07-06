-- AlterTable
ALTER TABLE "public"."Lead" ADD COLUMN     "assignedTo" TEXT,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
