/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMachineLearningWorkspaces } = require("@azure/arm-machinelearning");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update schedule.
 *
 * @summary Create or update schedule.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-10-01/examples/Schedule/createOrUpdate.json
 */
async function createOrUpdateSchedule() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const body = {
    properties: {
      description: "string",
      action: {
        actionType: "InvokeBatchEndpoint",
        endpointInvocationDefinition: {
          "9965593e-526f-4b89-bb36-761138cf2794": null,
        },
      },
      displayName: "string",
      isEnabled: false,
      properties: { string: "string" },
      tags: { string: "string" },
      trigger: {
        endTime: "string",
        expression: "string",
        startTime: "string",
        timeZone: "string",
        triggerType: "Cron",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.schedules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    name,
    body,
  );
  console.log(result);
}

async function main() {
  createOrUpdateSchedule();
}

main().catch(console.error);
