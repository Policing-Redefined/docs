---
sidebar_label: 'Ped Death'
sidebar_position: 4
---

# Ped Death

:::note
All methods found in this section are in the PedAPI class.
:::

### `GetPedCauseOfDeath(Ped ped, out bool requiresAutopsy);`

Sets a custom cause of death for a ped that will be displayed by coroners.

```csharp
public static string GetPedCauseOfDeath(Ped ped, out bool requiresAutopsy);
```

---

### `SetPedCauseOfDeath(Ped ped, string cause, bool requiresAutopsy = false);`

Sets a custom cause of death for a ped that will be displayed by coroners.

```csharp
public static void SetPedCauseOfDeath(Ped ped, string cause, bool requiresAutopsy = false);
```