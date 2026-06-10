---
sidebar_label: 'Backup API'
sidebar_position: 6
---

# Backup API

Handles public methods for interacting with PR's backup system.

:::warning
Calling any method with a `dispatchAnim` parameter set to `true` will hold up the fiber (that the method was called on) until the animation is done.
:::

## Requesting Backup

### `RequestBackup()` at player position

Creates and dispatches the requested unit to the player's current position.
For air units refer to [RequestAirBackup](#requestairbackup) and for prisoner transport refer to [RequestPoliceTransport](#requestpolicetransport).

```csharp
public static bool RequestBackup(EBackupUnit unit, EBackupResponseCode responseCode, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestBackup()` at provided position

Creates and dispatches the requested unit to the provided destination.
For air units refer to [RequestAirBackup](#requestairbackup) and for prisoner transport refer to [RequestPoliceTransport](#requestpolicetransport).

```csharp
public static bool RequestBackup(EBackupUnit unit, EBackupResponseCode responseCode, Vector3 destination, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestTrafficStopBackup()`

Creates and dispatches the requested unit to an active traffic stop.

```csharp
public static bool RequestTrafficStopBackup(EBackupUnit unit, EBackupResponseCode responseCode, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestAirBackup()`

Creates and dispatches the requested air unit to the current pursuit.

:::note
Only available during pursuits.
:::

```csharp
public static bool RequestAirBackup(EBackupUnit unit, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestPoliceTransport()`

Creates and dispatches a prisoner transport unit to pick up the nearest arrested suspect.

```csharp
public static bool RequestPoliceTransport(EBackupResponseCode responseCode, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestPanicBackup()` at player position

Creates and dispatches panic backup units to the player's current position.

```csharp
public static bool RequestPanicBackup(bool dispatchNotif = true, bool dispatchAudio = true);
```

---

### `RequestPanicBackup()` at provided position

Creates and dispatches panic backup units to the provided destination.

```csharp
public static bool RequestPanicBackup(Vector3 destination, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestGroupBackup()` at player position

Creates and dispatches defined group backup units to the player's current position.

```csharp
public static bool RequestGroupBackup(bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestGroupBackup()` at provided position

Creates and dispatches group backup units to the provided destination.

```csharp
public static bool RequestGroupBackup(Vector3 destination, bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestSpikeStripsBackup()`

Creates and dispatches a spike strips units to intercept a pursuit vehicle.

:::note
Only available during pursuits.
:::

```csharp
public static bool RequestSpikeStripsBackup(bool dispatchNotif = true, bool dispatchAnim = true, bool dispatchAudio = true);
```

---

### `RequestTowServiceBackup()`

Opens a UI menu where the player is able to choose what tow truck type it wants.
Upon selecting the plugin will attempt to get the nearest vehicle and send the desired unit to tow it.

:::info
Will always show a dispatch notification and play a dispatch anim/audio.
:::

```csharp
public static bool RequestTowServiceBackup();
```

---

### `InitiateFelonyStop()`

Opens a UI menu where the player is able to choose in which mode the felony stop should be started.

:::note
Does not show any dispatch notification nor plays a dispatch anim/audio.
:::

```csharp
public static bool InitiateFelonyStop();
```

---

### `DismissAllBackupUnits()`

Dismisses all active and responding backup units.

```csharp
public static void DismissAllBackupUnits(bool force = false);
```

## Spawning Backup

:::important
This method only spawns the entities into the world without any handling or AI by PR.
:::

### `SpawnLocalBackup()`

Spawns a local variation of the requested unit at the specified position.

```csharp
public static bool SpawnLocalBackup(EBackupUnit unit, Vector3 position, out Vehicle unitVehicle, out List<Ped> unitPeds);
```

---

### `SpawnLocalBackup()`

Spawns a position-local variation of the requested unit at the specified spawn position.


```csharp
public static bool SpawnLocalBackup(EBackupUnit unit, Vector3 position, Vector3 spawnPosition, out Vehicle unitVehicle, out List<Ped> unitPeds);
```

---

### `SpawnLocalBackupVehicle()`

Spawns a local vehicle variation of the requested unit at the specified position.

```csharp
public static Vehicle SpawnLocalBackupVehicle(EBackupUnit unit, Vector3 position, float heading);
```

---

### `SpawnLocalBackupVehicle()`

Spawns a position-local vehicle variation of the requested unit at the specified spawn position.

```csharp
public static Vehicle SpawnLocalBackupVehicle(EBackupUnit unit, Vector3 position, Vector3 spawnPosition, float heading);
```

---

### `SpawnLocalBackupPeds()`

Spawns local ped variations of the requested unit at the specified position.
Each ped is a randomized variant.

```csharp
public static Ped[] SpawnLocalBackupPeds(EBackupUnit unit, Vector3 position, float heading, int amount, bool equipWeapons = false);
```

---

### `SpawnLocalBackupPeds()`

Spawns a position-local ped variation of the requested unit at the specified spawn position.
Each ped is a randomized variant.

```csharp
public static Ped[] SpawnLocalBackupPeds(EBackupUnit unit, Vector3 position, Vector3 spawnPosition, float heading, int amount, bool equipWeapons = false);
```

---

:::note
If you just need local models (e.g. for dimensions & other stuff) you can use these APIs.
:::

### `GetLocalBackupVehicleModels()`

Returns an array of all local vehicle models of the requested unit.

```csharp
public static Model[] GetLocalBackupVehicleModels(EBackupUnit unit, Vector3 position);
```

### `GetLocalBackupPedModels()`

Returns an array of all local ped models of the requested unit.

```csharp
public static Model[] GetLocalBackupPedModels(EBackupUnit unit, Vector3 position);
```

## Interacting with Backup
### `RequestPedSearch()`
<small>Added in v1.0.0.3</small><br/>
Attempts to initiate a ped search interaction between an officer and a suspect. Validates both entities are present, available, and in a valid state before executing the search through the EntitySearchManager.

Returns true if the search was successfully initiated; otherwise false.

:::warning
**This will pause the calling fiber until the task is completed (WaitForCompletion)**

The search will only proceed if:
- Both officer and suspect are non-null and available
- The officer is a valid backup ped
- The officer is a PolicePed
- The suspect is not a cop
- The suspect is in a stopped state
:::

```csharp
public static bool RequestPedSearch(Ped officer, Ped suspect)
```

### `IsPedPartner()`
<small>Added in v1.0.0.3</small><br/>
Returns whether the provided ped is currently a partner of the player.
```csharp
public static bool IsPedPartner(Ped ped)
```

## Enums
### `EBackupUnit`

Represents all requestable backup units.

```csharp
public enum EBackupUnit
{
    LocalPatrol,
    LocalFemalePatrol,
    StatePatrol,
    StateFemalePatrol,
    LocalSWAT,
    NooseSWAT,
    LocalK9Patrol,
    StateK9Patrol,
    LocalAir,
    NooseAir,
    PoliceTransport,
    Ambulance,
    FireDepartment,
    Coroner,
    SmallTowTruck,
    LargeTowTruck,
    FlatbedTowTruck,
    AnimalControl
}
```

#### Definitions
Pretty self-explanatory.
