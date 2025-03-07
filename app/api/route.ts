import books from "./db";

export async function GET() {
  return Response.json(books);
}

export async function post(request: Request) {  
  const data = await request.json();
  books.push(data);
}
