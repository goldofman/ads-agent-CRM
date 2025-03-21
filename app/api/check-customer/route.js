import clientPromise from "@/app/utils/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: "Email обов'язковий" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection("customerId").findOne({ email });

    if (user) {
      return Response.json({
        exists: true,
        id: user._id.toString(),
        name: user.name || email,
      });
    } else {
      return Response.json({ exists: false });
    }
  } catch (error) {
    console.error("Помилка бази даних:", error);
    return Response.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 }
    );
  }
}
