import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { appCookies } from "./constants/cookies";
import { paths } from "./utils/paths";

// Define protected routes
const protectedRoutes = [paths.contactDoctor, paths.user];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if route is protected
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = request.cookies.get(appCookies.userToken)?.value;

    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow request to proceed
  return NextResponse.next();
}

// Specify matcher for middleware
export const config = {
  matcher: ["/user/:path*", "/consultations/:path*"],
};