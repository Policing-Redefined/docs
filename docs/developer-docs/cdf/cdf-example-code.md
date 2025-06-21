---
sidebar_label: 'Example Code'
---

# Example for developers
```csharp
using CommonDataFramework.API;
using CommonDataFramework.Modules;
using CommonDataFramework.Modules.PedDatabase;
using CommonDataFramework.Modules.VehicleDatabase;
using LSPD_First_Response.Mod.API;
using Rage;
using Rage.Attributes;

public class EntryPoint : Plugin
{
    internal static bool OnDutyState;
    
    public override void Initialize()
    {
        LSPDFRFunctions.OnOnDutyStateChanged += OnOnDutyStateChanged;
        Game.AddConsoleCommands();
    }

    public override void Finally()
    {
        LSPDFRFunctions.OnOnDutyStateChanged -= OnOnDutyStateChanged;
    }

    // Example of getting ped data:
    [ConsoleCommand]
    internal static void Command_LogClosestPed(bool changeHuntingPermit)
    {
        Ped[] peds = Game.LocalPlayer.Character.GetNearbyPeds(1);
        if (peds.Length == 0)
        {
            Game.LogTrivial("Could not find any nearby ped.");
            return;
        }

        Ped ped = peds[0];
        PedData pedData = ped.GetPedData();
        Game.LogTrivial($"Ped name: {pedData.FullName}.");
        
        // Example of giving the ped a hunting permit:
        if (changeHuntingPermit && pedData.HuntingPermit.Status != EDocumentStatus.Valid)
        {
            pedData.HuntingPermit.Status = EDocumentStatus.Valid;
            Game.LogTrivial($"Hunting permit expiration: {pedData.HuntingPermit.ExpirationDate:MM/dd/yyyy}");
        }
    }

    // Example of getting vehicle data:
    [ConsoleCommand]
    internal static void Command_LogClosestVehicle(bool changeRegistration)
    {
        Vehicle[] vehicles = Game.LocalPlayer.Character.GetNearbyVehicles(1);
        if (vehicles.Length == 0)
        {
            Game.LogTrivial("Could not find any nearby vehicle.");
            return;
        }

        Vehicle vehicle = vehicles[0];
        VehicleData vehicleData = vehicle.GetVehicleData();
        Game.LogTrivial($"Vehicle VIN: {vehicleData.Vin}.");
        Game.LogTrivial($"Vehicle Owner: {vehicleData.Owner.FullName} (Type: {vehicleData.OwnerType})."); // <VehicleData>.Owner -> PedData
        
        // Example of setting a vehicle's registration as expired:
        if (changeRegistration && vehicleData.Registration.Status != EDocumentStatus.Expired)
        {
            vehicleData.Registration.Status = EDocumentStatus.Expired;
            Game.LogTrivial($"Vehicle registration expired on: {vehicleData.Registration.ExpirationDate:MM/dd/yyyy}");
        }
    }

    private static void OnOnDutyStateChanged(bool onDuty)
    {
        OnDutyState = onDuty;
        
        // CDF might take some time until it fully read the users .xml and .ini file on startup.
        // This means that if you try to access CDF stuff before it was marked as ready, it will have to fall back to default values.
        // One way of solving this:
        
        GameFiber.WaitUntil(CDFFunctions.IsPluginReady, 30000); // The fiber will wait until CDF loaded fully.
        // ...rest of your startup code that includes CDF usage.
        
        // Alternatively, if you don't care about the default values or you are not using CDF right on startup, you can simply skip this.
    }
```
