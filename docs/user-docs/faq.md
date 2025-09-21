# FAQ

:::warning
Please make sure you have [RageNativeUI](https://github.com/alexguirre/RAGENativeUI/releases/tag/1.9.3) and [Damage Tracker Framework](https://www.lcpdfr.com/downloads/gta5mods/scripts/42767-damage-tracker-framework/) installed.
:::

:::warning
**Known incompatible plugins**
<ul>
    <li>TacticalResponseBackup</li>
    <li>Typical Callouts</li>
    <li>Pinx Callouts</li>
    <li>HoldYourFire</li>
    <li>HighWay Callouts</li>
    <li>CompuLite, StopThePed, UltimateBackup</li>
</ul>
:::
‎
<details>
  <summary>I ported over my UB Configs and now my game is crashing on start!</summary>
  <div>
    <div>This is a commmon issue with some config sets, please see **[this video](https://www.youtube.com/watch?v=C_UBs0qdT5U)** for solutions.</div>
  </div>
</details>
---
<details>
  <summary>I can't find my weapon configuration</summary>
  <div>
    <div>The Loadouts.xml can be found at `Grand Theft Auto V/plugins/LSPDFR/PolicingRedefined`. It will look like it supports multiple loadouts, **it does not**.</div>
    <ul>
        <li>Weapon names can be found here: https://wiki.rage.mp/wiki/Weapons</li>
        <li>Weapon component names can be found here: https://wiki.rage.mp/wiki/Weapons_Components</li>
    </ul>
  </div>
</details>
---
<details>
  <summary>I switched to PR and now the flashlight animation is different?</summary>
  <div>
    <div>Stop The Ped has it's own custom flashlight animation, PR does not yet. This may change in a future update.</div>
  </div>
</details>
---
<details>
  <summary>Does CompuLite work with PR? Will it ever work with PR?</summary>
  <div>
    <div>No.</div>
  </div>
</details>
---
<details>
  <summary>How do I align Custom Prop Offsets?</summary>
  <div>
    <div>Watch **[this](https://www.youtube.com/watch?v=hIImN6f9ayM)** video made by Marcel</div>
  </div>
</details>
---
<details>
  <summary>When I go to get my gun from my car the game crashes!</summary>
  <div>
    <div>Verify that:</div>
      <ul>
        <li>The weapon name is valid</li>
        <li>Your component names are valid</li>
        <li>Your loadout weapon name isn't empty</li>
        <li>You have no empty component entries</li>
      </ul>
      <div>Example of an empty component entry:</div>
      ```
      <WeaponComponents>
        <WeaponComponent></WeaponComponent>
      </WeaponComponents>
      ```
  </div>
</details>