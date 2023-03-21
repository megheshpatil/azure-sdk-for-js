/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Simulate security alerts
 *
 * @summary Simulate security alerts
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2022-01-01/examples/Alerts/SimulateAlerts_example.json
 */
async function simulateSecurityAlertsOnASubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const ascLocation = "centralus";
  const alertSimulatorRequestBody = {
    properties: {
      bundles: [
        "AppServices",
        "DNS",
        "KeyVaults",
        "KubernetesService",
        "ResourceManager",
        "SqlServers",
        "StorageAccounts",
        "VirtualMachines",
        "CosmosDbs",
      ],
      kind: "Bundles",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.alerts.beginSimulateAndWait(ascLocation, alertSimulatorRequestBody);
  console.log(result);
}

async function main() {
  simulateSecurityAlertsOnASubscription();
}

main().catch(console.error);
