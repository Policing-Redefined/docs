import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
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
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Policing Redefined',
            logo: {
                alt: 'Policing Redefined Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial',
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
                            label: 'Getting Started',
                            to: '/docs/intro',
                        },
                        {
                            label: 'Repository',
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
                            href: 'https://x.com/docusaurus',
                        },
                        {
                            label: 'Modification Universe Homepage',
                            href: 'https://x.com/docusaurus',
                        },
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} PR Team. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.nightOwl,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
