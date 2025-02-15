/**
 * API endpoint to create a new Post document in the database.
 * The route is not protected by the auth middleware, so anyone can create a new post.
 * The route expects a POST request with a title and description in the request body.
 * The boardId is passed as a query parameter in the URL.
 * The userId is taken from the session token if the user is logged in.
 *
 * @param {Request} req - The incoming request object.
 * @returns {Promise<Response>} - The response object.
 *
 * @throws {Error} - If there is an error during the process.
 */
// an API endpoint to create a new Post document in the database.
// The route is no protectet by the auth middleware, so anyone can create a new post.
// The route expects a POST request with a title, description in the request body.
// The boardId is passed as a query parameter in the URL.
// The userId is taken from the session token if the user is logged in.

import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Post from "@/app/models/Post";
import Board from "@/app/models/Board";
import { auth } from "@/auth";
import { Filter } from "bad-words";
import User from "@/app/models/User";

export async function POST(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    const body = await req.json();
    const badWordsFilter = new Filter();
    const sanitizedTitle = badWordsFilter.clean(body.title);
    const sanitizedDescription = badWordsFilter.clean(body.description);

    if (!boardId) {
      return NextResponse.json(
        { error: "boardId is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    await connectMongo();

    const post = new Post({
      title: sanitizedTitle,
      description: sanitizedDescription,
      boardId,
      userId: session?.user?.id,
    });

    await post.save();

    return NextResponse.json({ post });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "postId is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    await connectMongo();

    const user = await User.findById(session.user.id);

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "Please, subscribe first" },
        { status: 403 }
      );
    }

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (!user.boards.includes(post.boardId.toString())) {
      return NextResponse.json(
        { error: "You are not authorized to delete this post" },
        { status: 403 }
      );
    }

    await Post.deleteOne({ _id: postId });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
