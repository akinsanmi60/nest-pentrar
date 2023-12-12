/*
  Warnings:

  - The `role` column on the `Aggregator` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `Farmer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `Transporter` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'SubAdmin', 'Farmer', 'Aggregator', 'Company', 'Transporter');

-- AlterTable
ALTER TABLE "Aggregator" DROP COLUMN "role",
ADD COLUMN     "role" "Role";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "role",
ADD COLUMN     "role" "Role";

-- AlterTable
ALTER TABLE "Farmer" DROP COLUMN "role",
ADD COLUMN     "role" "Role";

-- AlterTable
ALTER TABLE "Transporter" DROP COLUMN "role",
ADD COLUMN     "role" "Role";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role";
