/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
 *
 * @summary Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/EdgeNodes_List.json
 */
async function edgeNodesList() {
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.edgeNodes.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  edgeNodesList();
}

main().catch(console.error);
