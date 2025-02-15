import { redirect } from "next/navigation";
import Board from "@/app/models/Board";
import Post from "@/app/models/Post";
import CardPostAdmin from "@/components/CardPostAdmin";
import User from "@/app/models/User";
import connectMongo from "@/libs/mongoose";
import mongoose from "mongoose";
import { auth } from "@/auth";
import Link from "next/link";
import CardBoardLink from "@/components/CardBoardLink";
import ButtonDeleteBoard from "@/components/ButtonDeleteBoard";

const getData = async (boardId) => {
  const session = await auth();
  await connectMongo();

  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });

  if (!session?.user?.id) {
    console.log("❌ You haven't access to this page");
    redirect("/");
  }

  if (!board) {
    console.log(
      `❌ Board with ID ${boardId} not found for user ${session.user.id} with name ${boardId.name}`
    );
  }

  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });

  return { board, posts };
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = params;
  const { board, posts } = await getData(boardId);

  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="bg-base-100 flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold">
            <a href="/">BetterProduct</a>
          </div>
          <div className="space-x-4 max-md:hidden">
            <a href="#pricing" className="link link-hover">
              Pricing
            </a>
            <a href="#faq" className="link link-hover">
              FAQ
            </a>
          </div>
          <div>
            <Link href="/dashboard" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 py-12 flex flex-col md:flex-row md:items-start gap-12">
        <div className="bg-base-100 p-5 rounded-3xl space-y-8 shrink-0 md:sticky md:top-4">
          <h1 className="font-extrabold texl-xl mb-4">
            {board ? board.name.toString() : "Loading..."}
          </h1>
          <CardBoardLink boardId={boardId.toString()} />
          <ButtonDeleteBoard boardId={boardId.toString()} />
        </div>
        <ul className="space-y-4 flex-grow">
          {posts.length > 0 ? (
            posts.map((post) => <CardPostAdmin key={post._id} post={post} />)
          ) : (
            <CardPostAdmin isExample={true} />
          )}
        </ul>
      </section>
    </main>
  );
}
