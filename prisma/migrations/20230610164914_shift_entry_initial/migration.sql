-- CreateTable
CREATE TABLE `shiftEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shiftDate` VARCHAR(191) NOT NULL,
    `shiftDay` VARCHAR(191) NOT NULL,
    `shiftMonth` VARCHAR(191) NOT NULL,
    `shiftYear` VARCHAR(191) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `countTime` INTEGER NOT NULL,
    `overTime` INTEGER NOT NULL,
    `shiftNote` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
