import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET request to the homepage 😅" });
}

export async function POST(request) {
  // 1. Get the email and password from the request body
  const { email, password } = await request.json();

  // 2. Create connection to the database
  // 3. Query the database to see if the user exists
  // 4. a. If the user exists, create a session
  // 4. b. If the user does not exist, create a new user and session
  // 5. Return the session token

  return NextResponse.json({ message: "POST request to the database 😅" });
}
