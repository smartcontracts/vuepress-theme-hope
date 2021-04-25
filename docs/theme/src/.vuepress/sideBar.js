const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = {
  en: sidebarConfig({
    "/guide/": [
      {
        title: "Get Started",
        icon: "creative",
        prefix: "get-started/",
        collapsable: false,
        children: ["intro", "install", "markdown"],
      },
      {
        title: "Interface",
        icon: "skin",
        prefix: "interface/",
        collapsable: false,
        children: ["darkmode", "theme-color", "icon", "others"],
      },
      {
        title: "Layout",
        icon: "layout",
        prefix: "layout/",
        collapsable: false,
        children: [
          "navbar",
          "sidebar",
          {
            title: "Page",
            icon: "page",
            collapsable: false,
            children: ["page", "breadcrumb", "footer"],
          },
          "home",
          "slides",
        ],
      },
      {
        title: "Markdown enhance",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "intro",
          "components",
          "align",
          "sup-sub",
          "footnote",
          "mark",
          "tasklist",
          "tex",
          "flowchart",
          "mermaid",
          "demo",
          "presentation",
          "external",
        ],
      },
      {
        title: "Features",
        icon: "discover",
        prefix: "feature/",
        collapsable: false,
        children: [
          "page-info",
          "comment",
          "copy-code",
          "photo-swipe",
          "copyright",
          "git",
          "encrypt",
          "pwa",
          "feed",
          "seo",
          "sitemap",
          "typescript",
        ],
      },
      {
        title: "Blog",
        icon: "layout",
        prefix: "blog/",
        collapsable: false,
        children: ["intro", "article", "category-and-tags", "timeline", "home"],
      },
      "eject",
    ],

    "/config/": [
      {
        title: "ThemeConfig",
        icon: "config",
        prefix: "theme/",
        collapsable: false,
        children: ["", "default", "feature", "plugin", "apperance"],
      },
      "page",
      "stylus",
      "i18n",
      {
        title: "Plugins",
        icon: "plugin",
        prefix: "plugin/",
        collapsable: false,
        children: ["", "container", "copyright"],
      },
    ],

    "/basic/": [
      {
        title: "Markdown",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "",
          "demo",
          {
            title: "Emoji",
            icon: "emoji",
            path: "emoji/",
            prefix: "emoji/",
            collapsable: false,
            children: ["people", "nature", "object", "place", "symbol"],
          },
        ],
      },
      {
        title: "VuePress",
        icon: "vue",
        prefix: "vuepress/",
        collapsable: false,
        children: [
          "",
          "file",
          "markdown",
          "plugin",
          "theme",
          "command",
          "case",
        ],
      },
    ],

    "/": [
      "",
      {
        title: "Guide",
        icon: "creative",
        prefix: "guide/",
        collapsable: false,
        children: [
          "get-started/",
          "interface/",
          "layout/",
          "markdown/",
          "feature/",
          "blog/",
          "eject",
        ],
      },
      {
        title: "Config",
        icon: "config",
        prefix: "config/",
        collapsable: false,
        children: ["", "theme/", "page", "stylus", "i18n", "plugin/"],
      },
      {
        title: "Basic",
        icon: "module",
        prefix: "basic/",
        collapsable: false,
        children: ["tutorial", "markdown/", "vuepress/"],
      },
      "FAQ/",
      "demo/",
    ],
  }),

  zh: sidebarConfig({
    "/zh/guide/": [
      {
        title: "快速上手",
        icon: "creative",
        prefix: "get-started/",
        collapsable: false,
        children: ["intro", "install", "markdown"],
      },
      {
        title: "界面",
        icon: "skin",
        prefix: "interface/",
        collapsable: false,
        children: ["darkmode", "theme-color", "icon", "others"],
      },
      {
        title: "布局",
        icon: "layout",
        prefix: "layout/",
        collapsable: false,
        children: [
          "navbar",
          "sidebar",
          {
            title: "页面",
            icon: "page",
            collapsable: false,
            children: ["page", "breadcrumb", "footer"],
          },
          "home",
          "slides",
        ],
      },
      {
        title: "Markdown 增强",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "intro",
          "components",
          "align",
          "sup-sub",
          "footnote",
          "mark",
          "tasklist",
          "tex",
          "flowchart",
          "mermaid",
          "demo",
          "presentation",
          "external",
        ],
      },
      {
        title: "功能",
        icon: "discover",
        prefix: "feature/",
        collapsable: false,
        children: [
          "page-info",
          "comment",
          "copy-code",
          "photo-swipe",
          "copyright",
          "git",
          "encrypt",
          "pwa",
          "feed",
          "seo",
          "sitemap",
          "typescript",
        ],
      },
      {
        title: "博客",
        icon: "layout",
        prefix: "blog/",
        collapsable: false,
        children: ["intro", "article", "category-and-tags", "timeline", "home"],
      },
      "eject",
    ],

    "/zh/config/": [
      {
        title: "主题配置",
        icon: "config",
        prefix: "theme/",
        collapsable: false,
        children: ["", "default", "feature", "plugin", "apperance"],
      },
      "page",
      "stylus",
      "i18n",
      {
        title: "插件配置",
        icon: "plugin",
        prefix: "plugin/",
        collapsable: false,
        children: ["", "container", "copyright"],
      },
    ],

    "/zh/basic/": [
      {
        title: "Markdown",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "",
          "demo",
          {
            title: "Emoji",
            icon: "emoji",
            path: "emoji/",
            prefix: "emoji/",
            collapsable: false,
            children: ["people", "nature", "object", "place", "symbol"],
          },
        ],
      },
      {
        title: "VuePress",
        icon: "vue",
        prefix: "vuepress/",
        collapsable: false,
        children: [
          "",
          "file",
          "markdown",
          "plugin",
          "theme",
          "command",
          "case",
        ],
      },
    ],

    "/zh/": [
      "",
      {
        title: "指南",
        icon: "creative",
        prefix: "guide/",
        collapsable: false,
        children: [
          "get-started/",
          "interface/",
          "layout/",
          "markdown/",
          "feature/",
          "blog/",
          "eject",
        ],
      },
      {
        title: "配置",
        icon: "config",
        prefix: "config/",
        collapsable: false,
        children: ["", "theme/", "page", "stylus", "i18n", "plugin/"],
      },
      {
        title: "基础",
        icon: "module",
        prefix: "basic/",
        collapsable: false,
        children: ["tutorial", "markdown/", "vuepress/"],
      },
      "FAQ/",
      "demo/",
    ],
  }),
};
