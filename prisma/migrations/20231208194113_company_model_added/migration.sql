/*
  Warnings:

  - Made the column `created_by_id` on table `Aggregator` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Aggregator" DROP CONSTRAINT "user_relation";

-- AlterTable
ALTER TABLE "Aggregator" ALTER COLUMN "created_by_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "phone_number" TEXT,
    "password" TEXT,
    "company_name" TEXT,
    "company_address" TEXT,
    "legal_entity_name" TEXT,
    "tax_identification_number" TEXT,
    "pentrar_company_id" TEXT,
    "created_by_id" TEXT NOT NULL,
    "last_active" TEXT,
    "company_type" TEXT,
    "point_of_contact" TEXT,
    "parent_company" TEXT,
    "subsidiaries_company" TEXT,
    "annual_revenue" TEXT,
    "financial_statement" TEXT,
    "status" "UserStatus" NOT NULL,
    "verification_code" TEXT,
    "password_resetCode" TEXT,
    "isEmail_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT,
    "is_active" BOOLEAN,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_phone_number_key" ON "Company"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Company_tax_identification_number_key" ON "Company"("tax_identification_number");

-- CreateIndex
CREATE UNIQUE INDEX "Company_pentrar_company_id_key" ON "Company"("pentrar_company_id");

-- CreateIndex
CREATE UNIQUE INDEX "Company_verification_code_key" ON "Company"("verification_code");

-- CreateIndex
CREATE UNIQUE INDEX "Company_password_resetCode_key" ON "Company"("password_resetCode");

-- AddForeignKey
ALTER TABLE "Aggregator" ADD CONSTRAINT "company_relation" FOREIGN KEY ("created_by_id") REFERENCES "Company"("pentrar_company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aggregator" ADD CONSTRAINT "user_relation" FOREIGN KEY ("created_by_id") REFERENCES "User"("pentrar_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "company_relation" FOREIGN KEY ("created_by_id") REFERENCES "Company"("pentrar_company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transporter" ADD CONSTRAINT "company_relation" FOREIGN KEY ("created_by_id") REFERENCES "Company"("pentrar_company_id") ON DELETE RESTRICT ON UPDATE CASCADE;
