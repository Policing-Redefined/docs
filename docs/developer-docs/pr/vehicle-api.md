---
sidebar_label: 'Vehicle API'
sidebar_position: 4
---

# Vehicle API

Handles methods regarding vehicles.

## Traffic Stop Methods

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

## Vehicle Inventory Methods
:::note
The methods below are found in the SearchItemAPI class.
:::

```csharp
public static bool GetHasVehicleBeenSearched(Vehicle vehicle);
```

### `AddCustomVehicleSearchItem(SearchItem item);`
Adds a custom search item to the vehicle specified in the provided item.

```csharp
public static void AddCustomVehicleSearchItem(SearchItem item);
```

---

### `OverwriteVehicleSearchItems(Vehicle vehicle, params SearchItem[] items);`

Overwrites the search items of the specified vehicle.

```csharp
public static void OverwriteVehicleSearchItems(Vehicle vehicle, params SearchItem[] items);
```

---

### `GetVehicleSearchItems(Vehicle vehicle);`

Gets the search items of the specified vehicle.

```csharp
public static List<SearchItem> GetVehicleSearchItems(Vehicle vehicle);
```

---

### `ClearVehicleSearchItems(Vehicle vehicle);`

Clears the search items of the specified vehicle.

```csharp
public static void ClearVehicleSearchItems(Vehicle vehicle);
```