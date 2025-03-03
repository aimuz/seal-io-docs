// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const variableInjector = require('./src/plugins/variable-injector')

const currentVersion = 'v0.5'
const latestRelease = 'v0.5.1'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Walrus Documentation',
  tagline: 'Walrus Documentation',
  url: 'https://seal-io.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon2.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seal-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh'],
    localeConfigs: {
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/seal-io/docs/edit/main/',
          lastVersion: 'current',
          versions: {
            current:{
              // Label for this version.
              label: currentVersion,
              banner: 'none',
            },
          },
          docLayoutComponent: "@theme/DocPage",
          /* Derived from docusaurus-theme-openapi */
          docItemComponent: "@theme/ApiItem",
          remarkPlugins: [
            [
              variableInjector, // replaces eg {{ VERSION }} to VERSION value with config strings
              {
                replacements: {
                  // Version of the current release.
                  VERSION: latestRelease,
                },
              }
            ]
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Walrus Logo',
          src: 'img/walrus_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'User Docs',
          },
          {
            to: "/category/openapi",
            label: "API Docs",
          },
          {
            // type: 'doc',
            // docId: 'cli',
            to: "/category/cli",
            label: "CLI Docs",
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SEAL`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        // options: {
        //   margin: 24,
        //   background: '#BADA55',
        //   scrollOffset: 0,
        //   container: '#zoom-container',
        //   template: '#zoom-template',
        // },
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          openapi: {
            specPath: "openapi/v1.json",
            outputDir: "docs/openapi",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "openapi.mustache", // Customize API MDX with mustache template
          }
        }
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          // exclude /docs/v*.*/* from redirect
          let excludeRegex = /^\/v(\d+(\.\d+)?)\//;
          if (!excludeRegex.test(existingPath)) {
            // Redirect from /docs/${currentVersion}/* to /docs/* to make both routes work
            return [
              existingPath.replace('/', `/${currentVersion}/`),
            ];
          }

          // Return a falsy value: no redirect created
          return undefined;
        },
      },
    ],
    'plugin-image-zoom'
  ],

  /* Allows use of @theme/ApiItem and other components */
  themes: [
    "docusaurus-theme-openapi-docs",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};

module.exports = config;
