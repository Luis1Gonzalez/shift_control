/*
  Warnings:

  - You are about to drop the column `mont` on the `shiftentry` table. All the data in the column will be lost.
  - Added the required column `month` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shiftentry` DROP COLUMN `mont`,
    ADD COLUMN `month` INTEGER NOT NULL;
