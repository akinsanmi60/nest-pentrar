-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('Active', 'Inactive', 'Pending', 'Invited');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "role" TEXT,
    "last_active" TEXT,
    "status" "UserStatus" NOT NULL,
    "phone_number" TEXT,
    "is_active" BOOLEAN,
    "pentrar_user_id" TEXT,
    "verification_code" TEXT,
    "password_resetCode" TEXT,
    "isEmail_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aggregator" (
    "_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN,
    "email" TEXT,
    "password" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "last_active" TEXT,
    "phone_number" TEXT,
    "pentrar_aggregator_id" TEXT,
    "created_by_id" TEXT,
    "verification_code" TEXT,
    "password_resetCode" TEXT,
    "isEmail_verified" BOOLEAN NOT NULL DEFAULT false,
    "status" "UserStatus" NOT NULL,
    "role" TEXT,

    CONSTRAINT "Aggregator_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "phone_number" TEXT,
    "password" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "type_of_produce" TEXT[],
    "pentrar_farmer_id" TEXT,
    "created_by_id" TEXT NOT NULL,
    "last_active" TEXT,
    "status" "UserStatus" NOT NULL,
    "verification_code" TEXT,
    "password_resetCode" TEXT,
    "isEmail_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT,
    "is_active" BOOLEAN,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transporter" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "role" TEXT,
    "last_active" TEXT,
    "status" "UserStatus" NOT NULL,
    "phone_number" TEXT,
    "is_active" BOOLEAN,
    "pentrar_trans_id" TEXT,
    "created_by_id" TEXT NOT NULL,
    "verification_code" TEXT,
    "password_resetCode" TEXT,
    "isEmail_verified" BOOLEAN NOT NULL DEFAULT false,
    "vehicle_type" TEXT,
    "vehicle_number" TEXT,
    "Vehicle_license" TEXT,

    CONSTRAINT "Transporter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produce" (
    "_id" TEXT NOT NULL,
    "name" TEXT,
    "quantity" INTEGER,
    "unit" INTEGER,
    "farmer_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "pentrar_produce_id" TEXT,
    "image" TEXT,
    "description" TEXT,

    CONSTRAINT "Produce_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_pentrar_user_id_key" ON "User"("pentrar_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_verification_code_key" ON "User"("verification_code");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_resetCode_key" ON "User"("password_resetCode");

-- CreateIndex
CREATE UNIQUE INDEX "Aggregator_email_key" ON "Aggregator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aggregator_phone_number_key" ON "Aggregator"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Aggregator_pentrar_aggregator_id_key" ON "Aggregator"("pentrar_aggregator_id");

-- CreateIndex
CREATE UNIQUE INDEX "Aggregator_verification_code_key" ON "Aggregator"("verification_code");

-- CreateIndex
CREATE UNIQUE INDEX "Aggregator_password_resetCode_key" ON "Aggregator"("password_resetCode");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_email_key" ON "Farmer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_phone_number_key" ON "Farmer"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_pentrar_farmer_id_key" ON "Farmer"("pentrar_farmer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_verification_code_key" ON "Farmer"("verification_code");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_password_resetCode_key" ON "Farmer"("password_resetCode");

-- CreateIndex
CREATE UNIQUE INDEX "Transporter_email_key" ON "Transporter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Transporter_phone_number_key" ON "Transporter"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Transporter_verification_code_key" ON "Transporter"("verification_code");

-- CreateIndex
CREATE UNIQUE INDEX "Transporter_password_resetCode_key" ON "Transporter"("password_resetCode");

-- AddForeignKey
ALTER TABLE "Aggregator" ADD CONSTRAINT "user_relation" FOREIGN KEY ("created_by_id") REFERENCES "User"("pentrar_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "aggregator_relation" FOREIGN KEY ("created_by_id") REFERENCES "Aggregator"("pentrar_aggregator_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "user_relation" FOREIGN KEY ("created_by_id") REFERENCES "User"("pentrar_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transporter" ADD CONSTRAINT "aggregator_relation" FOREIGN KEY ("created_by_id") REFERENCES "Aggregator"("pentrar_aggregator_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transporter" ADD CONSTRAINT "user_relation" FOREIGN KEY ("created_by_id") REFERENCES "User"("pentrar_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transporter" ADD CONSTRAINT "farmer_relation" FOREIGN KEY ("created_by_id") REFERENCES "Farmer"("pentrar_farmer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produce" ADD CONSTRAINT "Produce_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
