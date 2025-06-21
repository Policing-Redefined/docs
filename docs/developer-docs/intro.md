---
sidebar_position: 1
sidebar_label: Getting Started
---

# Getting Started *as a developer*
### Intro
**Policing Redefined** is a [LSPDFR](https://lcpdfr.com) plugin similar to popular
plugins such as **Stop The Ped**, **Ultimate Backup** by Bejoijo or **LSPDFR+**, 
**Arrest-Manager** by Albo1125. Unlike Stop The Ped and Ultimate Backup, we aim to provide a feature-rich easy to use API in order to allow you to make more immersive mods. 

In order to accomplish this mission, we have made an open source library in order to store, retrieve, and edit ped and vehicle information. We have expanded what LSPDFR natively offers with this library, and hope this library gives the players an experience where information about a ped is the same throughout **all** their plugins. This library is the [CommonDataFramework (CDF)](https://github.com/Policing-Redefined/CommonDataFramework). To learn more about it, [click here](/docs/developer-docs/cdf/what-is-it.md).

### Additionally

PolicingRedefined offers its own APIs for interaction and backup elements of this mod including but not limited to:
- Search items
- Ped impairment
- Ped mindset (resistance/mood) 
- Requesting dispatch
- And much more!

Documentation for PR specific apis will be coming soon.

### Finally

We understand having to juggle two different packages to accomplish similar goals can be confusing. This is why we have added the ability for devs to use the different APIs that CDF offers within the PolicingRedefined package. 

:::tip
While we have given you the ability, we still recommend using CDF directly instead of routing through PolicingRedefined.
::: 
