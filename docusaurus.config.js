import {themes as prismThemes} from 'prism-react-renderer';
const config = {
  title: 'TechBlog',
  tagline: 'My TechBlog Notes',
  favicon: 'img/TechBlogLogo.png',

  // Set the production url of your site here
  url: 'https://Tech-Blog-qz.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'baur', // Usually your GitHub org/user name.
  projectName: 'TechBlog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "kk",
    locales: ["kk", "ru"],
    localeConfigs: {
      kk: {
        label: "Қазақша",
      },
      ru: {
        label: "Русский",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        gtag: {
          trackingID: "G-20F77MXKEW",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/TechBlog-social-card.png',
      navbar: {
        title: 'TechBlog',
        logo: {
          alt: 'TechBlog',
          src: 'img/TechBlogLogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Инструкции',
          },
          {
            type: "localeDropdown",
            position: "left",
          },        ],
      },
      footer: {
        style: "dark",
        links: [],
        // copyright: `Arabic © <a href='https://t.me/ArabicLessonsChannel'>Сайтқа қатысты сұрақтар</a> 💬`,
        copyright: `TechBlog`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
