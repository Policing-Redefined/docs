---
sidebar_label: 'What is it'
sidebar_position: 1
---

# Common Data Framework (CDF)

## Introduction

Common Data Framework 'CDF' is an open-source LSPDFR plugin that offers an extended vehicle and ped record API for developers. 

It's main goal is to replace missing features of the LSPDFR API while providing synchronization of that data across all plugins who use it. It is used by the PolicingRedefined plugin and is already planned to be implement in current and future plugins including some of your favorites like [GrammarPolice](https://www.lcpdfr.com/downloads/gta5mods/scripts/28003-grammarpolice/), [ReportsPlus](https://www.lcpdfr.com/downloads/gta5mods/scripts/46968-reportsplus-external-mdt-new-custom-reports/), and [ExternalPoliceComputer](https://www.lcpdfr.com/downloads/gta5mods/scripts/45400-externalpolicecomputer/). 

---
## Features
### General
- Lightweight and easy-to-use API: `ped.GetPedData()` and `vehicle.GetVehicleData()`, aswell as events
- Even when the entity stopped existing, CDF stores the data in the database for an extra period of time to ensure longer accessibility
- Very customizeable objects to alter almost any property to your needs
- End-user can customize probabilities through a simple `.ini` to enhance their gameplay experience without you having to write extra code

### Pedestrian Data
- Drivers license expiration
- Home address
- Permits (weapon, fishing, hunting)
- ...and more
- Syncs with LSPDFR persona, all persona fields can be directly accessed through the object too

### Vehicle Data
- VIN
- Registration
- Insurance
- Vehicle owner (of type `PedData`) aswell as different owner "types"

### Example images by PR
![Example of PR using PedData](https://i.ibb.co/NSLw5F1/Example-Ped-Data.png)
![Example of PR using VehicleData](https://i.ibb.co/1f5LttR/Example-Vehicle-Data.png)
