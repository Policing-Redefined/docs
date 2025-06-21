---
sidebar_label: 'Ped Data'
sidebar_position: 1
---

# Ped Data

The `PedData` class represents a comprehensive data record associated with a specific `Rage.Ped`. It encapsulates various attributes, characteristics, and personal information about the ped.

## Properties

### `Holder`

:::note
This property is read-only.
:::

The `Rage.Ped` instance to which this `PedData` record belongs.

```csharp
public readonly Ped Holder
```
---

### `HasRealPed`

:::note
This property is read-only.
:::

Indicates whether this `PedData` instance is currently associated with an actual `Rage.Ped` that exists or has existed.
True if the `Holder` property is not `null`. Otherwise, false.

```csharp
public bool HasRealPed
```
---

### `DriversLicenseExpiration`

Gets or sets the expiration date of the ped's driver's license. If the ped does not possess a driver's license or it's otherwise not applicable

:::warning
This value may be null
:::

```csharp
public DateTime? DriversLicenseExpiration
```
---

### `Address`

Gets or sets the residential address associated with the ped.

```csharp
public PedAddress Address
```

-   **Type:** `CommonDataFramework.Modules.PedResidence.PedAddress`
-   **See Also:** [`PedAddress` class](/docs/api/common-data-framework/pedaddress) 

---

### `DriversLicenseState`

Gets or sets the current state of the ped's driver's license. Modifying this property also influences the `DriversLicenseExpiration` date based on the new state.

```csharp
public ELicenseState DriversLicenseState
```
---

### `Firstname`

Gets or sets the first name of the ped.

```csharp
public string Firstname
```
---

### `Lastname`

Gets or sets the last name of the ped.

```csharp
public string Lastname
```
---

### `FullName`

:::note
This property is read-only.
:::

Returns the full name of the ped, combining their first and last names.

```csharp
public string FullName
```
---

### `Birthday`

Gets or sets the birth date of the ped.

```csharp
public DateTime Birthday
```
---

### `Citations`

Gets or sets the total number of citations (e.g., traffic tickets) the ped has received.

```csharp
public int Citations
```
---

### `TimesStopped`

Gets or sets the total number of times the ped has been stopped.

```csharp
public int TimesStopped
```
---

### `Gender`

Gets or sets the gender of the ped.

```csharp
public Gender Gender
```

-   **Type:** `LSPD_First_Response.Engine.Scripting.Entities.Gender`

---

### `Wanted`

Gets or sets a boolean value indicating whether the ped is currently wanted by law enforcement.

```csharp
public bool Wanted
```
---

### `AdvisoryText`

Gets or sets any advisory text associated with this ped, which might contain important notes or warnings.

```csharp
public string AdvisoryText
```
---

### `ModelAge`

:::note
This property is read-only.
:::

Gets the age category of the ped's model.

```csharp
public PedModelAge ModelAge
```

-   **Type:** `LSPD_First_Response.Engine.Scripting.Entities.PedModelAge`

---

### `RuntimeInfo`

Gets or sets runtime-specific information associated with the ped.

```csharp
public RuntimePersonaInformation RuntimeInfo
```

-   **Type:** `LSPD_First_Response.Engine.Scripting.Entities.RuntimePersonaInformation`

---

### `WantedInfo`

:::note
This property is read-only.
:::

Gets comprehensive information regarding the ped's wanted status, including details about active warrants.

```csharp
public WantedInformation WantedInfo
```

-   **Type:** `LSPD_First_Response.Engine.Scripting.Entities.WantedInformation`

---

### `IsOnParole`

Gets or sets a boolean value indicating whether the ped is currently on parole.

```csharp
public bool IsOnParole
```
---

### `IsOnProbation`

Gets or sets a boolean value indicating whether the ped is currently on probation.

```csharp
public bool IsOnProbation
```
---

### `HuntingPermit`

:::note
This field is read-only.
:::

Represents the ped's hunting permit details.

```csharp
public readonly Permit HuntingPermit
```

-   **Type:** `CommonDataFramework.Modules.PedDatabase.Permit`
-   **See Also:** [Permit class](/docs/developer-docs/Common%20Data%20Framework/Peds/permits.md)  

---

### `FishingPermit`

:::note
This field is read-only.
:::

Represents the ped's fishing permit details.

```csharp
public readonly Permit FishingPermit
```

-   **Type:** `CommonDataFramework.Modules.PedDatabase.Permit`
-   **See Also:** [Permit class](/docs/developer-docs/Common%20Data%20Framework/Peds/permits.md) 

---

### `WeaponPermit`

:::note
This field is read-only.
:::

Represents the ped's weapon permit details.

```csharp
public readonly WeaponPermit WeaponPermit
```

-   **Type:** `CommonDataFramework.Modules.PedDatabase.WeaponPermit`
-   **See Also:** [WeaponPermit class](/docs/developer-docs/Common%20Data%20Framework/Peds/permits.md) 

## Methods

### `ToNameAndDOBString()`

Combines the full name and birthday of this ped's data into a single string.

```csharp
public string ToNameAndDOBString()
```

-   **Returns:** A string containing the ped's full name and date of birth.

--- 

### `GetPedData(this Ped ped)`

This static extension method, provides a convenient way to retrieve or initialize a `PedData` record for a specified `Rage.Ped` instance.

```csharp
public static PedData GetPedData(this Ped ped)
```
-   **Returns:** A PedData object of the ped specified

:::warning
This method returns `null` under the following conditions:

1.  If the provided `ped` does not currently exist in the game world.
2.  If the provided `ped` is not a human character (`!ped.IsHuman`).
3.  If `PedData` was requested for a non-existent ped and no previous data was stored for it in the database.

Otherwise, if `PedData` already exists for the `ped`, it will be returned from the cache. If it does not exist but the `ped` is valid and human, a new `PedData` instance will be created and returned.