/*
  Warnings:

  - You are about to drop the column `desc` on the `vehicle` table. All the data in the column will be lost.
  - Added the required column `description` to the `vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_vehicle" ("brand", "createdAt", "id", "name", "sold", "updatedAt", "year") SELECT "brand", "createdAt", "id", "name", "sold", "updatedAt", "year" FROM "vehicle";
DROP TABLE "vehicle";
ALTER TABLE "new_vehicle" RENAME TO "vehicle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
