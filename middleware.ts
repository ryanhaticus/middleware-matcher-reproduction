import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/real-directory", request.url));
};

// When using template literals in a middleware matcher, the browser produces ERR_TOO_MANY_REDIRECTS
// Likely the result of NextJS being unable to handle template literals.

export const config = {
  matcher: `/fake-directory/:path*`,
};
