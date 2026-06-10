---
sidebar_label: 'Info Dispatch API'
sidebar_position: 9
---

# Info Dispatch API
This API exists to provide ped and vehicle dispatch check support for immersion plugins.
Reason for this is that in case plugins allow players to manually set API methods to call, PR resolves the nearest ped or vehicle automatically.
Generally speaking, if you are a developer we strongly recommend to use the Direct API instead of this wrapper.

:::note
This API will play dispatch audio and display notifications.
:::

## `RunNearestPedThroughDispatch()`
Runs the nearest ped the player is facing through a dispatch check, if one is found and has been identified. Does nothing if a dispatch check is already running.

```cs
public static void RunNearestPedThroughDispatch()
```

## `RunNearestVehiclePlateThroughDispatch()`
Runs the **license plate** of the nearest vehicle the player is facing through a dispatch check. The search radius is increased when the player is in a vehicle. Does nothing if a dispatch check is already running.

```cs
public static void RunNearestVehiclePlateThroughDispatch()
```

## `RunNearestVehicleVINThroughDispatch()`
Runs the **VIN** of the nearest vehicle the player is facing through a dispatch check. Does nothing if a dispatch check is already running.

:::warning
The player must be **on foot** to use a VIN check. The method will abort if called while the player is in a vehicle.
:::

```cs
public static void RunNearestVehicleVINThroughDispatch()
```