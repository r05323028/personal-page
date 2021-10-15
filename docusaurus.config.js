const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Sean Chang",
  tagline: "Data Scientist @Taiwan",
  url: "https://r05323028.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: 'img/favicon.ico',
  organizationName: "r05323028", // Usually your GitHub org/user name.
  projectName: "r05323028.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Sean Chang",
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'Python/package_management',
        //   position: 'left',
        //   label: '技術文章',
        // },
        { to: "/blog", label: "部落格", position: "left" },
        {
          href: "https://github.com/r05323028",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Blog',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //   ],
        // },
        {
          title: "社群",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/sean50301/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/r05323028/",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "部落格",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/r05323028",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sean Chang, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://r05323028.github.io",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
