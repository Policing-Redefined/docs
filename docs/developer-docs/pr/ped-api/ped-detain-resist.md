---
sidebar_label: 'Ped Detainment & Resistance '
sidebar_position: 2
---
# Ped Detainment & Resistance

## Ped Detainment

### `IsPedStopped(Ped ped);`

Gets whether the specified ped is stopped by PR.

```csharp
public static bool IsPedStopped(Ped ped);
```

---

### `IsPedArrested(Ped ped);`

Gets whether the specified ped is arrested by PR.

```csharp
public static bool IsPedArrested(Ped ped);
```

---
### `GiveCitationToPed(Ped ped, Citation citation);`

Gives a citation to the specified ped.
:::note
Best suited for computer plugins. 
:::
:::warning
The `Ped` field of the [`Citation`](#) object must match the ped parameter.
:::

```csharp
public static void GiveCitationToPed(Ped ped, Citation citation);
```
---

### `SetInterceptPedAnyArrest(Ped ped, bool intercept);`

:::important
PolicingRedefined only takes over arrests that are done during pursuits by the player or by a backup ped.
Setting this to `true` will make PR take over ANY arrest that is done on this ped.
:::

```csharp
public static void SetInterceptPedAnyArrest(Ped ped, bool intercept);
```

## Ped Resistance

### `IsPedResistingRightNow(Ped ped);`

Gets whether the specified ped is executing a resistance action right now.

```csharp
public static bool IsPedResistingRightNow(Ped ped);
```

---

### `GetPedResistanceChance(Ped ped);`

Gets the probability for the specified ped to resist.

```csharp
public static int GetPedResistanceChance(Ped ped);
```

---

### `SetPedResistanceChance(Ped ped, int chance);`

Sets the probability for the specified ped to resist.

```csharp
public static void SetPedResistanceChance(Ped ped, int chance);
```

---

### `GetPedResistanceAction(Ped ped);`

Gets the resistance type of the specified ped.

```csharp
public static EResistanceAction GetPedResistanceAction(Ped ped);
```

---

### `SetPedResistanceAction(Ped ped, EResistanceAction resistanceAction);`

Sets the resistance type of the specified ped.
:::note
Returns false when the ped is executing a resistance action right now, the resistance action was set to be kept on or when the ped is [arrested](#ispedarrestedped-ped) and the requested resistance action was something other than [`EResistanceAction.None`](#eresistanceaction) and [`EResistanceAction.Uncooperative`](#eresistanceaction)
:::

```csharp
public static bool SetPedResistanceAction(Ped ped, EResistanceAction resistanceAction);
```

---

### `SetPedResistanceAction(Ped ped, EResistanceAction resistanceAction, bool keepResistanceAction);`

Sets the resistance type of the specified ped.

```csharp
public static bool SetPedResistanceAction(Ped ped, EResistanceAction resistanceAction, bool keepResistanceAction);
```

---

### `GetShouldWalkAwayBeforeResisting(Ped ped);`

Gets whether the specified ped will walk away from the officer shortly before starting the resistance action.

```csharp
public static bool GetShouldWalkAwayBeforeResisting(Ped ped);
```

---

### `SetShouldWalkAwayBeforeResisting(Ped ped, bool walkAwayFirst);`

Sets whether the specified ped will walk away from the officer shortly before starting the resistance action.

```csharp
public static void SetShouldWalkAwayBeforeResisting(Ped ped, bool walkAwayFirst);
```

---

### `GetKeepResistanceAction(Ped ped);`

Gets whether the specified ped should keep their set resistance action.
For example: When the ped's resistance action is set to [`EResistanceAction.Uncooperative`](#eresistanceaction) and the player attempts
to interact with the ped a few times, then there is a chance that the ped will change their resistance action and e.g. attack the player.
However, when `KeepResistanceAction` is set to true then the ped will not change their resistance action, no matter how often the player attempts to
interact with the uncooperative ped.

```csharp
public static bool GetKeepResistanceAction(Ped ped);
```

---

### `SetKeepResistanceAction(Ped ped, bool keepResistanceAction);`

Sets whether the specified ped should keep their set resistance action. See [`GetKeepResistanceAction`](#getkeepresistanceactionped-ped) for more info.

```csharp
public static void SetKeepResistanceAction(Ped ped, bool keepResistanceAction);
```

---

### `GetPedSurrenderChance(Ped ped);`

Gets the probability for the specified ped to surrender (put hands up) after e.g. being tazed.

```csharp
public static int GetPedSurrenderChance(Ped ped);
```

---

### `SetPedSurrenderChance(Ped ped, int chance);`

Sets the probability for the specified ped to surrender (put hands up) after e.g. being tazed.

```csharp
public static void SetPedSurrenderChance(Ped ped, int chance);
```

---

### `GetIsPedExcludedFromCustomPursuitAttributes(Ped ped);`

Returns whether the specified ped is being excluded from PR's custom pursuit attributes.

```csharp
public static bool GetIsPedExcludedFromCustomPursuitAttributes(Ped ped);
```

---

### `SetIsPedExcludedFromCustomPursuitAttributes(Ped ped, bool value);`

Sets whether the specified ped should be excluded from PR's custom pursuit attributes.

```csharp
public static void SetIsPedExcludedFromCustomPursuitAttributes(Ped ped, bool value);
```

## Enums

### `EResistanceAction`
```csharp
public enum EResistanceAction 
{
    None,
    Flee,
    Attack,
    Uncooperative
}
```
#### Definitions

-   **`None`**
    -   **Description:** The ped will not resist
-   **`Flee`**
    -   **Description:** The ped will flee
-   **`Attack`**
    -   **Description:** The ped will attack
-   **`Uncooperative`**
    -   **Description:** The ped will refuse to follow orders