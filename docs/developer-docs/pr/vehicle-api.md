---
sidebar_label: 'Vehicle API'
sidebar_position: 4
---

# Vehicle API

Handles methods regarding vehicles.

### `GetCanVehicleBeStopped(Vehicle vehicle);`

Gets whether the specified vehicle can be stopped by the player.

```csharp
public static bool GetCanVehicleBeStopped(Vehicle vehicle);
```

---

### `SetCanVehicleBeStopped(Vehicle vehicle, bool value);`

Sets whether the specified vehicle can be stopped by the player.

```csharp
public static void SetCanVehicleBeStopped(Vehicle vehicle, bool value);
```

---

### `GetHasVehicleBeenSearched(Vehicle vehicle);`

Gets whether the specified vehicle has been searched.

```csharp
public static bool GetHasVehicleBeenSearched(Vehicle vehicle);
```