import type { NavbarConfig } from "vuepress-theme-hope";

export const en: NavbarConfig = [
  { text: "Blog Home", link: "/README.md", icon: "home" },
  { text: "Project Home", link: "/home.md", icon: "home" },
  {
    text: "Guide",
    icon: "creative",
    link: "/guide/README.md",
  },
  {
    icon: "note",
    text: "v2.x",
    children: [
      {
        text: "v1.x",
        link: "https://vuepress-theme-hope.github.io",
      },
    ],
  },
];
