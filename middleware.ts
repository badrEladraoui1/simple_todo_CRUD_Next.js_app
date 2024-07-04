import { NextResponse } from "next/server";

export const config = {
  matcher: ["/docs"],
};

const middleware = (request: Request) => {
  return NextResponse.redirect(new URL("/", request.url));
};

export default middleware;
