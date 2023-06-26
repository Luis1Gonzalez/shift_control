/*
  Warnings:

  - You are about to drop the column `countTime` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `overTime` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `shiftDate` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `shiftDay` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `shiftMonth` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `shiftNote` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `shiftYear` on the `shiftentry` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `shiftentry` table. All the data in the column will be lost.
  - Added the required column `currentDate` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definitiveEnd` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `definitiveStart` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idGenerated` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localDay` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mont` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nowCurrentTime` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `shiftEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shiftentry` DROP COLUMN `countTime`,
    DROP COLUMN `endTime`,
    DROP COLUMN `overTime`,
    DROP COLUMN `shiftDate`,
    DROP COLUMN `shiftDay`,
    DROP COLUMN `shiftMonth`,
    DROP COLUMN `shiftNote`,
    DROP COLUMN `shiftYear`,
    DROP COLUMN `startTime`,
    ADD COLUMN `currentDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `definitiveEnd` VARCHAR(191) NOT NULL,
    ADD COLUMN `definitiveStart` VARCHAR(191) NOT NULL,
    ADD COLUMN `idGenerated` VARCHAR(191) NOT NULL,
    ADD COLUMN `localDay` VARCHAR(191) NOT NULL,
    ADD COLUMN `mont` INTEGER NOT NULL,
    ADD COLUMN `nowCurrentTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;
