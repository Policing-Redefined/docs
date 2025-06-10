---
sidebar_label: 'How to update'
sidebar_position: 3
---

# How to update

We all know how annoying updating LSPDFR plugins can be but to your luck PR tries to make
it a bit more convenient!

Since `.ini` settings are auto-generated your current settings are left untouched during 
a **drag-and-drop update**. If a setting changed or was added in a new update, PR will automatically
generate the missing setting with its default value and description! No need to manually look
through `.ini` files anymore and try to figure out whether something changed.\
*If you are a developer and
want to implement something similar for your plugin, check out this
[IniReflector](https://github.com/Sprayxe/IniReflector) created by one of our devs.*

### Important Note

As of writing this, PR doesn't currently provide the same feature for `.xml` settings, so you
will have to exclude those from drag-and-drop updating and manually update them. The changelog
will always state what was changed and how to update your files. But don't worry: we are planning
to also support auto-updating those too in the future! ;)