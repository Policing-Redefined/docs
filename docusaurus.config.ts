import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Policing Redefined',
    tagline: 'The new era of LSPDFR is here.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://policing-redefined.netlify.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        algolia: {
            appId: "KVH6AYDO64",
            apiKey: "fc884fee2940fd39d3dc5d140df3fa9c",
            indexName: "policing-redefined",
            contextualSearch: true,
            searchPagePath: 'false'
        },

        // Replace with your project's social card
        image: 'img/PRBanner.png',
        navbar: {
            title: 'Policing Redefined',
            logo: {
                alt: 'Policing Redefined Logo',
                src: 'img/PolicingRedefined.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'userGuideSidebar',
                    position: 'left',
                    label: 'User Guide',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'developerGuideSidebar',
                    position: 'left',
                    label: 'Developer Guide',
                },
                {
                    type: 'doc',
                    docId: 'user-docs/faq',
                    position: 'left',
                    label: 'FAQ',
                }
            ],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,

        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'User Guide',
                            to: '/docs/user-docs/intro',
                        },
                        {
                            label: 'Developer Guide',
                            to: '/docs/developer-docs/intro',
                        },
                        {
                            label: 'Docs Repository',
                            to: 'https://github.com/Policing-Redefined/docs'
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/',
                        },
                        {
                            label: 'LCPDFR Homepage',
                            href: 'https://lcpdfr.com/',
                        },
                        {
                            label: 'Modification Universe Homepage',
                            href: 'https://modification-universe.com/',
                        },
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} PR Team. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.nightOwl,
            additionalLanguages: ['csharp'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
