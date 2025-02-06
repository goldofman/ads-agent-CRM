import { redirect } from "next/navigation";
import Board from "@/app/models/Board";
import connectMongo from "@/libs/mongoose";

const getBoard = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);

  if (!board) {
    redirect("/");
  }

  return board;
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const board = await getBoard(boardId);
  return <main>{boardId} (public)</main>;
}
