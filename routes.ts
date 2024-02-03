/**
 * @description An array of public routes
 * @type {string[]}
 * @export
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
];


/**
 * @description An array of routes that are used for authentication. 
 * These routes will redirect logged users to the default page
 * @type {string[]}
 * @export
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

/**
 * @description The prefix for the api authentication routes.
 * Routes that start with this prefix will be authenticated
 * @type {string}
 * @export
 */
export const apiAuthPrefix = "/api/auth";


/**
 * @description The default page to redirect users after login
 * @type {string}
 * @export
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";


