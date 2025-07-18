---
sidebar_label: 'On Foot Traffic Stop API'
sidebar_position: 5
---

# On Foot Traffic Stop API

Handles public methods for interacting with PR's on-foot traffic stops.

## Methods

### `GetCurrentOnFootTrafficStop();`

Gets the current on-foot traffic stop the player is on.

```csharp
public static PRHandle GetCurrentOnFootTrafficStop();
```

---

### `IsOnAnyFootTrafficStop();`

Returns whether the player is currently on an on-foot traffic stop.

```csharp
public static bool IsOnAnyFootTrafficStop();
```

---

### `IsOnFootTrafficStop(PRHandle handle);`

Returns whether the player is currently on the specified on-foot traffic stop.

```csharp
public static bool IsOnFootTrafficStop(PRHandle handle);
```

---

### `GetOnFootTrafficStopVehicle(PRHandle handle);`

Gets the main vehicle of the specified on-foot traffic stop.

```csharp
public static Vehicle GetOnFootTrafficStopVehicle(PRHandle handle);
```

---

### `GetOnFootTrafficStopSuspect(PRHandle handle);`

Gets the main suspect of the specified on-foot traffic stop.

```csharp
public static Ped GetOnFootTrafficStopSuspect(PRHandle handle);
```