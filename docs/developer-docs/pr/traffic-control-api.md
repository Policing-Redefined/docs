---
sidebar_label: 'Traffic Control API'
sidebar_position: 8
---

# Traffic Control API

The Traffic Control API allows developers to access PolicingRedefined's internal traffic control system. For users, this is useful for intergrating with mods like Grammar Police.

### `IsActive()`
Returns true if there is currently an active traffic control.
```cs
public static bool IsActive()
```

## General Traffic Control

:::info
Each API below has two overloads:

- One overload accepts a `dispatchAudio` parameter.
- One overload does not.

When `dispatchAudio` is `true`, dispatch audio will be played when the traffic control state changes.
:::

### `Clear()`
Clears the active traffic control.

```cs
public static void Clear(bool dispatchAudio)
```

### `Slow()`
Slows traffic around the player.

```cs
public static void Slow(bool dispatchAudio)
```

### `Stop()`
Stops traffic around the player.

```cs
public static void Stop(bool dispatchAudio)
```

### `SlowAtPosition()`
Slows traffic around a position.
Position refers to the center of the traffic control area.

```cs
public static void SlowAtPosition(bool dispatchAudio, Vector3 position)
```

### `StopAtPosition()`
Stops traffic around a position.
Position refers to the center of the traffic control area.

```cs
public static void StopAtPosition(bool dispatchAudio, Vector3 position)
```

## Miscellaneous Methods

### `PlayerControl()`
Will try to open the General Menu and select the traffic control menu item.

```cs
public static void PlayerControl()
```