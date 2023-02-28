-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "articleText" TEXT NOT NULL,
    "dateSubmitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "dateSubmitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
