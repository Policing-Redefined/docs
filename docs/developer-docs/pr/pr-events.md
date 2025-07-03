---
sidebar_label: 'Events API'
sidebar_position: 2
---
# Policing Redefined Events API

The PolicingRedefined API provides events that developers can subscribe to in order to help their plugins become more responsive and performant.

## Delegates

### `PedDelegate`

```csharp
public delegate void PedDelegate(Ped ped);
```

---

### `PedArrestedDelegate`

```csharp
public delegate void PedArrestedDelegate(Ped ped, Ped officer, bool frontCuffs);
```

---

### `TrafficStopDelegate`

```csharp
public delegate void TrafficStopDelegate(Ped ped, Vehicle vehicle, bool onFootTrafficStop);
```

---

### `VehicleStopDelegate`

```csharp
public delegate void VehicleStopDelegate(Vehicle vehicle);
```

---

### `PedInfoDelegate`

```csharp
public delegate void PedInfoDelegate(Ped ped);
```

---

### `VehicleInfoDelegate`

```csharp
public delegate void VehicleInfoDelegate(Vehicle vehicle, bool fromVin);
```

---

### `IdentificationGivenDelegate`

```csharp
public delegate void IdentificationGivenDelegate(Ped ped, EGivenIdentification givenIdentification);
```

---

## Events

### `OnPedSurrendered`

Invoked when a ped surrenders after e.g. being tazed.

```csharp
public static event PedDelegate OnPedSurrendered;
```

---

### `OnPedPatDown`

Invoked when a ped was pat down.

:::info Important
This is not invoked when a dead ped was searched.
:::

```csharp
public static event PedDelegate OnPedPatDown;
```

---

### `OnDeadPedSearched`

Invoked when a peds dead body is searched

```csharp
public static event PedDelegate OnDeadPedSearched;
```

---

### `OnPedArrested`

Invoked when a ped was arrested through Policing Redefined's system.

:::info Important
This is not invoked when a ped was arrested through LSPDFR.
:::

```csharp
public static event PedArrestedDelegate OnPedArrested;
```

---

### `OnPedStopped`

Invoked when a ped was stopped.

```csharp
public static event PedDelegate OnPedStopped;
```

---

### `OnPedReleased`

Invoked when a stopped ped was released.

:::info Important
The released ped might not exist in the game world anymore.
:::

```csharp
public static event PedDelegate OnPedReleased;
```

---

### `OnPedAskedToExitVehicle`

Invoked when a ped was asked to exit the vehicle on a traffic stop.

:::info Important
 This can also be a passenger, it doesn't need to be the driver.
:::

```csharp
public static event TrafficStopDelegate OnPedAskedToExitVehicle;
```

---

### `OnDriverAskedToTurnOffEngine`

Invoked when the driver was asked to turn off the engine on a traffic stop.

```csharp
public static event TrafficStopDelegate OnDriverAskedToTurnOffEngine;
```

---

### `OnVehicleStopped`

Invoked when a vehicle was stopped.

See also: [`VehicleAPI.SetCanVehicleBeStopped`](#)

```csharp
public static event VehicleStopDelegate OnVehicleStopped;
```

---

### `OnIdentificationGiven`

Invoked when ped gives the player an ID or driver's license.

```csharp
public static event IdentificationGivenDelegate OnIdentificationGiven;
```

---

### `OnDriverIdentificationGiven`

Invoked when driver of stopped vehicle gives the player an ID or driver's license.

```csharp
public static event IdentificationGivenDelegate OnDriverIdentificationGiven;
```

---

### `OnOccupantIdentificationGiven`

Invoked when passenger of stopped vehicle gives the player an ID or driver's license.

```csharp
public static event IdentificationGivenDelegate OnOccupantIdentificationGiven;
```

---

### `OnRequestPedCheck`

Invoked when the player requests dispatch to run a peds info

```csharp
public static event PedInfoDelegate OnRequestPedCheck;
```

---

### `OnPedRanThroughDispatch`

Invoked when dispatch responds to the players request with info

```csharp
public static event PedInfoDelegate OnPedRanThroughDispatch;
```

---

### `OnRequestVehicleCheck`

Invoked when the player requests dispatch to run a vehicles info

```csharp
public static event VehicleInfoDelegate OnRequestVehicleCheck;
```

---

### `OnVehicleRanThroughDispatch`

Invoked when dispatch responds to the players request with info

```csharp
public static event VehicleInfoDelegate OnVehicleRanThroughDispatch;
```

---

## Enums

### `EGivenIdentification`

Represents the type of identification given by a ped.

See also: [`IdentificationGivenDelegate`](#)

```csharp
public enum EGivenIdentification
{
    ID,
    DriversLicense
}
```

#### Definitions

-   **`ID`**
    -   **Description:** The ped gave an ID card.
-   **`DriversLicense`**
    -   **Description:** The ped gave a driver's license.