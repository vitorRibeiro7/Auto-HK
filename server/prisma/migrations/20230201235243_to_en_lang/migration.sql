/*
  Warnings:

  - You are about to drop the column `ano` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `veiculo` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `vendido` on the `veiculo` table. All the data in the column will be lost.
  - Added the required column `brand` to the `veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sold` to the `veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_veiculo" ("createdAt", "desc", "id", "updatedAt") SELECT "createdAt", "desc", "id", "updatedAt" FROM "veiculo";
DROP TABLE "veiculo";
ALTER TABLE "new_veiculo" RENAME TO "veiculo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
