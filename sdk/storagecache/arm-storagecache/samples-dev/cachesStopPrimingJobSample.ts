/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrimingJobIdParameter,
  CachesStopPrimingJobOptionalParams,
  StorageCacheManagementClient,
} from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Schedule a priming job for deletion.
 *
 * @summary Schedule a priming job for deletion.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2024-03-01/examples/StopPrimingJob.json
 */
async function stopPrimingJob() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const primingJobId: PrimingJobIdParameter = {
    primingJobId: "00000000000_0000000000",
  };
  const options: CachesStopPrimingJobOptionalParams = { primingJobId };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginStopPrimingJobAndWait(
    resourceGroupName,
    cacheName,
    options,
  );
  console.log(result);
}

async function main() {
  stopPrimingJob();
}

main().catch(console.error);
