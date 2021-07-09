/** @type {import('@docusaurus/types').DocusaurusConfig} */
const docusaurusConfig = {
  plugins: [
    "@docusaurus/theme-live-codeblock",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/whitepaper', // string
            from: '/docs/en/whitepaper', // string | string[]
          },
        ],
      },
    ],
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  title: "DataHighway Developer Hub",
  tagline: "Complete develop documentation for the DataHighway DAO.",
  customFields: {
    users: [
      {
        caption: "User1",
        image: "/img/Datahighway-Logo-big.png",
        infoLink: "https://www.datahighway.com",
        pinned: true,
      },
    ],
    baseUrlGithub: "https://github.com/DataHighway-DHX",
    chatUrlDiscord: "https://discord.gg/UuZN2tE",
  },
  url: "https://dev.datahighway.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "DataHighway-DHX", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "zh-CN", "zh-TW"],
  },
  themeConfig: {
    /**
    * disabled until fixed
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'datahighway',
    }, */
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "DataHighway Developer Hub",
      logo: {
        alt: "DataHighway Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs & Tutorials",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "docs/whitepaper",
          position: "left",
          label: "Whitepaper",
          activeBasePath: "docs/whitepaper",
        },
        {
          href: "https://github.com/DataHighway-DHX/documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "datahighway logo",
        src: "img/favicon.ico",
        href: "https://www.datahighway.com",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started/users-purpose",
            },
            {
              label: "Tutorials",
              to: "/docs/tutorials/tutorials-accounts-create-account",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/UuZN2tE",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/datahighway_dhx",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/DataHighway-DHX",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DataHighway DAO`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/DataHighway-DHX/documentation",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/DataHighway-DHX/documentation/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

module.exports = docusaurusConfig;