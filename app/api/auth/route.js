export function GET() {
  return Response.json({ message: "GET request to the homepage 😅" });
}

export function POST() {
  // 1. Get the emayl and password from the request body

  // 2. Create connection to the database

  // 3. Query the database to see if the user exists

  // 4. a. If the user exists, create a session
  // 4. b. If the user does not exist, create a new user and session

  // 5. Return the session token

  return Response.json({ message: "POST request to the database 😅" });
}
