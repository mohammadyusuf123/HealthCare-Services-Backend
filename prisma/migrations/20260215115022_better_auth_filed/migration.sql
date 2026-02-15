/*
  Warnings:

  - You are about to drop the column `neddPasswordChnage` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "neddPasswordChnage",
ADD COLUMN     "needPasswordChnage" BOOLEAN NOT NULL DEFAULT false;
