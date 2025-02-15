import { redirect } from "next/navigation";
import Board from "@/app/models/Board";
import Post from "@/app/models/Post";
import connectMongo from "@/libs/mongoose";
import FormAddPost from "@/components/FormAddPost";
import CardPost from "@/components/CardPost";

const getData = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);
  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });

  if (!board) {
    redirect("/");
  }

  return {
    board,
    posts,
  };
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;

  const { board, posts } = await getData(boardId);

  return (
    <main className="min-h-screen bg-base-200">
      <section className="max-w-5xl mx-auto p-5">
        <h1 className="text-lg font-bold">{board.name}</h1>
      </section>

      <section className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row md:items-start gap-8 pb-12">
        <FormAddPost boardId={boardId} />
        <ul className="space-y-4 flex-grow">
          {posts.length > 0 ? (
            posts.map((post) => <CardPost key={post._id} post={post} />)
          ) : (
            <CardPost isExample={true} />
          )}
        </ul>
      </section>
    </main>
  );
}
