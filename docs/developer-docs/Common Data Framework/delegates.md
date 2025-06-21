---
sidebar_label: 'Delegates'
sidebar_position: 5
---

# Common Data Framework Delegates

This section defines the delegate types used for events within the Common Data Framework API. These delegates specify the method signatures required for event handlers to correctly subscribe to and process event notifications.

## `OnPedDataRemovedDelegate`

The delegate for the `CDFEvents.OnPedDataRemoved` event. This signature must be matched by any method subscribing to that event.

```csharp
public delegate void OnPedDataRemovedDelegate(Ped ped, PedData pedData);
```

### Parameters

-   **`ped`**
    -   **Type:** `Rage.Ped` (from `Rage` namespace)
    -   **Description:** Represents the pedestrian or player character from which the `pedData` was associated and subsequently removed.
-   **`pedData`**
    -   **Type:** `CommonDataFramework.Modules.PedDatabase.PedData`
    -   **Description:** The specific data object that has been removed from the Common Data Framework's pedestrian database.

---

## `OnVehicleDataRemovedDelegate`

The delegate for the `CDFEvents.OnVehicleDataRemoved` event. This signature must be matched by any method subscribing to that event.

```csharp
public delegate void OnVehicleDataRemovedDelegate(Vehicle vehicle, VehicleData vehicleData);
```

### Parameters

-   **`vehicle`**
    -   **Type:** `Rage.Vehicle` (from `Rage` namespace)
    -   **Description:** Represents the vehicle from which the `vehicleData` was associated and subsequently removed.
-   **`vehicleData`**
    -   **Type:** `CommonDataFramework.Modules.VehicleDatabase.VehicleData`
    -   **Description:** The specific data object that has been removed from the Common Data Framework's vehicle database.
