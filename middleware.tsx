// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/api/inngest",
  "/sign-in",
  "/sign-up",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow all public routes
  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Example: Use a cookie or localStorage flag (custom)
  const isLoggedIn = req.cookies.get("user_email");

  if (!isLoggedIn) {
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // runs for all non-static routes
};
