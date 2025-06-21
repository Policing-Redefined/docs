---
sidebar_position: 2
sidebar_label: Vehicle Bolos
---
# Vehicle BOLO

Represents a "Be On the LookOut" (BOLO) entry for a vehicle, indicating that it is subject to special attention from law enforcement.

```csharp
public class VehicleBOLO;
```
### `IsActive`
:::note
This property is read-only.
:::
Indicates whether this BOLO entry is currently active. A BOLO is active if it has not been manually deactivated and its current date/time falls between its `Issued` and `Expires` dates. 

```csharp
public bool IsActive;
```
---

### `Reason`
:::note
This property is read-only.
:::
The descriptive reason for which this BOLO was issued.

```csharp
public readonly string Reason;
```
---

### `Issued`
:::note
This property is read-only.
:::
The date and time when this BOLO was officially issued.

```csharp
public readonly DateTime Issued;
```
---

### `Expires`
:::note
This property is read-only.
:::
The date and time when this BOLO is set to expire.

```csharp
public readonly DateTime Expires;
```
---

### `IssuedBy`
:::note
This property is read-only.
:::
The agency or entity that issued this BOLO.

```csharp
public readonly string IssuedBy;
```

### Constructor

Initializes a new instance of the `VehicleBOLO` class with specified details.
```csharp
public VehicleBOLO(string reason, DateTime issued, DateTime expires, string issuedBy)
```

#### Parameters

-   **`reason`**
    -   **Description:** The reason for the BOLO.
-   **`issued`**
    -   **Description:** The date and time when the BOLO was issued.
-   **`expires`**
    -   **Description:** The date and time when the BOLO will expire.
-   **`issuedBy`**
    -   **Description:** The agency or entity that issued the BOLO.

### Method

### `SetIsActive(bool active)`

Manually sets the active state of the BOLO.

```csharp
public void SetIsActive(bool active)
```

-   **Parameters:**
    -   **`active`**
        -   **Description:** `true` to set the BOLO as active, `false` to deactivate it.

---