---
sidebar_label: 'Ped Impairment'
sidebar_position: 3
---

# Ped Impairment/Mindset

### `GetPedMood(Ped ped);`

Gets the mood of the specified ped during questioning.

```csharp
public static EPedMood GetPedMood(Ped ped);
```

---

### `IsPedDrunk(Ped ped);`

Gets whether the specified ped is drunk.

```csharp
public static bool IsPedDrunk(Ped ped);
```

---

### `GetPedBAC(Ped ped);`

Get the blood alcohol concentration of the specified ped.

```csharp
public static float GetPedBAC(Ped ped);
```

---

### `IsPedHigh(Ped ped);`

Gets whether the specified ped is high.

```csharp
public static bool IsPedHigh(Ped ped);
```

---

### `GetDrugsPedIsOn(Ped ped);`

Gets the drugs the specified ped is on.
:::info
This is enum is a flag as a ped can be on multiple drugs. You need to extract the flags from the returned value.
:::

```csharp
public static EDrugType GetDrugsPedIsOn(Ped ped);
```

---

### `SetPedMood(Ped ped, EPedMood mood);`

Sets the mood of the specified ped during questioning.

```csharp
public static void SetPedMood(Ped ped, EPedMood mood);
```

---

### `SetPedDrunk(Ped ped, EDrunkLevel drunkLevel, bool setWalkstyle = true);`

Makes the specified ped drunk.

```csharp
public static void SetPedDrunk(Ped ped, EDrunkLevel drunkLevel, bool setWalkstyle = true);
```

---

### `SetPedDrunk(Ped ped, float amountInBac, bool setWalkstyle = true);`

Makes the specified ped drunk by changing the BAC.

```csharp
public static void SetPedDrunk(Ped ped, float amountInBac, bool setWalkstyle = true);
```

---

### `SetPedHigh(Ped ped);`

Makes the specified ped high on a random drug.

```csharp
public static void SetPedHigh(Ped ped);
```

---

### `SetPedHigh(Ped ped, EDrugType drugType);`

Makes the specified ped high on specific drugs.
:::info
The enum is marked as flags and therefore the ped can be set to be high on multiple drugs.
:::
```csharp
public static void SetPedHigh(Ped ped, EDrugType drugType);
```
