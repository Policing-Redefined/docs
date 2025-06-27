---
sidebar_position: 1
sidebar_label: Vehicle Data and Documents
title: Vehicle Data and Related Types
---

# Vehicle Data and Documents

This document provides comprehensive documentation for the `VehicleData` class and all its associated public types, including enums and vehicle document types such as `VehicleIdentificationNumber`, `VehicleRegistration`, and `VehicleInsurance`.

---

## Vehicle Data

The `VehicleData` class represents a detailed record of a `Rage.Vehicle` within the Common Data Framework. It stores information about the vehicle's stolen status, owner, identification number, registration, insurance, and active BOLO (Be On the LookOut) entries.

```csharp
public class VehicleData;
```

### `Holder`
:::note
 This property is read-only.
 :::
The `Rage.Vehicle` instance to which this `VehicleData` record belongs.

```csharp
public readonly Vehicle Holder;
```

-   **Type:** `Rage.Vehicle`

---

### `IsStolen`
:::note
If the `Holder` vehicle no longer exists, it returns and sets the last cached stolen state.
:::
:::warning
  Changing this property might also influence the `Owner` and `OwnerType`.
  :::
Gets or sets a value indicating whether the vehicle is currently stolen. This property mirrors `Rage.Vehicle.IsStolen` when the vehicle exists.

```csharp
public bool IsStolen;
```
---

### `HasAnyBOLOs`
:::note
 This property is read-only.
 :::

Indicates whether this vehicle has any active `VehicleBOLO` entries associated with it.

```csharp
public bool HasAnyBOLOs;
```
-   **See Also:** [GetAllBOLOs()](/docs/developer-docs/cdf/vehicles/vehicle-bolo.md)

---

### `Owner`

Gets the `PedData` record representing the owner of this vehicle.

:::caution Important
Before accessing the `PedData.Holder` property of the `Owner` (e.g., `Owner.Holder`), ensure to check `Owner.HasRealPed`. This is crucial because the `Owner` `PedData` might not correspond to an actual in-game `Rage.Ped` (e.g., for government, stolen, or random ped owners).
:::
:::note
 This property is read-only.
 :::
 :::tip
If you require a visual representation like a ped mugshot (e.g., for a computer plugin), it's recommended to generate one from a random ped in the world if `HasRealPed` is false for the `Owner`.
:::
```csharp
public PedData Owner;
```

-   **Type:** `PedData`
-   **See Also:** [PedData class](/docs/developer-docs/cdf/peds/ped-data.md)

---

### `OwnerType`
:::note
 This property is read-only.
:::
Gets the `EVehicleOwnerType` of the vehicle's owner. This indicates how the owner was determined (e.g., Driver, Government, Random Ped).

```csharp
public EVehicleOwnerType OwnerType;
```

-   **Type:** `EVehicleOwnerType`
-   **See Also:** [EVehicleOwnerType enumeration](#evehicleownertype-enumeration)

---

### `Vin`
:::note
 This property is read-only.
 :::
Gets the `VehicleIdentificationNumber` (VIN) details for this vehicle.

```csharp
public readonly VehicleIdentificationNumber Vin;
```

-   **Type:** `VehicleIdentificationNumber`
-   **See Also:** [VehicleIdentificationNumber class](#vehicleidentificationnumber-class)

---

### `Registration`
:::note
 This property is read-only.
 :::
Gets the `VehicleRegistration` document for this vehicle.

```csharp
public readonly VehicleRegistration Registration;
```

-   **Type:** `VehicleRegistration`
-   **See Also:** [VehicleRegistration class](#vehicleregistration-class)

---

### `Insurance`
:::note
 This property is read-only.
 :::
Gets the `VehicleInsurance` document for this vehicle. 

```csharp
public readonly VehicleInsurance Insurance;
```

-   **Type:** `VehicleInsurance`
-   **See Also:** [VehicleInsurance class](#vehicleinsurance-class)

### Methods
### `GetVehicleData(this Vehicle vehicle)`
:::note
This method is technically under `VehicleDataController`. Not `VehicleData`
:::
This static extension method allows you to retrieve or initialize a `VehicleData` record for a specified `Rage.Vehicle` instance.

```csharp
public static VehicleData GetVehicleData(this Vehicle vehicle)
```

#### Parameters

-   **`vehicle`**
    -   **Type:** `Rage.Vehicle`
    -   **Description:** The specific vehicle for which to retrieve or create the `VehicleData`.

#### Returns

-   **Type:** `CommonDataFramework.Modules.VehicleDatabase.VehicleData`
-   **Description:** An instance of `VehicleData` containing the relevant information for the provided `vehicle`.
:::warning
This method returns null if the provided `vehicle` does not currently exist in the game world **and** no previous `VehicleData` was stored for it.
:::
---

### `GetAllBOLOs()`

Returns an array of all active `VehicleBOLO` entries currently associated with this vehicle.

```csharp
public VehicleBOLO[] GetAllBOLOs();
```

-   **Returns:** An array of `VehicleBOLO` objects.
-   **See Also:** [VehicleBOLO class](/docs/developer-docs/cdf/vehicles/vehicle-bolo.md)

---

### `AddBOLO(VehicleBOLO bolo)`

Adds a new `VehicleBOLO` entry to this vehicle's record.

```csharp
public void AddBOLO(VehicleBOLO bolo);
```

-   **Parameters:**
    -   **`bolo`**
        -   **Type:** `VehicleBOLO`
        -   **See Also:** [VehicleBOLO class](/docs/developer-docs/cdf/vehicles/vehicle-bolo.md)
        -   **Description:** The BOLO entry to add. 

:::warning
If bolo is null, no bolo will be added.
:::
---

### `RemoveBOLO(VehicleBOLO bolo)`

Removes an existing `VehicleBOLO` entry from this vehicle's record.

```csharp
public void RemoveBOLO(VehicleBOLO bolo)
```

-   **Parameters:**
    -   **`bolo`**
        -   **Type:** `VehicleBOLO`
        -   **See Also:** [VehicleBOLO class](/docs/developer-docs/cdf/vehicles/vehicle-bolo.md)
        -   **Description:** The BOLO entry to remove.
:::warning
 If bolo is null or no BOLOs exist, no action is performed.
 :::

---

### `TrySetOwner(EVehicleOwnerType ownerType)`

Attempts to set the vehicle's owner based on a specified `EVehicleOwnerType`. This method will handle the logic for assigning an appropriate `PedData` instance based on the chosen type (e.g., finding the driver, a passenger, or generating a random ped).

```csharp
public bool TrySetOwner(EVehicleOwnerType ownerType);
```

-   **Parameters:**
    -   **`ownerType`**
        -   **Type:** `EVehicleOwnerType`
        -   **See Also** [EVehicleOwnerType](#evehicleownertype-enumeration)
        -   **Description:** The desired type of owner to set for the vehicle.
:::note
if the vehicle does not exist or the owner type is incompatible with the vehicle's current state, this method will return false
:::

---

### `TrySetOwner(PedData pedData)`

Attempts to manually set the vehicle's owner to a specific `PedData` record. This will set the `OwnerType` to `EVehicleOwnerType.Manual`.

```csharp
public bool TrySetOwner(PedData pedData);
```

-   **Parameters:**
    -   **`pedData`**
        -   **Type:** `PedData`
        -   **See Also:** [PedData Class](/docs/developer-docs/cdf/peds/ped-data.md)
        -   **Description:** The `PedData` record representing the desired manual owner.
:::note
This method returns false if `pedData` is null.
:::
---

## EVehicleOwnerType Enum

Defines the different types of drivers that a vehicle can have within the Common Data Framework.

```csharp
public enum EVehicleOwnerType
{
    Driver,
    Passenger,
    FamilyMember,
    RandomPed,
    Government,
    Manual
}
```

### Definitions

-   **`Driver`**
    -   **Description:** The current driver of the vehicle is considered its owner.
-   **`Passenger`**
    -   **Description:** A passenger in the vehicle is considered its owner.
-   **`FamilyMember`**
    -   **Description:** The driver is a family member of the owner. A passenger might also be a family member.
-   **`RandomPed`**
    -   **Description:** The driver is a randomly generated pedestrian. This type is also used when the vehicle is marked as stolen.
-   **`Government`**
    -   **Description:** The vehicle is owned by a government entity (e.g., emergency vehicles). 
    :::note
    In this case, `VehicleData.Owner` will not have a valid `Rage.Ped` (i.e., `PedData.HasRealPed` will be `false`).
    :::
-   **`Manual`**
    -   **Description:** The vehicle's owner (`PedData`) has been explicitly set manually by code.

---

## EVinStatus Enum

Specifies the possible states for a vehicle's identification number (VIN).

```csharp
public enum EVinStatus
{
    Valid,
    Scratched
}
```

### Definitions

-   **`Valid`**
    -   **Description:** The VIN is clear and legible.
-   **`Scratched`**
    -   **Description:** The VIN has been tampered with or is unreadable.

---

## Vehicle Identification Number

Represents the Vehicle Identification Number (VIN) of a `Rage.Vehicle`.

```csharp
public class VehicleIdentificationNumber
```
### `Number`

Gets the 17-character VIN string.
:::note
This property is read-only.
:::
:::info Important
Before displaying the VIN, you might want to check its `Status` property, as it could be `EVinStatus.Scratched` if your application accounts for such scenarios.
:::

```csharp
public string Number;
```
---

### `Status`

Gets or sets the current status of the VIN.

```csharp
public EVinStatus Status;
```

-   **Type:** `EVinStatus`
-   **See Also:** [EVinStatus](#evinstatus-enumeration)

### Method

### `ToString()`

Returns the 17-character VIN string representation of this object.

```csharp
public override string ToString();
```

-   **Returns:** The `Number` property of the VIN.

---

## Vehicle Documents

Provides a common base for all vehicle-related documents (like registration and insurance). It defines shared properties such as `Status` and `ExpirationDate`.
:::warning
This class is abstract, meaning you cannot make an instance of VehicleDocument
:::

```csharp
public abstract class VehicleDocument;
```
### `Status`

:::note
Changing this value will automatically update the `ExpirationDate` based on the new status.
:::
Gets or sets the status of the vehicle document. 
```csharp
public EDocumentStatus Status;
```

-   **Type:** `EDocumentStatus`
-   **See Also:** [EDocumentStatus enum](/docs/developer-docs/cdf/peds/permits.md#edocumentstatus)

---

### `ExpirationDate`
:::warning
This can be null if the `Status` is `EDocumentStatus.None`.
:::
Gets or sets the expiration date of the vehicle document. 

```csharp
public DateTime ExpirationDate;
```
-   **See Also:** [EDocumentStatus enum](/docs/developer-docs/cdf/peds/permits.md#edocumentstatus)
---

## Vehicle Registration

Represents the registration document of a `Rage.Vehicle`. It inherits from `VehicleDocument`.

```csharp
public class VehicleRegistration : VehicleDocument;
```

---

## Vehicle Insurance 

Represents the insurance document of a `Rage.Vehicle`. It inherits from `VehicleDocument`.

```csharp
public class VehicleInsurance : VehicleDocument
```
----
:::note
All properties mentioned in [VehicleDocument](#vehicle-documents) are availble in `VehicleRegistration` and `VehicleInsurance`.