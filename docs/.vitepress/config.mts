import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oolong",
  description: "Oolong docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/configuration-overview" },
      { text: "Showcase", link: "/showcase" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Oolong?", link: "/guide/what-is-oolong" },
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "Configuration", link: "/reference/configuration-overview" },
        ],
      },
      {
        text: "Showcase",
        items: [
          { text: "Graph", link: "/graph-showcase" },
          { text: "Editor", link: "/editor-showcase" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/oolong-sh" },
      { icon: "bluesky", link: "https://bsky.app/profile/oolong.sh" },
    ],
  },
});
