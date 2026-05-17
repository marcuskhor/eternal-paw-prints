// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When GH_PAGES=1 we produce a fully static build for GitHub Pages:
//   - disable the Cloudflare Workers plugin
//   - enable SPA + prerender mode (HTML for every route)
//   - set base path to the repo name so assets resolve under /eternal-paw-prints/
// Lovable preview keeps using the default SSR-on-Workers build.
const isGhPages = process.env.GH_PAGES === "1";

export default defineConfig(
  isGhPages
    ? {
        cloudflare: false,
        tanstackStart: {
          spa: { enabled: true },
          pages: [
            { path: "/", prerender: { enabled: true } },
            { path: "/services", prerender: { enabled: true } },
            { path: "/about", prerender: { enabled: true } },
          ],
        },
        vite: {
          base: "/eternal-paw-prints/",
        },
      }
    : {
        tanstackStart: {
          server: { entry: "server" },
        },
      },
);
