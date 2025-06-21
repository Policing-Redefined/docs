---
sidebar_label: 'Ped Permits'
sidebar_position: 1
---

# Ped Permits
This section details the classes and enumerations used to represent various types of permits within the Common Data Framework, such as hunting, fishing, and weapon permits.

## Permit Class

Represents a generic permit, such as a hunting or fishing permit, with a status and an expiration date.

### `Status`

Gets or sets the current status of the permit. 
:::note
Changing this value will automatically affect the `ExpirationDate` based on the new status.
:::
```csharp
public EDocumentStatus Status
```

-   **Type:** `EDocumentStatus`
-   **See Also:** [EDocumentStatus](http://localhost:3000/docs/developer-docs/Common%20Data%20Framework/Peds/permits#edocumentstatus)

---

### `ExpirationDate`

Gets or sets the expiration date of the permit. 
:::warning
This can be `null` if the `Status` is `EDocumentStatus.None`.
:::
```csharp
public DateTime ExpirationDate
```
-   **See Also:** [EDocumentStatus](http://localhost:3000/docs/developer-docs/Common%20Data%20Framework/Peds/permits#edocumentstatus)

---

## WeaponPermit Class

Represents a specialized type of permit specifically for weapons. **It extends the base `Permit` class, adding a specific permit type**.

### `PermitType`

Gets or sets the specific type of weapon permit.

```csharp
public EWeaponPermitType PermitType
```

-   **Type:** `EWeaponPermitType`
-   **See Also:** [`EWeaponPermitType` enumeration](#eweaponpermittype-enumeration)

## Enums

### `EWeaponPermitType`

Specifies the different types of weapon permits a ped can possess.

```csharp
namespace CommonDataFramework.Modules.PedDatabase;
public enum EWeaponPermitType
{
    CcwPermit,
    FflPermit
}
```

#### Definitions

-   **`CcwPermit`**
    -   **Description:** Represents a permit for carrying a concealed weapon.
-   **`FflPermit`**
    -   **Description:** Represents a Federal Firearms License.

---
### `EDocumentStatus`

Specifies the different states a permit can be in.

```csharp
namespace CommonDataFramework.Modules;
public enum EDocumentStatus
{
    None,
    Revoked,
    Expired,
    Valid
}
```
#### Definitions
Not really much explaining that needs to be done.
