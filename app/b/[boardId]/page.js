import { redirect } from "next/navigation";
import Board from "@/app/models/Board";
import Post from "@/app/models/Post";
import connectMongo from "@/libs/mongoose";
import FormAddPost from "@/components/FormAddPost";
import CardPost from "@/components/CardPost";

const getData = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);
  const posts = await Post.find({ boardId }).sort({ votesCounter: -1 });

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
            posts.map((post) => (
              <div key={post._id}>
                <CardPost post={post} />
              </div>
            ))
          ) : (
            <>
              <CardPost
                post={{
                  id: "example-1",
                  title: "Example - New best feature ever 😉",
                  description:
                    "You should do your best to improve UX ☺️ and make your users happy 🎉",
                }}
                isExample={true}
              />
              <CardPost
                post={{
                  id: "example-2",
                  title: "Second example - Dark mode is a must! 🌙",
                  description:
                    "Adding a dark mode will make your app more comfortable for night-time browsing! 🔥",
                }}
                isExample={true}
              />
            </>
          )}
        </ul>
      </section>
    </main>
  );
}
