---
sidebar_label: 'Ped Inventory'
sidebar_position: 1
---

# Ped Inventory

Search items in PolicingRedefined work differently than other plugins.
Normal day items such as a phone, wallet, earbuds, etc. are considered a normal SearchItem.
However, we make special exceptions to two (technically three) types of items, weapons/firearms
and drugs. In PR, weapons/firearms and drugs are subclasses of the `SearchItem` class.
In this section, we will explain how to use these different classes and the methods we provide.

## Search Item

### `Chance`

The probability of the search item being present on a ped or in a vehicle.

```csharp
public EItemChance Chance;
```

---

### `Location`

The location of the search item.

```csharp
public EItemLocation Location;
```

---

### `Value`

The text of the search item.

```csharp
[XmlText]
public string Value;
```

### `SearchItem(string item, Ped foundOn, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public SearchItem(string item, Ped foundOn, EItemChance chance = EItemChance.Normal);
```

---

### `SearchItem(string item, EItemLocation itemLocation, Vehicle foundIn, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public SearchItem(string item, EItemLocation itemLocation, Vehicle foundIn, EItemChance chance = EItemChance.Normal);
```
## Drug Item
Represents a type of drug a ped might have in their vehicle or on their person.
:::important
This class extends the base `SearchItem` class. Thus, all properties/methods found in the base class are applicable here.
:::
### `DrugType`

The type of the drugs that the item represents.

```csharp
[XmlAttribute("DrugType")]
public EDrugType DrugType;
```
---
### `DrugItem(string item, Ped foundOn, EDrugType drugType, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public DrugItem(string item, Ped foundOn, EDrugType drugType, EItemChance chance = EItemChance.Normal);
```

---

### `DrugItem(string item, EItemLocation itemLocation, Vehicle foundIn, EDrugType drugType, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public DrugItem(string item, EItemLocation itemLocation, Vehicle foundIn, EDrugType drugType, EItemChance chance = EItemChance.Normal);
```

## Non Weapon Wheel Inventory Methods
:::important
The methods below are found in the `SearchItemsAPI` class unless otherwise specified.
:::

### `AddCustomPedSearchItem(SearchItem item);`

Adds a custom search item to the ped specified in the provided item.

```csharp
public static void AddCustomPedSearchItem(SearchItem item);
```

---

### `OverwritePedSearchItems(Ped ped, params SearchItem[] items);`

Overwrites the search items of the specified ped.

```csharp
public static void OverwritePedSearchItems(Ped ped, params SearchItem[] items);
```

---

### `GetPedSearchItems(Ped ped);`

Gets the search items of the specified ped.

```csharp
public static List<SearchItem> GetPedSearchItems(Ped ped);
```

---

### `ClearPedSearchItems(Ped ped);`

Clears the search items of the specified ped.

```csharp
public static void ClearPedSearchItems(Ped ped);
```
---

### `GetPedHasBeenPatDown(Ped ped);`

Gets whether the specified ped has been searched.
:::important
This is also true when the ped is dead and was then searched (in contrast to [EventsAPI pat down event](/docs/developer-docs/pr/pr-events.md#onpedpatdown)).
:::
:::note
This method is found in the PedAPI class.
:::

```csharp
public static bool GetPedHasBeenPatDown(Ped ped);
```
## Weapon Item
Represents a weapon/firearm. Most likely can be added to the GTA Weapon Wheel.
:::important
This class extends the base `SearchItem` class. Thus, all properties/methods found in the base class are applicable here.
:::
### `WeaponModelId`

The GTA weapon model id of this firearm item.

:::warning
This will default to `WEAPON_KNIFE` if required (e.g. accessing `WeaponModelHash`).
:::

```csharp
public string WeaponModelId;
```

---

### `IsVisible`

Whether the firearm is being carried open.

```csharp
public bool IsVisible;
```
---

### `IsStolen`

Whether the firearm is stolen.

```csharp
public bool IsStolen;
```
---

### `WeaponModelHash`

The weapon hash associated with this weapon item.

```csharp
public uint WeaponModelHash;
```
---

### `WeaponItem(string item, Ped foundOn, string weaponModelId, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public WeaponItem(string item, Ped foundOn, string weaponModelId, EItemChance chance = EItemChance.Normal);
```

---

### `WeaponItem(string item, EItemLocation itemLocation, Vehicle foundIn, string weaponModelId, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public WeaponItem(string item, EItemLocation itemLocation, Vehicle foundIn, string weaponModelId, EItemChance chance = EItemChance.Normal);
```

---

### `WeaponItem(string item, Pickup pickup, string weaponModelId, EItemChance chance = EItemChance.Normal);`

Creates an instance.

```csharp
public WeaponItem(string item, Pickup pickup, string weaponModelId, EItemChance chance = EItemChance.Normal);
```

## Weapon Wheel Inventory Methods
:::important
__When talking about firearms, we mean guns like the things that go pew pew. If we say weapon, that means a melee weapon such as a knife. Throwables should work too in the context of melee weapons.__
:::
:::note
All methods found in this section are in the `PedAPI` class unless otherwise specified.
:::

### `GiveFirearmToPed(Ped ped, FirearmItem firearmItem, short ammoCount, bool equipNow);`

Gives a firearm to the specified ped.
This adds the firearm item to the ped's search items as well as to the GTA inventory.

```csharp
public static void GiveFirearmToPed(Ped ped, FirearmItem firearmItem, short ammoCount, bool equipNow);
```

---

### `RemoveFirearmFromPed(Ped ped, FirearmItem firearmItem);`

Removes a firearm from the specified ped.
This removes the firearm item from the ped's search items as well as from the GTA inventory.

```csharp
public static void RemoveFirearmFromPed(Ped ped, FirearmItem firearmItem);
```

---

### `GiveWeaponToPed(Ped ped, WeaponItem weaponItem, short ammoCount, bool equipNow);`

Gives a weapon to the specified ped.
This adds the weapon item to the ped's search items as well as to the GTA inventory.

```csharp
public static void GiveWeaponToPed(Ped ped, WeaponItem weaponItem, short ammoCount, bool equipNow);
```

---

### `RemoveWeaponFromPed(Ped ped, WeaponItem weaponItem);`

Removes a weapon from the specified ped.
This removes the weapon item from the ped's search items as well as from the GTA inventory.

```csharp
public static void RemoveWeaponFromPed(Ped ped, WeaponItem weaponItem);
```

## Enums

### `EItemColor`
Specifies different colors (bound to chances) of search items.
```csharp
internal enum EItemColor
{
    Green,
    Yellow,
    Red
}
```
#### Definitions

-   **`Green`**
    -   **Description:** The item is not illegal
-   **`Yellow`**
    -   **Description:** The item might be illegal and will need further investigating.
-   **`Red`**
    -   **Description:** The item is illegal.

---

### `EDrugType`
Specifies different drug types. Since this enum is marked as flags these can be combined.
E.g. a ped can be on multiple drugs or a <see cref="DrugItem"/> can contain multiple drugs.

```csharp
public enum EDrugType
{
    None,
    /// Opioid
    Morphine,
    /// Opioid
    Heroin,
    /// Opioid
    Codeine,
    /// Opioid
    Oxycodone,
    /// Opioid
    Hydrocodone,
    /// Opioid
    Fentanyl,
    /// Hallucinogen
    PCP,
    /// Hallucinogen
    LSD,
    /// Hallucinogen
    Mescaline,
    /// Hallucinogen
    Psilocybin,
    /// Hallucinogen
    Cannabis,
    /// Amphetamine
    Adderall,
    /// Amphetamine
    Concerta,
    /// Amphetamine
    Ritalin,
    /// Amphetamine
    Methamphetamine,
    /// Amphetamine
    Vyvanse,
    /// Amphetamine
    Cocaine,
    /// Antipsychotics
    Risperdal,
    /// Antipsychotics
    Seroquel,
    /// Antipsychotics
    Abilify,
    /// Antipsychotics
    Clozapine
}
```
#### Definitions
Each value in the enum represents a different type of drug. Look at the comment above a specific enum value to know which category of drug it is classified as.

### `EItemChance`
Specifies the probabilities of search items.
```csharp
public enum EItemChance
{
    VeryRare,
    Rare,
    Normal,
    Often,
    VeryOften
}
```
#### Definitions
Pretty self-explanatory.

---

### `EItemLocation`
Specifies the different locations of a search item.
```csharp
public enum EItemLocation
{
    None,
    Anywhere,
    DriverSeat,
    PassengerSeat,
    BackLeftSeat,
    BackRightSeat,
    Trunk
}
```

#### Definitions

-   **`None`**
    -   **Description:** No specific location. Mostly used for search items found on peds.
-   **`Anywhere`**
    -   **Description:** Item can be found anywhere. If a vehicle search item has this set as location it will be randomized.
-   **`DriverSeat`**
    -   **Description:** Item is around the driver seat.
-   **`PassengerSeat`**
    -   **Description:** Item is around the passenger seat.
-   **`BackLeftSeat`**
    -   **Description:** Item is around the back left seat.
-   **`BackRightSeat`**
    -   **Description:** Item is around the back right seat.
-   **`Trunk`**
    -   **Description:** Item is in the trunk.

---
### `EFirearmState`
Specifies the different states of a firearm.
```csharp
public enum EFirearmState
{
    Normal,
    ScratchedSN
}
```
#### Definitions

-   **`Normal`**
    -   **Description:** The firearm is OK.
-   **`ScratchedSN`**
    -   **Description:** The firearm's serial number is scratched.