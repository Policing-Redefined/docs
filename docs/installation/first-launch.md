---
sidebar_label: 'First launch'
sidebar_position: 2
---

# First launch

As mentioned previously, launching PR for the first time will create the missing `.ini` settings
that we will get to in a bit.

### Switching from Ultimate Backup

If you have UB configuration `.xml` files then there's a good message: You can use them with
PR! All you need to do is take your `DefaultRegions.xml`, `CustomRegions.xml` and `SpecialUnits.xml`
and **replace** the default files in the `Backup/` directory of PR. When launching PR it will try
it's best to convert all your configurations into PR format (only guaranteed when you don't 
already have malformed UB configs of course...).

Unfortunately, all other settings of STP/UB are **not supported** by PR due to compatibility
issues and will require you to set them up yourself. To compensate this PR natively provides
extremely in-depth and advanced search items, questioning, ..., configs!

### Changing .ini settings

Once you ran LSPDFR with PR for the first time the `Settings/` folder should have been populated
so you can start tweaking those. Whenever you make a change to the `.ini` or `.xml` settings
you **do not need** to reload LSPDFR, a quick off-on-duty switch (via RPH console `ForceDuty` command)
will reload your PR settings, saving a lot of time!

Each `.ini` setting is accompanied by a comment explaining what the setting changes and what
kind of value it expects.