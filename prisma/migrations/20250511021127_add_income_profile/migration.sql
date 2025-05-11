/*
  Warnings:

  - You are about to drop the `CreditCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Submission` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('FULL_TIME', 'PART_TIME', 'SEASONAL', 'RETIRED', 'UNEMPLOYED', 'STUDENT');

-- CreateEnum
CREATE TYPE "PaymentFrequency" AS ENUM ('WEEKLY', 'BIWEEKLY', 'MONTHLY', 'SEMIMONTHLY');

-- CreateEnum
CREATE TYPE "PaystubPeriod" AS ENUM ('ONE_WEEK', 'TWO_WEEKS', 'HALF_MONTH', 'ONE_MONTH');

-- CreateEnum
CREATE TYPE "OtherIncomeType" AS ENUM ('UNEMPLOYMENT', 'DISABILITY', 'RETIREMENT', 'PUBLIC_ASSISTANCE', 'CHILD_SUPPORT', 'VETERANS_BENEFITS', 'ALIMONY', 'STUDENT_LOANS_GRANTS', 'SCHOLARSHIPS', 'TAX_REFUND', 'RENTAL_INCOME', 'INVESTMENT_INCOME', 'OTHER');

-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_userId_fkey";

-- DropTable
DROP TABLE "CreditCard";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Submission";

-- CreateTable
CREATE TABLE "IncomeProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncomeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "incomeProfileId" INTEGER NOT NULL,
    "employmentStatus" "EmploymentStatus" NOT NULL,
    "employerName" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "paymentFrequency" "PaymentFrequency" NOT NULL,
    "paystubPeriod" "PaystubPeriod" NOT NULL,
    "grossSalary" DECIMAL(10,2) NOT NULL,
    "taxDeductions" DECIMAL(10,2) NOT NULL,
    "healthInsurance" DECIMAL(10,2) NOT NULL,
    "retirementContributions" DECIMAL(10,2) NOT NULL,
    "netSalary" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtherDeduction" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OtherDeduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtherIncomeSource" (
    "id" SERIAL NOT NULL,
    "incomeProfileId" INTEGER NOT NULL,
    "sourceType" "OtherIncomeType" NOT NULL,
    "frequency" "PaymentFrequency" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "additionalContext" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OtherIncomeSource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IncomeProfile_userId_key" ON "IncomeProfile"("userId");

-- AddForeignKey
ALTER TABLE "IncomeProfile" ADD CONSTRAINT "IncomeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_incomeProfileId_fkey" FOREIGN KEY ("incomeProfileId") REFERENCES "IncomeProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OtherDeduction" ADD CONSTRAINT "OtherDeduction_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OtherIncomeSource" ADD CONSTRAINT "OtherIncomeSource_incomeProfileId_fkey" FOREIGN KEY ("incomeProfileId") REFERENCES "IncomeProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
