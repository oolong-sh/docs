import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oolong",
  description: "Oolong docs",
  // head: [["link", { rel: "icon", href: "/oolong-logo-transparent.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/configuration/overview" },
      { text: "Showcase", link: "/showcase" },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "What is Oolong?", link: "/guide/what-is-oolong" },
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
      {
        text: "Reference",
        collapsed: false,
        items: [
          {
            text: "Configuration",
            base: "/reference/configuration",
            items: [
              { text: "Overview", link: "/overview" },
              { text: "Linker / Graph", link: "/linker-graph" },
              { text: "Cloud Sync", link: "/cloud-sync" },
              { text: "Plugins", link: "/plugins" },
            ],
          },
          {
            text: "API",
            base: "/reference/api",
            items: [{ text: "Overview", link: "/overview" }],
          },
          {
            text: "Customization",
            base: "/reference/customization",
            items: [
              { text: "Default Theme", link: "/default-theme" },
              { text: "Custom Theme", link: "/custom-theme" },
            ],
          },
        ],
      },
      // {
      //   text: "Showcase",
      //   collapsed: false,
      //   items: [
      //     { text: "Graph", link: "/showcase/graph" },
      //     { text: "Editor", link: "/showcase/editor" },
      //   ],
      // },
    ],

    editLink: {
      pattern: "https://github.com/oolong-sh/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/oolong-sh" },
      { icon: "bluesky", link: "https://bsky.app/profile/oolong.sh" },
    ],

    // logo: { src: "/oolong-logo-transparent.png", width: 24, height: 24 },
  },

  ignoreDeadLinks: [/^https?:\/\/localhost/],
});
