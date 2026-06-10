---
sidebar_label: 'Backup Dispatch API'
sidebar_position: 7
---

# Backup Dispatch API
This API exists to provide **BackupAPI** support for immersion plugins.
Reason for this is that in case plugins allow players to manually set API methods to call, this does not require any PR types (parameters, ...) except the method itself.
Generally speaking, if you are a developer we strongly recommend to use the Direct API instead of this wrapper.

:::note
This API will play dispatch audio and display notifications.
:::

## Patrol Backup

## `RequestCode1Backup()`
Requests a local patrol unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestCode1Backup()
public static void RequestCode1Backup(Vector3 position)
```

## `RequestCode2Backup()`
Requests a local patrol unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestCode2Backup()
public static void RequestCode2Backup(Vector3 position)
```

## `RequestCode3Backup()`
Requests a local patrol unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestCode3Backup()
public static void RequestCode3Backup(Vector3 position)
```

## `RequestStateCode1Backup()`
Requests a state patrol unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestStateCode1Backup()
public static void RequestStateCode1Backup(Vector3 position)
```

## `RequestStateCode2Backup()`
Requests a state patrol unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestStateCode2Backup()
public static void RequestStateCode2Backup(Vector3 position)
```

## `RequestStateCode3Backup()`
Requests a state patrol unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestStateCode3Backup()
public static void RequestStateCode3Backup(Vector3 position)
```

---

## Female Patrol Backup

## `RequestFemaleCode1Backup()`
Requests a local female patrol unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestFemaleCode1Backup()
public static void RequestFemaleCode1Backup(Vector3 position)
```

## `RequestFemaleCode2Backup()`
Requests a local female patrol unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestFemaleCode2Backup()
public static void RequestFemaleCode2Backup(Vector3 position)
```

## `RequestFemaleCode3Backup()`
Requests a local female patrol unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestFemaleCode3Backup()
public static void RequestFemaleCode3Backup(Vector3 position)
```

## `RequestStateFemaleCode1Backup()`
Requests a state female patrol unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestStateFemaleCode1Backup()
public static void RequestStateFemaleCode1Backup(Vector3 position)
```

## `RequestStateFemaleCode2Backup()`
Requests a state female patrol unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestStateFemaleCode2Backup()
public static void RequestStateFemaleCode2Backup(Vector3 position)
```

## `RequestStateFemaleCode3Backup()`
Requests a state female patrol unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestStateFemaleCode3Backup()
public static void RequestStateFemaleCode3Backup(Vector3 position)
```

---

## K9 Backup

## `RequestK9Code1Backup()`
Requests a local K9 patrol unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestK9Code1Backup()
public static void RequestK9Code1Backup(Vector3 position)
```

## `RequestK9Code2Backup()`
Requests a local K9 patrol unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestK9Code2Backup()
public static void RequestK9Code2Backup(Vector3 position)
```

## `RequestK9Code3Backup()`
Requests a local K9 patrol unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestK9Code3Backup()
public static void RequestK9Code3Backup(Vector3 position)
```

## `RequestStateK9Code1Backup()`
Requests a state K9 patrol unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestStateK9Code1Backup()
public static void RequestStateK9Code1Backup(Vector3 position)
```

## `RequestStateK9Code2Backup()`
Requests a state K9 patrol unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestStateK9Code2Backup()
public static void RequestStateK9Code2Backup(Vector3 position)
```

## `RequestStateK9Code3Backup()`
Requests a state K9 patrol unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestStateK9Code3Backup()
public static void RequestStateK9Code3Backup(Vector3 position)
```

---

## Pursuit Backup

## `RequestPursuitBackup()`
Requests a patrol unit to the current pursuit. Displays a subtitle if no pursuit is active.

```cs
public static void RequestPursuitBackup()
```

## `RequestSpikeStripsBackup()`
Requests a spike strip patrol unit to the current pursuit. Displays a subtitle if no pursuit is active.

```cs
public static void RequestSpikeStripsBackup()
```

## `RequestAirPursuitBackup()`
Requests a local air unit to the current pursuit. Displays a subtitle if no pursuit is active.

```cs
public static void RequestAirPursuitBackup()
```

## `RequestNooseAirPursuitBackup()`
Requests a NOOSE air unit to the current pursuit. Displays a subtitle if no pursuit is active.

```cs
public static void RequestNooseAirPursuitBackup()
```

---

## EMS Backup

## `RequestEMSCode1Backup()`
Requests an EMS unit with response code 1 to the players position.

```cs
public static void RequestEMSCode1Backup()
public static void RequestEMSCode1Backup(Vector3 position)
```

## `RequestEMSCode2Backup()`
Requests an EMS unit with response code 2 to the players position.

```cs
public static void RequestEMSCode2Backup()
public static void RequestEMSCode2Backup(Vector3 position)
```

## `RequestEMSCode3Backup()`
Requests an EMS unit with response code 3 to the players position.

```cs
public static void RequestEMSCode3Backup()
public static void RequestEMSCode3Backup(Vector3 position)
```

---

## Fire Backup

## `RequestFireCode1Backup()`
Requests a fire department unit with response code 1 to the players position.

```cs
public static void RequestFireCode1Backup()
public static void RequestFireCode1Backup(Vector3 position)
```

## `RequestFireCode2Backup()`
Requests a fire department unit with response code 2 to the players position.

```cs
public static void RequestFireCode2Backup()
public static void RequestFireCode2Backup(Vector3 position)
```

## `RequestFireCode3Backup()`
Requests a fire department unit with response code 3 to the players position.

```cs
public static void RequestFireCode3Backup()
public static void RequestFireCode3Backup(Vector3 position)
```

---

## SWAT & NOOSE Backup

## `RequestSWATCode1Backup()`
Requests a local SWAT unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestSWATCode1Backup()
public static void RequestSWATCode1Backup(Vector3 position)
```

## `RequestSWATCode2Backup()`
Requests a local SWAT unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestSWATCode2Backup()
public static void RequestSWATCode2Backup(Vector3 position)
```

## `RequestSWATCode3Backup()`
Requests a local SWAT unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestSWATCode3Backup()
public static void RequestSWATCode3Backup(Vector3 position)
```

## `RequestNOOSECode1Backup()`
Requests a NOOSE unit with response code 1 to the players position or traffic stop.

```cs
public static void RequestNOOSECode1Backup()
public static void RequestNOOSECode1Backup(Vector3 position)
```

## `RequestNOOSECode2Backup()`
Requests a NOOSE unit with response code 2 to the players position or traffic stop.

```cs
public static void RequestNOOSECode2Backup()
public static void RequestNOOSECode2Backup(Vector3 position)
```

## `RequestNOOSECode3Backup()`
Requests a NOOSE unit with response code 3 to the players position or traffic stop.

```cs
public static void RequestNOOSECode3Backup()
public static void RequestNOOSECode3Backup(Vector3 position)
```

---

## Group Backup

## `InitiateFelonyStop()`
Initiates a felony stop for the current traffic stop. Displays a subtitle if no pullover is active.

```cs
public static void InitiateFelonyStop()
```

## `RequestPanicBackup()`
Requests panic backup units to the players position.

```cs
public static void RequestPanicBackup()
```

## `RequestGroupBackup()`
Requests group backup units to the players position.

```cs
public static void RequestGroupBackup()
```

## `RequestOfficerDownBackup()`
Requests a patrol unit and, after a short delay, an EMS unit to the players position.

```cs
public static void RequestOfficerDownBackup()
```

---

## Miscellaneous

## `RequestPoliceTransportBackup()`
Requests a police transport unit for the nearest arrested ped at response code 2.

```cs
public static void RequestPoliceTransportBackup()
```

## `RequestTowServiceBackup()`
Opens a menu and dispatches the tow unit selected by the player.

```cs
public static void RequestTowServiceBackup()
```

## `RequestCoronerBackup()`
Requests a coroner unit to the players position.

```cs
public static void RequestCoronerBackup()
```

## `RequestAnimalControlBackup()`
Requests an animal control unit to the players position.

```cs
public static void RequestAnimalControlBackup()
```

## `DismissAllBackupUnits()`
Dismisses all active backup units.

```cs
public static void DismissAllBackupUnits()
```