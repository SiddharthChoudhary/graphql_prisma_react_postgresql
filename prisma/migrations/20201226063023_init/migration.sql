/*
  Warnings:

  - Made the column `profile_picture` on table `Users` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "profile_picture" SET NOT NULL;
