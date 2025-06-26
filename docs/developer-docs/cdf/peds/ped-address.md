---
sidebar_label: Ped Address
---

# Ped Address

The `PedAddress` class represents an address associated with a ped within the Common Data Framework. It encapsulates details such as the postal code, street name, and its corresponding world position.

## Properties

### `AddressPostal`

:::warning
While theoretically possible, this property should not typically return `Postal.Default` unless there are unusual postal configurations.
:::
Gets the postal code associated with this address.

```csharp
public readonly Postal AddressPostal;
```

-   **Type:** `CommonDataFramework.Modules.Postals.Postal`
-   **See Also:** [`Postal` class](/docs/api/common-data-framework/postals) (if you create this documentation)

---

### `StreetName`

:::note
This property is read-only.
:::
Gets the name of the street at this address.
```csharp
public readonly string StreetName;
```
---

### `Position`
:::note
This property is read-only.
:::
:::note
Depending on how the `PedAddress` object was constructed (e.g., directly from a `Postal` object), the Z-coordinate (height) might be set to `0`.
:::
Gets the world-coordinates position of this address.

```csharp
public readonly Vector3 Position;
```
-   **Type:** `Rage.Vector3` 
---

### `Zone`
:::note
This property is read-only.
:::
Gets the world zone (area name) where the `Position` of this address is located. 

```csharp
public WorldZone Zone;
```

-   **Type:** `LSPD_First_Response.Engine.Scripting.WorldZone`

## Constructors

### `PedAddress()`

Initializes a new instance of the `PedAddress` class with randomized address data. The postal code, street name, and position are randomly selected from available active postal codes.

```csharp
public PedAddress();
```

---

### `PedAddress(Postal postal, string streetName)`

Initializes a new instance of the `PedAddress` class using a specified postal code and street name. The position will be derived from the provided postal code.

```csharp
public PedAddress(Postal postal, string streetName);
```

#### Parameters

-   **`postal`**
    -   **Type:** `CommonDataFramework.Modules.Postals.Postal`
    -   **Description:** The postal code to associate with this address.
-   **`streetName`**
    -   **Type:** `string`
    -   **Description:** The name of the street for this address.

---

### `PedAddress(Vector3 position)`

Initializes a new instance of the `PedAddress` class based on a specific world-coordinates position. The nearest postal code and street name will be determined from the provided position.

```csharp
public PedAddress(Vector3 position);
```

#### Parameters

-   **`position`**
    -   **Type:** `Rage.Vector3`
    -   **Description:** The world-coordinates position to base the address on.

## Methods

### `ToString()`

Returns a string representation of the address, typically in the format: `PostalNumber StreetName`.

```csharp
public override string ToString();
```
-   **Returns:** A string representing the address.

## Postal

The `Postal` class represents a geographical postal code within the game world. It typically defines a block number and associated X and Y coordinates. These objects are often used to define general areas on the map.

### `Number`

Gets or sets a string value indicating the block number or identifier for this postal code.

```csharp
public string Number;
```
---

### `X`

Gets or sets a floating-point value indicating the X-coordinate of the postal code's central point in a `Vector3` representation.

```csharp
public float X;
```
---

### `Y`

Gets or sets a floating-point value indicating the Y-coordinate of the postal code's central point in a `Vector3` representation.

```csharp
public float Y;
```
---

### `Zone`

:::note
This property is read-only.
:::
Returns the world zone (area name) where this postal code is located, based on its X and Y coordinates.

```csharp
public WorldZone Zone;
```
-   **Type:** `LSPD_First_Response.Engine.Scripting.WorldZone`

## Operators

### Implicit Conversion to `Rage.Vector3`

Provides an implicit conversion from a `Postal` object to a `Rage.Vector3`. This allows `Postal` objects to be used directly where a `Vector3` is expected, for example, when dealing with positions in the game world. The Z-coordinate will be set to `0f` during this conversion.

```csharp
public static implicit operator Vector3(Postal value);
```

---

## NearestPostal 

The `NearestPostalCode` class is essentially a simple data structure (struct-like) used to store information about the closest postal code found relative to a given `Vector3` position.

### `NearestPostalCode(Postal code, float distance)`

Initializes a new instance of the `NearestPostalCode` class.

```csharp
public NearestPostalCode(Postal code, float distance);
```

#### Parameters

-   **`code`**
    -   **Type:** `CommonDataFramework.Modules.Postals.Postal`
    -   **Description:** The `Postal` object representing the nearest postal code.
-   **`distance`**
    -   **Description:** The calculated distance (in meters) from a reference `Vector3` to this postal code.

---

## Properties

### `Caption`
:::note
This property is read-only.
:::

Gets a formatted string caption suitable for display, often in UI elements like `ResText`. The format is `~w~[Postal Number] (~g~[Distance]m~w~)`. 

```csharp
public string Caption;
```

-   **Type:** `string`

---

### `Code`
:::note
This property is read-only.
:::
Gets the `Postal` object stored in this instance, representing the nearest postal code.

```csharp
public Postal Code;
```

-   **Type:** `CommonDataFramework.Modules.Postals.Postal`

---

### `Distance`
:::note
This property is read-only.
:::
Gets the distance value stored in this instance. This represents the distance from a reference point to the `Code`'s location.

```csharp
public float Distance; 
```