import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // BASE_URL is "/" by default and "/eternal-paw-prints/" for the GitHub Pages build.
  // TanStack Router wants the basepath without the trailing slash.
  const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};
