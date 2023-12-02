import { NextResponse } from "next/server";
export default async function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/login", request.nextUrl));
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/"],
};
