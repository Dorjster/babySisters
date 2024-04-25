import { authMiddleware } from "@clerk/nextjs";


// Ene dotor linknude orulaarai page ni signin guiger oroh clerk bhgui bvl zaaval clerk eer login hiij bj ordog bolno shu xd 
export default authMiddleware({
  publicRoutes: ["/", "/login", "/signup", "/profile"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
