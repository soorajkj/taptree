import { type NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export default async function middleware(req: NextRequest, _res: NextResponse) {
  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // getSessionCookie function only checks for the existence of a session cookie; it does not validate it.
  // Anyone can manually create a cookie to bypass it.
  // recommend handling auth checks in each page/route
  const sessionCookie = getSessionCookie(req);
  const isLoggedIn = !!sessionCookie;
  const isProtectedRoute = PROTECTED_ROUTES.includes(req.nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(req.nextUrl.pathname);

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

const PROTECTED_ROUTES = ["/dashboard"];
const AUTH_ROUTES = ["/signin", "/signup"];
