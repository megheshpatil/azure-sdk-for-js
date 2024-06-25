/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RecoveryServicesClient } = require("@azure/arm-recoveryservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns a specified private link resource that need to be created for Backup and SiteRecovery
 *
 * @summary Returns a specified private link resource that need to be created for Backup and SiteRecovery
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/GetPrivateLinkResources.json
 */
async function getPrivateLinkResource() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] || "6c48fa17-39c7-45f1-90ac-47a587128ace";
  const resourceGroupName = process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "petesting";
  const vaultName = "pemsi-ecy-rsv2";
  const privateLinkResourceName = "backupResource";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.privateLinkResourcesOperations.get(
    resourceGroupName,
    vaultName,
    privateLinkResourceName,
  );
  console.log(result);
}

async function main() {
  getPrivateLinkResource();
}

main().catch(console.error);
