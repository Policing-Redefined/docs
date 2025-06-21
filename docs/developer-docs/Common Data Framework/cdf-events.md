---
sidebar_label: 'CDF Events'
sidebar_position: 4
---
# CDF Events

CDF provides events that developers can subscribe to in order to help their plugins become more responsive and performant. 

### `OnPedDataRemoved`

Invoked when `PedData` for a specific ped is removed from CDF.

```csharp
public static event OnPedDataRemovedDelegate OnPedDataRemoved;
```

:::info Important
This event is not invoked if the entire cache is cleared; it specifically pertains to the removal of individual `PedData` entries.
:::

---

### `OnVehicleDataRemoved`

Invoked when `VehicleData` is removed from the associated database within the Common Data Framework.

```csharp
public static event OnVehicleDataRemovedDelegate OnVehicleDataRemoved;
```

:::info Important
This event is not invoked if the entire cache is cleared; it specifically pertains to the removal of individual `VehicleData` entries.
:::

---

### Delegate Type

For details on the signature and parameters for each delegate, refer to the [Common Data Framework Delegates](/docs/developer-docs/Common%20Data%20Framework/delegates.md) page.