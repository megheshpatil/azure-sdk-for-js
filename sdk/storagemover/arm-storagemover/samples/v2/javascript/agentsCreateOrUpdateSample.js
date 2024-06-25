/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageMoverClient } = require("@azure/arm-storagemover");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 *
 * @summary Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/stable/2024-07-01/examples/Agents_CreateOrUpdate_MaximumSet.json
 */
async function agentsCreateOrUpdateMaximumSet() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] || "60bcfc77-6589-4da2-b7fd-f9ec9322cf95";
  const resourceGroupName = process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const agentName = "examples-agentName";
  const agent = {
    description: "Example Agent Description",
    arcResourceId:
      "/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName",
    arcVmUuid: "3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9",
    uploadLimitSchedule: {
      weeklyRecurrences: [
        {
          days: ["Monday"],
          endTime: { hour: 18, minute: 30 },
          limitInMbps: 2000,
          startTime: { hour: 9, minute: 0 },
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.agents.createOrUpdate(
    resourceGroupName,
    storageMoverName,
    agentName,
    agent,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 *
 * @summary Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/stable/2024-07-01/examples/Agents_CreateOrUpdate_MinimumSet.json
 */
async function agentsCreateOrUpdateMinimumSet() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] || "60bcfc77-6589-4da2-b7fd-f9ec9322cf95";
  const resourceGroupName = process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const agentName = "examples-agentName";
  const agent = {
    arcResourceId:
      "/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName",
    arcVmUuid: "3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.agents.createOrUpdate(
    resourceGroupName,
    storageMoverName,
    agentName,
    agent,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 *
 * @summary Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/stable/2024-07-01/examples/Agents_CreateOrUpdate_UploadLimitSchedule_Overnight.json
 */
async function agentsCreateOrUpdateWithOvernightUploadLimitSchedule() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] || "60bcfc77-6589-4da2-b7fd-f9ec9322cf95";
  const resourceGroupName = process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const agentName = "examples-agentName";
  const agent = {
    arcResourceId:
      "/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName",
    arcVmUuid: "3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9",
    uploadLimitSchedule: {
      weeklyRecurrences: [
        {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          endTime: { hour: 24, minute: 0 },
          limitInMbps: 2000,
          startTime: { hour: 18, minute: 0 },
        },
        {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          endTime: { hour: 9, minute: 0 },
          limitInMbps: 2000,
          startTime: { hour: 0, minute: 0 },
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.agents.createOrUpdate(
    resourceGroupName,
    storageMoverName,
    agentName,
    agent,
  );
  console.log(result);
}

async function main() {
  agentsCreateOrUpdateMaximumSet();
  agentsCreateOrUpdateMinimumSet();
  agentsCreateOrUpdateWithOvernightUploadLimitSchedule();
}

main().catch(console.error);
