---
sidebar_label: 'Installation Process'
sidebar_position: 2
---

# How to install CDF
:::note For developers
Common Data Framework is available on [Nuget](https://www.nuget.org/packages/CommonDataFramework/).
:::
- Download and install latest [LSPDFR and RagePluginHook](https://www.lcpdfr.com/downloads/gta5mods/g17media/7792-lspd-first-response/)
- Download latest [Common Data Framework](https://github.com/Policing-Redefined/CommonDataFramework/releases/)
- Extract the .zip and drag-and-drop everything into your main GTA 5 directory (except the .xml)
:::note For players
CDF does NOT do anything on itself, you must be using a plugin that has CDF as a dependency.
:::
- Reference `CommonDataFramework.dll` in your assembly
- You can also have your `.dll` etc. somewhere else but if you are running your code, then CDF __**must**__ be present in the LSPDFR directory.
:::tip
If you want to make use of intellisense, the `CommonDataFramework.xml` must be in the same directory of your referenced `.dll`.
:::