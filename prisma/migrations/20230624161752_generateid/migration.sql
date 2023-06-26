/*
  Warnings:

  - You are about to drop the column `idGenerated` on the `shiftentry` table. All the data in the column will be lost.
  - Added the required column `generatedId` to the `ShiftEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shiftentry` DROP COLUMN `idGenerated`,
    ADD COLUMN `generatedId` VARCHAR(191) NOT NULL;
