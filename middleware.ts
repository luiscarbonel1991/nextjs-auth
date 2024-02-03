import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { 
    DEFAULT_LOGIN_REDIRECT, 
    apiAuthPrefix, 
    authRoutes, 
    publicRoutes 
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const { pathname } = nextUrl;
    const isLoggedIn = !!req.auth
    
    
    const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);

    if (isApiAuthRoute) { 
        return null;
    }

    if(isAuthRoute) {
        if(isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if(!isLoggedIn && !isPublicRoute) {

        let callBackUrl = nextUrl.pathname;
        if(nextUrl.search) {
            callBackUrl += nextUrl.search;
        }

        const encodedCallBackUrl = encodeURIComponent(callBackUrl);
        return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallBackUrl}`, nextUrl));
    }

    return null;

})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}